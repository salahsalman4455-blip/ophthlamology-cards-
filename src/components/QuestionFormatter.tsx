import React, { useMemo, useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface QuestionPromptProps {
  content: string;
  topic?: string;
  chapterTitle?: string;
  type?: string;
  title?: string;
  answer?: string;
}

export function extractCoreTerms(title?: string, topic?: string): string[] {
  const termsSet = new Set<string>();
  
  const cleanTerm = (t: string) => {
    return t
      .replace(/Definition\s*&\s*Etiology/gi, '')
      .replace(/Definition\s*&\s*Classification/gi, '')
      .replace(/Definition\s*&\s*Etiology\s*classification/gi, '')
      .replace(/Clinical\s*Picture\s*of/gi, '')
      .replace(/Clinical\s*Picture/gi, '')
      .replace(/Clinical\s*Features\s*of/gi, '')
      .replace(/Clinical\s*Features/gi, '')
      .replace(/Features\s*of/gi, '')
      .replace(/Characteristics/gi, '')
      .replace(/Management\s*&\s*CT\s*Scan\s*Role/gi, '')
      .replace(/Management/gi, '')
      .replace(/Treatment\s*of/gi, '')
      .replace(/Treatment/gi, '')
      .replace(/Anatomy\s*of\s*the/gi, '')
      .replace(/Anatomy/gi, '')
      .replace(/Physiology\s*of\s*the/gi, '')
      .replace(/Physiology/gi, '')
      .replace(/Pathogenesis\s*&\s*Stages\s*of/gi, '')
      .replace(/Pathogenesis/gi, '')
      .replace(/Presentation\s*&\s*Management/gi, '')
      .replace(/Causes\s*of/gi, '')
      .replace(/Causes/gi, '')
      .replace(/General\s*Treatment\s*Lines\s*for/gi, '')
      .replace(/Description/gi, '')
      .replace(/Outline/gi, '')
      .replace(/Differentiating/gi, '')
      .replace(/Differentiation\s*of/gi, '')
      .replace(/Anomalies/gi, '')
      .replace(/Reflexes/gi, '')
      .replace(/Reflex/gi, '')
      .replace(/Pathway/gi, '')
      .replace(/Anatomy\s*&\s*Physiology/gi, '')
      .replace(/Gross\s*Anatomy/gi, '')
      .replace(/Gross/gi, '')
      .replace(/Types\s*and\s*Features/gi, '')
      .replace(/Features/gi, '')
      .replace(/Involvement/gi, '')
      .replace(/Case\s*Study/gi, '')
      .replace(/Preoperative\s*Assessment/gi, '')
      .replace(/Preoperative\s*Preparation\s*for/gi, '')
      .replace(/Preoperative/gi, '')
      .replace(/Preparation/gi, '')
      .replace(/Extraction/gi, '')
      .replace(/Surgical\s*Techniques\s*for/gi, '')
      .replace(/Surgical\s*Technique/gi, '')
      .replace(/Defects/gi, '')
      .replace(/Field/gi, '')
      .replace(/Visual/gi, '')
      .trim();
  };

  const processAndAdd = (raw?: string) => {
    if (!raw) return;
    const cleaned = raw.trim();
    if (cleaned.length > 3) {
      termsSet.add(cleaned);
    }
    let core = cleanTerm(cleaned);
    core = core.replace(/^[\s&,\-:\u00A0]+/g, '').replace(/[\s&,\-:\u00A0]+$/g, '').trim();
    if (core.length > 3) {
      termsSet.add(core);
      const subParts = core.split(/\s+(?:and|&|vs|or|with|\/)\s+/gi);
      if (subParts.length > 1) {
        subParts.forEach(sp => {
          const cleanSp = sp.trim();
          if (cleanSp.length > 3) {
            termsSet.add(cleanSp);
          }
        });
      }
    }
  };

  processAndAdd(topic);
  processAndAdd(title);

  // Common ophthalmic conditions / keywords
  const commonOphthalmicTerms = [
    "Orbital Cellulitis", "orbital cellulitis", "Preseptal Cellulitis", "preseptal cellulitis",
    "Cavernous Sinus Thrombosis", "cavernous sinus thrombosis", "Cataract", "cataract",
    "Congenital Cataract", "Developmental Cataract", "Senile Cataract", "Cortical Cataract", 
    "Nuclear Cataract", "Complicated Cataract", "Traumatic Cataract", "After-Cataract",
    "Posterior Capsule Opacification", "Optic Neuritis", "Papillitis", "Retrobulbar Neuritis",
    "Papilledema", "Optic Atrophy", "Retinitis Pigmentosa", "Vossius Ring",
    "Elschnig's pearls", "Capsular Fibrosis", "Soemmering's ring", "Dacryocystitis",
    "Ligneous Conjunctivitis", "Trachoma", "Ophthalmia Neonatorum", "Spring Catarrh",
    "Vernal Keratoconjunctivitis", "Phlyctenular Conjunctivitis", "Pterygium", "Symblepharon",
    "Pinguecula", "Dry Eye Syndrome", "Keratoconus", "Bacterial Corneal Ulcer", "Hypopyon",
    "Fungal Corneal Ulcer", "Viral Keratitis", "Dendritic Ulcer", "Disciform Keratitis",
    "Acanthamoeba Keratitis", "Corneal Opacity", "Nebula", "Macula", "Leucoma", "Krukenberg Spindle",
    "Blepharitis", "Stye", "Hordeolum", "Chalazion", "Trichiasis", "Entropion", "Ectropion",
    "Ptosis", "Lagophthalmos", "Sympathetic Ophthalmitis", "Endophthalmitis", "Panophthalmitis",
    "Primary Open Angle Glaucoma", "Primary Angle Closure Glaucoma", "Buphthalmos",
    "Developmental Glaucoma", "Secondary Glaucoma", "Uveitis", "Anterior Uveitis", "Iridocyclitis",
    "Intermediate Uveitis", "Posterior Uveitis", "Choroiditis", "Retinitis", "Retinal Detachment",
    "Diabetic Retinopathy", "Hypertensive Retinopathy", "Retinoblastoma", "Strabismus", "Esotropia",
    "Exotropia", "Hypertropia", "Ambyclopia", "Refractive Errors", "Myopia", "Hypermetropia",
    "Astigmatism", "Presbyopia", "Anisometropia", "Aphakia"
  ];

  commonOphthalmicTerms.forEach(term => {
    termsSet.add(term);
  });

  return Array.from(termsSet)
    .filter(t => t.length > 3)
    .sort((a, b) => b.length - a.length);
}

export function renderTextWithHighlights(text: string, title?: string, topic?: string): React.ReactNode {
  if (!text) return "";
  
  const terms = extractCoreTerms(title, topic);
  if (terms.length === 0) return text;

  // Let's escape regex special characters
  const escapedTerms = terms.map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
  
  // Build safe case-insensitive RegExp matching our terms as complete words
  const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');

  const parts = text.split(regex);
  if (parts.length <= 1) return text;

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <span 
              key={index} 
              className="text-[#DC2626] font-extrabold text-[1.14em] underline decoration-red-600 decoration-2 underline-offset-4 inline-block tracking-normal select-all transition-all duration-150"
            >
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}

export function parseQuestionContent(content: string): { scenario: string; questions: string[] } {
  const text = content.trim();

  // 1. Check for explicit line breaks with numbers or letters at the start of lines, e.g. case scenarios
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length > 1) {
    const questions: string[] = [];
    const scenarioParts: string[] = [];
    
    lines.forEach(line => {
      // Matches "1. ", "1)", "a.", "A.", "- ", "• " etc.
      if (/^(?:\d+|[a-zA-Z])[\s.)\-]+/.test(line) || /^[-•●*]\s+/.test(line)) {
        questions.push(line.replace(/^(?:\d+|[a-zA-Z])[\s.)\-]+/, '').replace(/^[-•●*]\s+/, '').trim());
      } else {
        scenarioParts.push(line);
      }
    });

    if (questions.length > 0) {
      return {
        scenario: scenarioParts.join('\n') || text,
        questions: questions
      };
    }
  }

  // 2. Check for comma or "and" separated clauses
  let temp = text;
  temp = temp.replace(/,\s+and\s+/gi, '||');
  temp = temp.replace(/;\s+and\s+/gi, '||');
  temp = temp.replace(/;\s+/g, '||');
  
  // also comma followed by specific words suggesting separate prompt action
  temp = temp.replace(/,\s+(?=(?:its|how|why|what|describe|define|state|outline|differentiate|contrast|prevent|anatomical|clinical|etiological|pathological|is\s+it|where|when|which|who|whom|list|enumerate|name|provide|give|explain|discuss|compare|classify|identify|distinguish|determine))/gi, '||');
  
  // and followed by action words
  temp = temp.replace(/\s+and\s+(?=(?:how|why|what|describe|define|state|outline|differentiate|contrast|prevent|anatomical|clinical|etiological|pathological|is\s+it|where|when|which|who|whom|list|enumerate|name|provide|give|explain|discuss|compare|classify|identify|distinguish|determine))/gi, '||');

  const rawParts = temp.split('||').map(p => p.trim()).filter(p => p.length > 0);
  
  if (rawParts.length > 1) {
    const formattedQuestions: string[] = [];
    rawParts.forEach((part, index) => {
      let cleaned = part;
      // strip active ending punctuations
      cleaned = cleaned.replace(/[.,\s;\-:]+$/, '');
      
      // Capitalize first letter
      cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
      
      // End with ? or :
      if (index === rawParts.length - 1 && text.endsWith('?')) {
        if (!cleaned.endsWith('?')) cleaned += '?';
      } else {
        if (/^(?:how|why|what|where|when|which|who|whom|is|does|are|can|could|should|will|would)/i.test(cleaned)) {
          cleaned += '?';
        } else {
          cleaned += ':';
        }
      }
      formattedQuestions.push(cleaned);
    });

    // We can use the first sentence as scenario or just the full text. 
    // To match the requested style, let's have the first element be the "Scenario / main quest", and subsequent are "questions" list
    return {
      scenario: text,
      questions: formattedQuestions
    };
  }

  // 3. Fallback: single question
  return {
    scenario: text,
    questions: []
  };
}

export default function QuestionPrompt({ content, topic, chapterTitle, type, title, answer }: QuestionPromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!answer) return;
    const plainText = `السؤال:\n${content}\n\nالإجابة:\n${answer}`;
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const isCase = useMemo(() => {
    const matchTitle = title?.toLowerCase().includes('case') || false;
    const matchTopic = topic?.toLowerCase().includes('case') || false;
    const matchType = type?.toLowerCase().includes('case') || false;
    const hasNumberedList = /\n\s*(?:1|\d+)[\s.)\-]+/.test(content);
    return matchTitle || matchTopic || matchType || hasNumberedList;
  }, [title, topic, type, content]);

  const parsed = useMemo(() => {
    if (isCase) {
      return parseQuestionContent(content);
    }
    return {
      scenario: content,
      questions: []
    };
  }, [isCase, content]);

  return (
    <div className="w-full flex flex-col text-left font-sans">
      {/* Copy Button Row */}
      {answer && (
        <div className="flex justify-end mb-4">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 shadow-sm transition-all active:scale-95 shrink-0 cursor-pointer select-none"
            title="نسخ السؤال والإجابة"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 animate-in zoom-in-50 duration-150" />
                <span className="text-emerald-700 font-medium">تم نسخ السؤال والإجابة!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-medium">نسخ السؤال والإجابة</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Scenario / Main Prompt Container with Border-Left Accent */}
      {isCase ? (
        <div className="bg-[#EFF6FF] border-l-[4px] border-[#2563EB] rounded-2xl p-6 md:p-8 text-left shadow-sm">
          <p className="text-base md:text-lg leading-relaxed font-semibold max-w-4xl text-[#1E40AF]">
            {renderTextWithHighlights(parsed.scenario, title, topic)}
          </p>
        </div>
      ) : (
        <div className="bg-[#F8FAFC] border-l-[4px] border-[#2563EB] rounded-2xl p-6 md:p-8 text-left shadow-sm">
          <p className="text-slate-800 text-base md:text-lg leading-relaxed font-semibold max-w-4xl">
            {renderTextWithHighlights(content, title, topic)}
          </p>
        </div>
      )}

      {/* Sub-Questions list (if multiple items are present) */}
      {isCase && parsed.questions.length > 0 && (
        <>
          <div className="flex items-center gap-1.5 text-[#1D4ED8] font-bold text-xs tracking-wider uppercase mt-6 mb-3">
            <span className="text-sm font-black">?</span> Questions:
          </div>
          <div className="space-y-3">
            {parsed.questions.map((subQ, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/90 rounded-2xl p-4 md:p-5 shadow-sm hover:border-slate-300 transition-all flex items-start gap-4 text-left duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-slate-900 shrink-0 mt-2" />
                <span className="text-slate-900 font-bold text-sm md:text-base leading-relaxed">
                  {renderTextWithHighlights(subQ, title, topic)}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface AnswerFormatterProps {
  answer: string;
  topic?: string;
  title?: string;
}

export function AnswerFormatter({ answer, topic, title }: AnswerFormatterProps) {
  const lines = useMemo(() => answer.split('\n'), [answer]);

  return (
    <div className="space-y-3 font-sans w-full">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (trimmed.length === 0) {
          return <div key={idx} className="h-2" />;
        }

        // Count leading spaces to determine hierarchy
        const leadingSpaces = line.match(/^ */)?.[0].length || 0;
        
        let indentClass = "";
        if (leadingSpaces >= 6) {
          indentClass = "pl-6 border-l-2 border-slate-200 ml-4 py-0.5";
        } else if (leadingSpaces >= 3) {
          indentClass = "pl-4 border-l border-slate-300 ml-2 py-0.5";
        }

        let cleanText = trimmed;
        let isBullet = false;
        let isHeading = false;
        let customBullet = "";

        // Detect bullet points inside text
        if (/^[-*•●]\s+/.test(cleanText)) {
          isBullet = true;
          cleanText = cleanText.replace(/^[-*•●]\s+/, '');
        }

        // Detect sub-numbered lists (e.g. "1.", "1)", "a.")
        const numMatch = cleanText.match(/^(\d+(?:\.\d+)*[\s.)\-]+)/);
        const letterMatch = !numMatch && cleanText.match(/^([a-zA-Z])[\s.)\-]+\s+/);
        
        if (numMatch) {
          isBullet = true;
          customBullet = numMatch[1].trim();
          cleanText = cleanText.replace(/^(\d+(?:\.\d+)*[\s.)\-]+)/, '');
        } else if (letterMatch) {
          isBullet = true;
          customBullet = letterMatch[1].trim();
          cleanText = cleanText.replace(/^([a-zA-Z])[\s.)\-]+\s+/, '');
        }

        // Detect Colon Headings (e.g. "Symptoms:" or "1. Definition:")
        // If it starts with standard headings or ends with a colon, or has a colon early and then is empty or short
        const hasColon = cleanText.includes(':');
        const colonPos = cleanText.indexOf(':');
        const isColonHeader = hasColon && (cleanText.endsWith(':') || colonPos < 20 && cleanText.length - colonPos < 4);
        
        if (isColonHeader && !cleanText.includes('http')) {
          isHeading = true;
        }

        // Inline definition prefix (e.g. "Definition: A rare, bilateral...")
        const hasInlinePrefix = hasColon && !isHeading && colonPos > 0 && colonPos < 35 && cleanText.length - colonPos > 5 && !cleanText.includes('http');

        let prefix = "";
        let bodyText = cleanText;
        if (hasInlinePrefix) {
          prefix = cleanText.substring(0, colonPos + 1);
          bodyText = cleanText.substring(colonPos + 1).trim();
        }

        if (isHeading) {
          return (
            <div key={idx} className={`mt-5 mb-2.5 ${indentClass}`}>
              <h4 className="text-slate-900 font-extrabold text-sm md:text-base tracking-tight uppercase border-b border-slate-100 pb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-600 rounded-full shrink-0" />
                {renderTextWithHighlights(cleanText, title, topic)}
              </h4>
            </div>
          );
        }

        return (
          <div key={idx} className={`flex items-start gap-3 leading-relaxed text-slate-700 text-sm md:text-base ${indentClass}`}>
            {isBullet ? (
              customBullet ? (
                <span className="bg-blue-50 border border-blue-105 text-blue-700 text-[10px] md:text-xs font-black min-w-[22px] h-[22px] flex items-center justify-center rounded-lg shrink-0 mt-0.5 select-none px-1 shadow-sm font-mono">
                  {customBullet}
                </span>
              ) : (
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2 relative">
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-pulse" />
                </div>
              )
            ) : (
              leadingSpaces > 0 ? (
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0 mt-2" />
              ) : (
                <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-2" />
              )
            )}
            
            <span className="font-sans font-medium text-slate-800">
              {prefix && (
                <strong className="text-slate-950 font-bold block md:inline md:mr-1 text-slate-900">
                  {prefix}
                </strong>
              )}
              {renderTextWithHighlights(bodyText, title, topic)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
