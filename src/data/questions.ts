import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // --- Topic 0: Anatomy & Physiology of the Eyelids ---
  {
    id: 'eyelid_anatomy_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Gross Anatomy of Eyelids & Palpebral Fissure',
    content: 'Define the palpebral fissure, describe its normal dimensions and describe the angles (canthi).',
    answer: 'Definition: The palpebral fissure is the elliptical space between the opened eyelids.\n\nDimensions:\n- The upper eyelid normally covers 1-2 mm (or 1-3 mm) of the upper part of the cornea.\n- The lower eyelid lies just below the cornea or touches the lower limbus.\n\nAngles (Canthi):\n- Medial Canthus: Rounded and surrounds the tear lake (lacus lacrimalis), containing the caruncle and plica semilunaris.\n- Lateral Canthus: Forms an acute angle.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q2',
    chapterId: 1,
    type: 'short-answer',
    title: 'Anatomy of the Eyelid Margin',
    content: 'Describe the anatomical landmarks of the ciliary and lacrimal parts of the eyelid margin.',
    answer: 'The eyelid margin is the free margin of the lid, 2-3 mm in width, divided by the lacrimal papilla (with the punctum) into:\n\n1. Lacrimal part (medial 1/6th, from punctum to medial canthus): Contains no eyelashes (cilia) or tarsal glands. It contains the lacrimal canaliculus.\n\n2. Ciliary part (lateral 5/6th, from punctum to lateral canthus): Includes:\n   - Anterior border: Rounded, carries eyelashes in 2-3 rows with Zeis\' sebaceous glands and Moll\'s sweat glands.\n   - Grey line: The neurovascular bundle and represents the surgical splitting point between the anterior and posterior lamellae.\n   - White line: Formed by the orifices of the Meibomian glands.\n   - Sharp posterior border: Assists in tear conduction and stays closely apposed to the globe.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q3',
    chapterId: 1,
    type: 'short-answer',
    title: 'Layers of the Eyelid',
    content: 'Enumerate the layers of the eyelid from outside inwards.',
    answer: 'The layers of the eyelid from outside inwards are:\n1. Skin: Very thin, elastic, and loosely adherent.\n2. Subcutaneous areolar tissue: Free of fat.\n3. Muscle layer: Striated muscles (Orbicularis oculi and Levator palpebrae superioris) and non-striated muscles (Müller\'s muscle and lower lid retractors).\n4. Submuscular areolar tissue: Contains the peripheral arterial arcade and sensory nerves.\n5. Fibrous layer: Formed of the tarsal plates (dense fibrous skeleton), Meibomian glands, and orbital septum.\n6. Palpebral conjunctiva: Thin, highly vascular, and firmly adherent to the tarsal plate (contains the sulcus subtarsalis 2 mm above the lid margin).',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q4',
    chapterId: 1,
    type: 'short-answer',
    title: 'The Fibrous Layer of the Eyelid',
    content: 'What are the main components of the fibrous layer of the eyelid and their structural functions?',
    answer: 'The fibrous layer consists of:\n1. Tarsal plates: Dense fibrous skeleton of the eyelids (upper is 8-12 mm in height, lower is 4-5 mm). They fuse medially and laterally with the palpebral ligaments.\n2. Meibomian (tarsal) glands: Modified elongated sebaceous glands (around 30 in the upper lid, 25 in the lower lid) embedded inside the tarsus. They secrete an oily lipid film that prevents tear evaporation.\n3. Orbital septum: A thin fibrous diaphragm separating the eyelids from the orbit. It arises from the periosteum of the orbital margin and attaches to the levator aponeurosis (upper lid) or lower tarsus (lower lid), keeping the orbital fat in place.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q5',
    chapterId: 1,
    type: 'short-answer',
    title: 'Anatomy of the Orbicularis Oculi Muscle',
    content: 'Describe the anatomical parts, functions, and nerve supply of the Orbicularis Oculi muscle, and state the consequences of its paralysis.',
    answer: 'Parts and Functions:\n1. Orbital part: Responsible for tight/forced eyelid closure.\n2. Palpebral part: Responsible for gentle/reflex closure (blinking). It is subdivided into preseptal, pretarsal, and the muscle of Riolan (located along the lid margin for apposition of the lid margin to the globe).\n3. Lacrimal part (Horner\'s muscle): Draws the lacrimal canaliculi medially to assist the lacrimal pump mechanism.\n\nNerve Supply: Facial Nerve (7th Cranial Nerve).\n\nParalysis Consequences: Causes lagophthalmos (inability to close the eye), epiphora (overflow of tears due to pump failure), and paralytic ectropion.',
    isClinical: true,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q6',
    chapterId: 1,
    type: 'short-answer',
    title: 'Anatomy of the Levator Palpebrae Superioris (LPS) Muscle',
    content: 'State the origin, course, insertions, and nerve supply of the Levator Palpebrae Superioris muscle.',
    answer: 'Function: Elevates the upper eyelid.\n\nOrigin: Lesser wing of the sphenoid at the apex of the orbit.\n\nCourse: Runs forward above the superior rectus muscle and ends anteriorly in an aponeurosis.\n\nInsertions:\n1. Main insertion: Anterior surface of the tarsal plate.\n2. Cutaneous: Skin of the upper eyelid, forming the eyelid crease.\n3. Medial and lateral horns: Attach to the palpebral ligaments.\n4. Inferior: Superior conjunctival fornix.\n\nNerve Supply: Oculomotor Nerve (3rd Cranial Nerve). Paralysis causes severe ptosis.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q7',
    chapterId: 1,
    type: 'short-answer',
    title: 'Non-Striated (Smooth) Muscles of the Eyelids',
    content: 'Describe the smooth/non-striated muscles of the eyelids, their innervation, and clinical pathology.',
    answer: '1. Müller\'s Muscle (Superior Tarsal Muscle):\n   - Origin & Course: Arises from the under surface of the levator palpebrae superioris and inserts onto the superior border of the tarsal plate.\n   - Innervation: Sympathetic nervous system.\n   - Function: Sustains physiological elevation of the upper lid.\n   - Pathology: Paralysis causes mild ptosis as part of Horner\'s syndrome.\n\n2. Lower Lid Retractors (Inferior Tarsal Muscle):\n   - Origin & Course: Smooth muscle fibers extending from the inferior rectus complex and inserting into the lower tarsus.\n   - Innervation: Sympathetic nervous system.\n   - Function: Retracts the lower lid on downward gaze to maintain vertical stability of the palpebral fissure.',
    isClinical: true,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q8',
    chapterId: 1,
    type: 'short-answer',
    title: 'Vascular and Lymphatic Supply of Eyelids',
    content: 'Describe the arterial, venous, and lymphatic networks of the eyelids.',
    answer: 'Arterial Supply:\n- Forms marginal arcades (close to the margin) and peripheral arcades (on the superior border of the tarsus).\n- Formed by the anastomoses of the medial palpebral arteries (branch of Ophthalmic artery) and lateral palpebral arteries (branch of Lacrimal artery).\n\nVenous Drainage:\n- Pretarsal tissues drain into the Angular and Ophthalmic veins.\n- Post-tarsal tissues drain into the Ophthalmic veins.\n\nLymphatic Drainage:\n- Lateral half of lids: Drains into preauricular and parotid lymph nodes.\n- Medial half of lids: Drains into submandibular lymph nodes.\n- All eventually load into the deep cervical lymph nodes.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Eyelids'
  },
  {
    id: 'eyelid_anatomy_q9',
    chapterId: 1,
    type: 'short-answer',
    title: 'Innervation and Key Functions of the Eyelids',
    content: 'Enumerate the sensory, motor, and autonomic nerve supply of the eyelids, and summarize the primary protective and physiological functions of the eyelids.',
    answer: 'Nerve Supply:\n1. Sensory: Trigeminal nerve (V) — ophthalmic division (V1) for the upper lid, maxillary division (V2) for the lower lid.\n2. Motor: Facial nerve (VII) to the orbicularis oculi; Oculomotor nerve (III) to the levator palpebrae superioris.\n3. Autonomic: Sympathetic fibers to Müller\'s muscle.\n\nPrimary Functions:\n1. Protection of the eyeball (globe) from traumatic injury and excessive light.\n2. Distribution of tears (blinking) to keep the cornea wet.\n3. Assisting drainage of tears into the lacrimal sac (lacrimal pump).\n4. Promoting aqueous outflow via normal eyeball massage.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Eyelids'
  },

  // --- Topic 1: Blepharitis ---
  {
    id: 'eyelid_blepharitis_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Anterior Blepharitis & Etiology',
    content: 'Define Anterior Blepharitis and mention its main clinical variants based on etiology.',
    answer: 'Definition: It is a chronic inflammation of the eyelid margin affecting the skin around the base of eyelashes.\n\nVariants:\n1. Squamous (Seborrheic) variant: Metabolic etiology, associated with scalp dandruff.\n2. Ulcerative variant: Caused by acute Staphylococcus aureus infection.',
    isClinical: false,
    topic: 'Blepharitis'
  },
  {
    id: 'eyelid_blepharitis_q2',
    chapterId: 1,
    type: 'short-answer',
    title: 'Squamous vs. Ulcerative Blepharitis',
    content: 'Contrast between the signs of Squamous and Ulcerative Blepharitis.',
    answer: '- Squamous Blepharitis: Greasy grayish-white scales between the eyelashes.\n- Ulcerative Blepharitis: Lashes glued together by yellow crusts; when removed, they leave minute bleeding ulcers at the lid margin.',
    isClinical: true,
    topic: 'Blepharitis'
  },
  {
    id: 'eyelid_blepharitis_q3',
    chapterId: 1,
    type: 'short-answer',
    title: 'Complications of Anterior Blepharitis',
    content: 'Enumerate four major complications of Anterior Blepharitis.',
    answer: '1. Trichiasis (due to scarring at lashes\' roots).\n2. Madarosis (due to destruction of hair follicles).\n3. Chronic Conjunctivitis.\n4. Marginal corneal ulcers / Superficial punctate keratitis.',
    isClinical: true,
    topic: 'Blepharitis'
  },
  {
    id: 'eyelid_blepharitis_q4',
    chapterId: 1,
    type: 'short-answer',
    title: 'Treatment of Anterior Blepharitis',
    content: 'Outline the treatment protocol for Anterior Blepharitis.',
    answer: '1. Warm compresses.\n2. Removal of scales using a diluted solution of baby shampoo.\n3. Local antibiotic ointment application.',
    isClinical: false,
    topic: 'Blepharitis'
  },

  // --- Topic 2: Inflammations of the Eyelid Glands ---
  {
    id: 'eyelid_glands_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Hordeolum Externum vs. Internum',
    content: 'Differentiate between Hordeolum Externum and Hordeolum Internum regarding the affected gland and site of presentation.',
    answer: '- Hordeolum Externum (Stye): Acute suppurative infection of the Zeiss gland; presents as a red tender swelling directly at the lid margin.\n- Hordeolum Internum: Acute suppurative infection of the Meibomian gland; presents as a swelling away from the lid margin on the conjunctival side.',
    isClinical: true,
    topic: 'Inflammations of the Eyelid Glands (Hordeolum & Chalazion)'
  },
  {
    id: 'eyelid_glands_q2',
    chapterId: 1,
    type: 'short-answer',
    title: 'Contraindications in Stye Management',
    content: 'Mention the absolute clinical contraindication in managing a Stye and its risk.',
    answer: 'Contraindication: Do not press or squeeze to evacuate the stye.\nRisk: May spread the infection posteriorly, causing orbital cellulitis or cavernous sinus thrombosis.',
    isClinical: true,
    topic: 'Inflammations of the Eyelid Glands (Hordeolum & Chalazion)'
  },
  {
    id: 'eyelid_glands_q3',
    chapterId: 1,
    type: 'short-answer',
    title: 'Surgical Incisions: Stye vs. Hordeolum',
    content: 'Contrast the surgical incisions used for evacuating a Stye versus an Internal Hordeolum.',
    answer: '- Stye: Horizontal incision along the skin crease.\n- Internal Hordeolum: Vertical or cruciate incision from the conjunctival side.',
    isClinical: false,
    topic: 'Inflammations of the Eyelid Glands (Hordeolum & Chalazion)'
  },
  {
    id: 'eyelid_glands_q4',
    chapterId: 1,
    type: 'short-answer',
    title: 'Chalazion Definition and Clinical Picture',
    content: 'Define Chalazion and describe its hallmark clinical picture.',
    answer: 'Definition: A localized chronic inflammatory lipo-granuloma of a Meibomian gland.\n\nClinical Picture: Painless, firm swelling under the skin of the eyelid; the skin over it is freely mobile, and the underlying palpebral conjunctiva appears red or bluish-grey.',
    isClinical: true,
    topic: 'Inflammations of the Eyelid Glands (Hordeolum & Chalazion)'
  },
  {
    id: 'eyelid_glands_q5',
    chapterId: 1,
    type: 'short-answer',
    title: 'Chalazion Treatment & Recurrence Precaution',
    content: 'State the treatment of a large Chalazion and the safety measure required for recurrent cases in elderly patients.',
    answer: 'Large Chalazion Treatment: Incision - vertical or cruciate - and curettage from the conjunctival side.\n\nSafety Measure for Recurrence: Excision biopsy and histopathological examination to exclude Sebaceous cell carcinoma.',
    isClinical: true,
    topic: 'Inflammations of the Eyelid Glands (Hordeolum & Chalazion)'
  },
  {
    id: 'eyelid_glands_q6',
    chapterId: 1,
    type: 'short-answer',
    title: 'Recurrent Upper Lid Lesion in Elderly Case',
    content: 'A 62-year-old woman reports that her right eye has been irritated, red, tearing for months. Examination revealed a rolled-in lower lid margin. One year later, she presents with a swelling in her upper lid that does not change in size and is now becoming red and painful.\n\n1. What is the provisional diagnosis for the upper lid lesion?\n2. What is the first-line management for this condition?',
    answer: '1. Provisional Diagnosis: Recurrent Chalazion (becoming acutely infected/Internal Hordeolum).\n2. First-line management: Excision biopsy and histopathological examination (to rule out Sebaceous Cell Carcinoma in an elderly patient with a non-changing recurrent lesion).',
    isClinical: true,
    topic: 'Inflammations of the Eyelid Glands (Hordeolum & Chalazion)'
  },
  {
    id: 'eyelid_glands_q7',
    chapterId: 1,
    type: 'short-answer',
    title: 'Hordeolum Externum Definition',
    content: 'Define Hordeolum Externum.',
    answer: 'Definition: An acute suppurative inflammation of the Zeiss or Moll glands at the root of an eyelash, usually caused by Staphylococcus aureus infection.',
    isClinical: false,
    topic: 'Inflammations of the Eyelid Glands (Hordeolum & Chalazion)'
  },

  // --- Topic 3: Disorders of Eyelashes ---
  {
    id: 'eyelid_lashes_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Distichiasis & Treatment',
    content: 'Define Distichiasis and state its treatment principles.',
    answer: 'Definition: An abnormality where an extra row of lashes arises from the lid margin behind the grey line (at the Meibomian gland orifices).\n\nTreatment: Destruction of ectopic lashes via selective destruction (electrolysis) or cryotherapy after splitting the lid at the grey line.',
    isClinical: false,
    topic: 'Disorders of Eyelashes (Distichiasis & Trichiasis)'
  },
  {
    id: 'eyelid_lashes_q2',
    chapterId: 1,
    type: 'short-answer',
    title: 'Rubbing Lashes vs. Trichiasis',
    content: 'Differentiate between "Rubbing Lashes" and "Trichiasis" based on the clinical definition.',
    answer: '- Rubbing lashes: 4 or less inward misdirected lashes rubbing against the cornea or bulbar conjunctiva.\n- Trichiasis: An acquired condition with more than 4 lashes directed posteriorly rubbing against the cornea or bulbar conjunctiva.',
    isClinical: true,
    topic: 'Disorders of Eyelashes (Distichiasis & Trichiasis)'
  },
  {
    id: 'eyelid_lashes_q3',
    chapterId: 1,
    type: 'short-answer',
    title: 'Acquired Misdirected Lashes Causes',
    content: 'Enumerate three major causes of acquired mal-directed lashes.',
    answer: 'Any cicatrizing disease affecting the lid margin:\n1. Trachoma (commonest in Egypt).\n2. Ulcerative blepharitis.\n3. Trauma and chemical burns.',
    isClinical: true,
    topic: 'Disorders of Eyelashes (Distichiasis & Trichiasis)'
  },
  {
    id: 'eyelid_lashes_q4',
    chapterId: 1,
    type: 'short-answer',
    title: 'Permanent Treatment for Trichiasis',
    content: 'List the permanent treatment lines for managing Trichiasis.',
    answer: 'Destruction of involved lashes using:\n1. Electrolysis.\n2. Argon laser ablation.\n3. Diathermy.',
    isClinical: false,
    topic: 'Disorders of Eyelashes (Distichiasis & Trichiasis)'
  },
  {
    id: 'eyelid_lashes_q5',
    chapterId: 1,
    type: 'short-answer',
    title: 'Isolated Mal-directed Lashes Case',
    content: 'A patient complaining of foreign body sensation was found to have 2 mal-directed lashes in the middle of his upper eyelid. The lid margin was otherwise normal.\n\n1. What is the provisional diagnosis?\n2. What is the best permanent treatment for this condition?',
    answer: '1. Provisional Diagnosis: Rubbing Lashes (since the number is 4 or less).\n2. Best permanent treatment: Destruction of the involved hair follicles via Electrolysis or Argon Laser Ablation.',
    isClinical: true,
    topic: 'Disorders of Eyelashes (Distichiasis & Trichiasis)'
  },

  // --- Topic 4: Positional Anomalies ---
  {
    id: 'eyelid_positional_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Entropion & Etiology',
    content: 'Define Entropion and enumerate its four etiological types.',
    answer: 'Definition: Rolling inward of the lid margin with eyelashes rubbing against the eyeball.\n\nTypes:\n1. Congenital.\n2. Cicatricial (commonest cause is Trachoma).\n3. Spastic (due to reflex spasm of Riolan\'s muscle).\n4. Senile / Involutional (due to age-related degeneration of elastic tissue).',
    isClinical: false,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q2',
    chapterId: 1,
    type: 'short-answer',
    title: 'Ectropion Clinical Degrees',
    content: 'Define Ectropion and state its three clinical degrees.',
    answer: 'Definition: Rolling outward (outward rotation) of the lid margin.\n\nDegrees:\n- Mild: Lacrimal punctum is visible without pulling the lid.\n- Moderate: Tarsal conjunctiva is exposed.\n- Severe: Completely everted lid with exposure of the conjunctival fornix.',
    isClinical: true,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q3',
    chapterId: 1,
    type: 'short-answer',
    title: 'The Vicious Circle in Ectropion',
    content: 'Explain the pathogenesis of the "vicious circle" in Ectropion.',
    answer: 'Eversion of the lacrimal punctum causes epiphora -> Epiphora leads to eczematous skin reaction and scarring -> Scarring causes more ectropion and more eversion -> Aggravates epiphora further.',
    isClinical: true,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q4',
    chapterId: 1,
    type: 'short-answer',
    title: 'Paralytic Ectropion & Management',
    content: 'Mention the commonest cause of Paralytic Ectropion, its clinical signs, and management.',
    answer: 'Cause: Lower motor neuron facial nerve (7th nerve) palsy (Bell\'s palsy).\n\nSigns: Incomplete blinking, lagophthalmos, inability to elevate the eyebrow or pucker the mouth, definition loss of nasolabial fold.\n\nManagement: Help nerve recovery (Vit B, steroids, vasodilators), protect the cornea (artificial tears, night ointment, strapping), and perform surgical correction if needed.',
    isClinical: true,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q5',
    chapterId: 1,
    type: 'short-answer',
    title: 'Lower Lid Senile Entropion vs. Ectropion Pathogenesis',
    content: 'Enumerate the specific pathogenesis/causes of Senile (Involutional) Entropion versus Senile Ectropion in the lower lid.',
    answer: '- Senile Entropion: Age-related degeneration of elastic tissue within the eyelid, where the small, thin lower tarsus easily rolls inward under the effect of orbicularis spasm.\n- Senile Ectropion: Driven by gravity combined with redundant skin and laxity of the medial/lateral canthal tendons, while the lid remains supported by the globe.',
    isClinical: true,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q6',
    chapterId: 1,
    type: 'short-answer',
    title: 'Spastic Entropion Pathogenesis & Site',
    content: 'Mention the underlying pathogenesis of Spastic Entropion and state its commonest site.',
    answer: 'Pathogenesis: Caused by reflex spasm of Riolan\'s muscle (blepharospasm) triggered by acute ocular inflammation or chronic corneal irritation.\n- Commonest site: Lower eyelid (because its tarsus is small and thin, rolling inward easily).',
    isClinical: true,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q7',
    chapterId: 1,
    type: 'short-answer',
    title: 'Mechanical Ectropion Causes',
    content: 'List three specific causes of Mechanical Ectropion.',
    answer: 'Increased weight or mass on the lower lid pulling it downward:\n1. Large eyelid tumors.\n2. Multiple or massive chalazia.\n3. Severe tissue infiltration.',
    isClinical: true,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q8',
    chapterId: 1,
    type: 'short-answer',
    title: 'Cicatricial Ectropion Definitive Treatment',
    content: 'State the definitive treatment option for Cicatricial Ectropion caused by extensive cutaneous scarring.',
    answer: 'Skin grafting (after complete removal of the scar tissue) to replace the shortened anterior lamella.',
    isClinical: false,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },
  {
    id: 'eyelid_positional_q9',
    chapterId: 1,
    type: 'short-answer',
    title: 'Surgical Operations & Indications Matching',
    content: 'Match the specific named surgical operations in the textbook with their exact clinical indications.',
    answer: '- Snellen\'s Operation: Indicated for Cicatricial Entropion of the upper eyelid (common in Egypt due to Trachoma).\n- Van Millingen\'s Operation: Indicated for Trichiasis and Cicatricial Entropion of the upper eyelid by grafting mucous membrane into the lid margin.\n- Fasanella-Servat Operation: Indicated for mild ptosis with good levator function (resects part of tarsus, conjunctiva, and Muller\'s muscle).',
    isClinical: false,
    topic: 'Positional Anomalies (Entropion & Ectropion)'
  },

  // --- Topic 5: Lagophthalmos ---
  {
    id: 'eyelid_lago_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Lagophthalmos & Protective Mechanism',
    content: 'Define Lagophthalmos and mention its physiological protective mechanism.',
    answer: 'Definition: Incomplete closure of the palpebral fissure on voluntary or involuntary closure of the eyelids.\n\nProtective Mechanism: Bell\'s phenomenon (involuntary rolling up of the eye during sleep to protect the cornea).',
    isClinical: false,
    topic: 'Lagophthalmos'
  },
  {
    id: 'eyelid_lago_q2',
    chapterId: 1,
    type: 'short-answer',
    title: 'Etiology of Lagophthalmos',
    content: 'Enumerate three local pathological causes of Lagophthalmos.',
    answer: '1. Severe ectropion or structural loss (coloboma).\n2. Lower motor neuron facial palsy (7th nerve palsy).\n3. Spastic lid retraction (Thyroid ophthalmopathy / Graves\' disease).\n4. Postoperative overcorrection of ptosis.',
    isClinical: true,
    topic: 'Lagophthalmos'
  },
  {
    id: 'eyelid_lago_q3',
    chapterId: 1,
    type: 'short-answer',
    title: 'Complications & Treatment of Lagophthalmos',
    content: 'Mention the most dangerous corneal complication of Lagophthalmos and how to treat it.',
    answer: 'Complication: Exposure keratitis/ulceration, which can lead to perforation and loss of the eye.\n\nTreatment:\n- Temporary: Lubricants, ointment at night, plaster strapping, or contact lenses.\n- Surgical: Lateral tarsorrhaphy or median tarsorrhaphy to reduce the palpebral fissure width.',
    isClinical: true,
    topic: 'Lagophthalmos'
  },

  // --- Topic 6: Assessment and Treatment of Ptosis ---
  {
    id: 'eyelid_ptosis_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Ptosis Definition and Acquired Causes',
    content: 'Define Ptosis and enumerate its four acquired myogenic/neurogenic causes.',
    answer: 'Definition: Drooping of the upper eyelid where it covers more than the normal upper 1/6th of the cornea.\n\nAcquired Causes:\n1. Neurogenic: 3rd nerve palsy or Sympathetic supply paralysis (Horner syndrome).\n2. Myogenic: Myasthenia gravis, trauma, or muscle dystrophy.\n3. Aponeurotic (Senile): Degenerative changes/dehiscence of the levator aponeurosis.\n4. Mechanical: Increased lid weight due to tumors, spring catarrh, or multiple chalazia.',
    isClinical: false,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q2',
    chapterId: 1,
    type: 'short-answer',
    title: 'Ptosis: Myasthenia Gravis vs. Horner\'s Syndrome',
    content: 'Contrast the clinical features of Ptosis in Myasthenia Gravis versus Horner\'s Syndrome.',
    answer: '- Myasthenia Gravis: Myogenic ptosis, periodic in nature (worst in the evening when tired, disappears in the morning), relieved rapidly by anticholinesterase drugs (prostigmine).\n- Horner\'s Syndrome: Neurogenic mild ptosis due to sympathetic paralysis, associated with miosis, anhidrosis, and enophthalmos.',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q3',
    chapterId: 1,
    type: 'short-answer',
    title: 'Compensatory Signs of Ptosis',
    content: 'List the compensatory clinical signs observed in a patient with severe bilateral Ptosis.',
    answer: '1. Contraction of the frontalis muscle leading to wrinkling of the forehead and arching of the eyebrows.\n2. Head thrown backward (chin elevation posture).',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q4',
    chapterId: 1,
    type: 'short-answer',
    title: 'Levator Muscle Function Assessment',
    content: 'Describe how to clinically determine the Levator muscle function power and list its grading values.',
    answer: 'Technique: Fix the patient\'s eyebrow with the thumb (to block frontalis muscle action), ask the patient to look down, then look all the way up, and measure the lid margin excursion with a ruler.\n\nGrading:\n- Normal: 15 mm or more.\n- Good: 11-14 mm.\n- Fair: 5-11 mm.\n- Poor: 4 mm or less.',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q5',
    chapterId: 1,
    type: 'short-answer',
    title: 'Congenital Ptosis Surgery Rules',
    content: 'State the rules for choosing the type of operation in Congenital Ptosis based on clinical parameters.',
    answer: 'Choice depends on Ptosis amount and Levator action:\n1. If levator muscle has fair or good action: Levator Resection and advancement.\n2. If levator function is poor (4mm or less) with severe ptosis: Frontalis suspension (sling) operation.',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q6',
    chapterId: 1,
    type: 'short-answer',
    title: 'Ptosis presentation: 3rd Nerve Palsy vs. Horner\'s Syndrome',
    content: 'Contrast the clinical presentations of Ptosis caused by a 3rd Nerve Palsy versus Horner\'s Syndrome.',
    answer: '- 3rd Nerve Palsy: Severe neurogenic ptosis (paralysis of LPS), associated with an out-and-down eye position (divergent squint), mid-dilated fixed pupil, and cycloplegia.\n- Horner\'s Syndrome: Mild neurogenic ptosis (paralysis of Muller\'s muscle), associated with miosis, anhidrosis, enophthalmos, and heterochromia iridis (if congenital).',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q7',
    chapterId: 1,
    type: 'short-answer',
    title: 'Congenital Ptosis Surgical Timing',
    content: 'State the timing of surgical interference for a child with Congenital Ptosis.',
    answer: '- Mild to Moderate Ptosis: Postponed until school age (5-6 years old) to accurately monitor and test visual acuity.\n- Severe Ptosis ( pupil completely covered): Operated as early as possible (ASAP) to avoid the development of sensory deprivation amblyopia.',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q8',
    chapterId: 1,
    type: 'short-answer',
    title: 'MRD (Margin to Reflex Distance)',
    content: 'Define "MRD" (Margin to Reflex Distance) in ptosis evaluation and state why it is more accurate than measuring palpebral fissure width.',
    answer: 'Definition: It is the measurement from the center of the upper eyelid margin to the corneal light reflex in the primary position.\n- Why more accurate: It directly determines the position of the upper lid relative to the visual axis (pupil) and is completely independent of lower lid positional anomalies or laxity.',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q9',
    chapterId: 1,
    type: 'short-answer',
    title: 'Ptosis Severity Clinical Grading',
    content: 'Enumerate three clinical grading categories of Ptosis severity based on the amount of drooping.',
    answer: '1. Mild Ptosis: Drooping of 1-2 mm from the normal position.\n2. Moderate Ptosis: Drooping of 3 mm.\n3. Severe Ptosis: Drooping of more than 4 mm (completely obscuring the pupil).',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q10',
    chapterId: 1,
    type: 'short-answer',
    title: 'Pseudoptosis Definition & Mimics',
    content: 'Define Pseudoptosis and enumerate three different ocular conditions that clinically mimic true ptosis.',
    answer: 'Definition: An apparent drooping of the upper eyelid in the presence of a completely normal and functioning levator muscle mechanism.\n- Causes:\n  1. Ipsilateral hypotropia (vertical squint where the eye is turned down, and the lid follows it).\n  2. Contralateral lid retraction (making the normal side look drooped).\n  3. Contralateral enophthalmos or anophthalmos (loss of posterior mechanical support for the lid).',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q11',
    chapterId: 1,
    type: 'short-answer',
    title: 'Severe Congenital Ptosis Case Study',
    content: 'A 4-year-old boy presented with left-sided ptosis since birth. On examination, best corrected visual acuity was 6/6 in the right eye and 6/18 in the left eye. You noted MRD1 to be 5 mm in the right eye and -1 mm in the left eye. You also noted the levator function to be 15 mm in the right eyelid and 3 mm in the left eyelid. There is no lagophthalmos.\n\n1. What is the exact diagnosis?\n2. What is your surgical recommendation for this case?',
    answer: '1. Exact Diagnosis: Severe Congenital Left Ptosis with poor levator function and secondary amblyopia.\n2. Surgical Recommendation: Frontalis Suspension (Sling) operation, performed as early as possible to prevent further amblyopia development.',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },
  {
    id: 'eyelid_ptosis_q12',
    chapterId: 1,
    type: 'short-answer',
    title: 'Post-Cataract Aponeurotic Ptosis',
    content: 'A 62-year-old female presents with right-sided ptosis after cataract surgery.\n\n1. What is the most likely etiology/type of ptosis?\n2. What do you expect the levator function to be in this patient?\n3. What other clinical finding would support your diagnosis?',
    answer: '1. Most likely etiology: Aponeurotic Ptosis (due to dehiscence/stretching of the levator aponeurosis caused by surgical trauma or the speculum).\n2. Expected levator function: Normal or Good (11-15 mm).\n3. Supporting finding: An abnormally high or indistinct upper eyelid crease.',
    isClinical: true,
    topic: 'Assessment and Treatment of Ptosis'
  },

  // --- Topic 7: Tumors of the Eyelid ---
  {
    id: 'eyelid_tumors_q1',
    chapterId: 1,
    type: 'short-answer',
    title: 'Basal Cell Carcinoma (BCC) of Eyelid',
    content: 'Describe the classic clinical picture of Basal Cell Carcinoma (BCC) of the eyelid and mention its commonest site and lymphatic spread.',
    answer: '- Clinical Picture: Appears as a slowly growing nodule with an ulcerated center, rolled-out pearly (undermined) edges, and a necrotic floor (Rodent ulcer).\n- Commonest Site: The lower eyelid margin (frequently in farmers due to chronic ultraviolet rays exposure).\n- Lymphatic Spread: No lymphatic enlargement (BCC does not spread via lymphatics, only local invasion).',
    isClinical: true,
    topic: 'Tumors of the Eyelid'
  },

  // ===========================================================================
  // --- CHAPTER 2: LACRIMAL SYSTEM (21 Questions) ---
  // ===========================================================================

  // --- Topic 1: Tear Film & Dry Eye Syndrome (Q1 - Q6) ---
  {
    id: 'lacrimal_tear_q1',
    chapterId: 2,
    type: 'short-answer',
    title: 'Tear Film Layers & Secretors',
    content: 'Enumerate the three layers of the precorneal tear film from outwards to inwards and mention the secretor of each layer.',
    answer: '1. Outer lipid layer: Secreted by the Meibomian glands and accessory Zeis glands.\n2. Middle aqueous layer: Secreted by the main lacrimal gland and accessory lacrimal glands (Krause & Wolfring).\n3. Inner mucin layer: Secreted by the conjunctival goblet cells.',
    isClinical: false,
    topic: 'Tear Film & Dry Eye Syndrome'
  },
  {
    id: 'lacrimal_tear_q2',
    chapterId: 2,
    type: 'short-answer',
    title: 'Tear Film Layer Functions',
    content: 'State the main clinical functions of the outer lipid layer and the inner mucin layer of the tear film.',
    answer: '- Outer lipid layer: Prevents rapid tear evaporation, prevents tear overflow onto the cheek, and lubricates eyelid movement.\n- Inner mucin layer: Converts the hydrophobic corneal epithelium into a hydrophilic surface, allowing the aqueous layer to spread evenly.',
    isClinical: false,
    topic: 'Tear Film & Dry Eye Syndrome'
  },
  {
    id: 'lacrimal_tear_q3',
    chapterId: 2,
    type: 'short-answer',
    title: 'Dry Eye Syndrome Definition & Causes',
    content: 'Define Dry Eye Syndrome and list four different etiological categories or causes.',
    answer: 'Definition: Partial or absolute deficiency in aqueous tear production or tear film stability.\n- Causes:\n  1. Autoimmune: Keratoconjunctivitis sicca (Sjogren\'s syndrome leading to lacrimal gland fibrosis).\n  2. Mucin deficiency: Conjunctival scarring (e.g., Trachoma, chemical burns, Vitamin A deficiency destroying goblet cells).\n  3. Paralytic/Exposure: Improper lid closure (e.g., lagophthalmos, facial palsy).\n  4. Iatrogenic: Systemic drugs like belladonna or anti-anxiety medications.',
    isClinical: true,
    topic: 'Tear Film & Dry Eye Syndrome'
  },
  {
    id: 'lacrimal_tear_q4',
    chapterId: 2,
    type: 'short-answer',
    title: 'Dry Eye Symptoms and Signs',
    content: 'Describe the clinical picture (symptoms and signs) of Dry Eye syndrome.',
    answer: '- Symptoms: Eye irritation, burning sensation, and foreign body (FB) sensation, worst upon waking up.\n- Signs: Deficient precorneal tear film (scanty lower marginal tear strip), punctate epithelial erosions, filamentary keratitis, conjunctival wrinkling, and Bitôt spots.',
    isClinical: true,
    topic: 'Tear Film & Dry Eye Syndrome'
  },
  {
    id: 'lacrimal_tear_q5',
    chapterId: 2,
    type: 'short-answer',
    title: 'Dry Eye Diagnostic Tests',
    content: 'List three diagnostic tests used to confirm a diagnosis of Dry Eye and state what each test measures.',
    answer: '1. Schirmer\'s test: Measures aqueous tear production using filter paper (normal is >15mm in 5 mins).\n2. Tear film break-up time (BUT): Evaluates tear film stability using fluorescein (normal is >10 seconds).\n3. Rose Bengal staining: Stains dead, devitalized epithelial cells and mucus filaments.',
    isClinical: true,
    topic: 'Tear Film & Dry Eye Syndrome'
  },
  {
    id: 'lacrimal_tear_q6',
    chapterId: 2,
    type: 'short-answer',
    title: 'Severe Dry Eye Treatment Protocol',
    content: 'Outline the therapeutic management lines for a patient with severe Dry Eye.',
    answer: '1. Tear substitutes: Artificial tear eye drops during the day and lubricating gels at bedtime.\n2. Preservation of tears: Occlusion of the lacrimal puncta to reduce tear drainage.\n3. Mucolytics (e.g., Acetylcysteine 10%): To decrease excess mucus production and filaments.\n4. Therapeutic bandage soft contact lenses.\n5. Protective glasses to reduce air evaporation.',
    isClinical: true,
    topic: 'Tear Film & Dry Eye Syndrome'
  },

  // --- Topic 2: Clinical Approach & Workup of Watering (Epiphora) (Q7 - Q12) ---
  {
    id: 'lacrimal_water_q1',
    chapterId: 2,
    type: 'short-answer',
    title: 'Lacrimation vs. Epiphora',
    content: 'Differentiate between Lacrimation and Epiphora based on clinical definition and general presentation.',
    answer: '- Lacrimation: Hyper-secretion of tears due to psychic factors or reflexes while the drainage system is normal; usually presents as bilateral watering.\n- Epiphora: Overflow of tears due to mechanical obstruction or pump failure in the drainage system while tear secretion is normal; usually presents as unilateral watering.',
    isClinical: true,
    topic: 'Clinical Approach & Workup of Watering (Epiphora)'
  },
  {
    id: 'lacrimal_water_q2',
    chapterId: 2,
    type: 'short-answer',
    title: 'Lacrimal Pump Failure Causes',
    content: 'Enumerate three clinical causes of lacrimal pump failure that lead to Epiphora.',
    answer: '1. Ectropion (eversion of the lower lacrimal punctum away from the globe).\n2. Paralysis of the orbicularis oculi muscle (Horner\'s muscle) in facial nerve (Bell\'s) palsy.\n3. Destruction of the sharp posterior border of the eyelid margin (disrupting apposition against the globe).',
    isClinical: true,
    topic: 'Clinical Approach & Workup of Watering (Epiphora)'
  },
  {
    id: 'lacrimal_water_q3',
    chapterId: 2,
    type: 'short-answer',
    title: 'Mechanical Obstruction Causes in Lacrimal Passages',
    content: 'List three specific causes of mechanical obstruction in the canaliculi/puncta versus the nasolacrimal duct (NLD).',
    answer: '- Canaliculi/Puncta obstruction: Congenital absence, post-trachomatous scarring, or trauma/herpes stenosis.\n- NLD obstruction: Imperforated Hasner\'s valve, vein congestion (causes 50% of adult epiphora), or localized fractures/tumors.',
    isClinical: true,
    topic: 'Clinical Approach & Workup of Watering (Epiphora)'
  },
  {
    id: 'lacrimal_water_q4',
    chapterId: 2,
    type: 'short-answer',
    title: 'Regurgitation Test Method & Interpretation',
    content: 'Describe how to perform the Regurgitation test and interpret its clinical results.',
    answer: '- Method: Apply firm digital pressure over the lacrimal sac region against the lacrimal bone.\n- Interpretation:\n  * Positive regurge: Reflux of mucoid fluid or pus from the puncta, which is a definitive proof of nasolacrimal duct (NLD) obstruction.\n  * Negative regurge: No reflux, indicating either completely patent passages or an obstruction located proximal to the lacrimal sac (canalicular stenosis).',
    isClinical: true,
    topic: 'Clinical Approach & Workup of Watering (Epiphora)'
  },
  {
    id: 'lacrimal_water_q5',
    chapterId: 2,
    type: 'short-answer',
    title: 'Unilateral Epiphora Investigations',
    content: 'List the clinical and imaging investigations ordered for a patient presenting with unilateral Epiphora.',
    answer: '1. Regurgitation test.\n2. Dacryocystography (DCG) using contrast material to visualize anatomical details.\n3. Computed tomography (CT) scan of the orbit and paranasal sinuses.\n4. E.N.T. examination (to check the status of the nasal mucosa, turbinates, or presence of polypi).',
    isClinical: true,
    topic: 'Clinical Approach & Workup of Watering (Epiphora)'
  },
  {
    id: 'lacrimal_water_q6',
    chapterId: 2,
    type: 'short-answer',
    title: 'Punctal and Canalicular Stenosis Treatment',
    content: 'Mention the surgical lines of treatment for managing punctal and canalicular stenosis.',
    answer: '1. Dilatation and probing.\n2. One-snip ampullotomy (vertical snip in the posterior wall of the canaliculus).\n3. Two-snip operation (removing a triangle from the posterior wall).\n4. Laser punctoplasty.\n5. Conjunctivo-dacryocystorhinostomy (connecting conjunctiva to the nose by a glass tube for complete canalicular obstruction).',
    isClinical: false,
    topic: 'Clinical Approach & Workup of Watering (Epiphora)'
  },

  // --- Topic 3: Acute & Chronic Dacryocystitis (Q13 - Q21) ---
  {
    id: 'lacrimal_dacryo_q1',
    chapterId: 2,
    type: 'short-answer',
    title: 'Acute Dacryocystitis Etiology',
    content: 'Define Acute Dacryocystitis and mention its predisposing factor and commonest causative organisms.',
    answer: 'Definition: Acute suppurative inflammation of the lacrimal sac.\n- Predisposing factor: Pre-existing nasolacrimal duct (NLD) obstruction or improper probing.\n- Causative organisms: Pneumococci, Staphylococci, and Streptococci.',
    isClinical: false,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q2',
    chapterId: 2,
    type: 'short-answer',
    title: 'Acute Dacryocystitis Symptoms & Signs',
    content: 'Describe the clinical picture (symptoms and signs) of Acute Dacryocystitis.',
    answer: '- Symptoms: Severe throbbing pain over the lacrimal sac area, epiphora, fever, and headache.\n- Signs: Tender, red, hot, swollen mass over the lacrimal sac region (below the medial palpebral ligament) with abscess formation and fluctuation.',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q3',
    chapterId: 2,
    type: 'short-answer',
    title: 'Acute Dacryocystitis Complications',
    content: 'Enumerate three major complications of untreated Acute Dacryocystitis.',
    answer: '1. Lacrimal fistula (the sac abscess breaks through the skin anteriorly).\n2. Pyocele formation and progression to chronic dacryocystitis.\n3. Orbital cellulitis and life-threatening cavernous sinus thrombosis.',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q4',
    chapterId: 2,
    type: 'short-answer',
    title: 'Acute Dacryocystitis Treatment Protocol',
    content: 'Outline the treatment protocol for Acute Dacryocystitis during the acute phase and after abscess formation.',
    answer: '- Acute Phase: Systemic and local broad-spectrum antibiotics, hot fomentation, systemic analgesics, and nasal decongestant drops.\n- After Abscess Formation: Incision and drainage of the abscess.',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q5',
    chapterId: 2,
    type: 'short-answer',
    title: 'Chronic Dacryocystitis Definition & Diagnosis',
    content: 'Define Chronic Dacryocystitis and list its predisposing factor, commonest organism, and characteristic clinical sign.',
    answer: 'Definition: Chronic inflammation of the lacrimal sac.\n- Predisposing factor: Secondary to permanent obstruction of the nasolacrimal duct (NLD).\n- Causative organism: Pneumococcus in 80% of cases.\n- Diagnostic sign: Positive Regurgitation test (+ve regurge of mucus or pus on pressure).',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q6',
    chapterId: 2,
    type: 'short-answer',
    title: 'Chronic Dacryocystitis as Septic Focus & Complications',
    content: 'State why Chronic Dacryocystitis is considered a dangerous "septic focus" in ophthalmic practice and list its structural complications.',
    answer: 'Why dangerous: It acts as a continuous reservoir of infection; any minute corneal abrasion can quickly turn into a hypopyon corneal ulcer, and it is a strict contraindication for performing any elective intraocular surgery.\n\nComplications: Recurrent conjunctivitis, lacrimal mucocele/pyocele, acute dacryocystitis, chronic eyelid eczema, and secondary ectropion.',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q7',
    chapterId: 2,
    type: 'short-answer',
    title: 'Congenital NLD Obstruction Management',
    content: 'Outline the stepwise management protocol for Congenital Dacryocystitis (CNLDO) based on age.',
    answer: '1. First 9-12 months of age: Conservative medical treatment (topical antibiotics + digital hydrostatic massage performed by the mother in a downward direction on the sac to open Hasner\'s valve).\n2. After 1 year of age (if medical treatment fails): Lacrimal system dilatation and probing.\n3. If second probing fails: Silastic intubation of the lacrimal passages.\n4. If intubation fails: Dacryocystorhinostomy (DCR).',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q8',
    chapterId: 2,
    type: 'short-answer',
    title: 'Dacryocystorhinostomy (DCR) Principle',
    content: 'State the definitive treatment of acquired NLD obstruction in adults, explaining its underlying principal.',
    answer: 'Treatment: Dacryocystorhinostomy (DCR).\n\nPrincipal: The lacrimal sac mucosa is connected directly to the nasal mucosa of the middle meatus after surgical removal of the intervening bone of the lacrimal fossa, creating a permanent fistula to drain tears into the nose.',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },
  {
    id: 'lacrimal_dacryo_q9',
    chapterId: 2,
    type: 'short-answer',
    title: 'Dacryocystectomy (DCT) Indications',
    content: 'Enumerate four explicit clinical indications for performing a Dacryocystectomy (DCT) instead of a DCR.',
    answer: 'DCT (complete excision of the lacrimal sac) is indicated in:\n1. Malignant neoplasm / tumors of the lacrimal sac.\n2. Tuberculosis (T.B.) of the lacrimal sac.\n3. Severe structural atrophy or extensive fibrosis of the sac.\n4. Elderly patients associated with an active hypopyon corneal ulcer requiring urgent sac eradication.',
    isClinical: true,
    topic: 'Acute & Chronic Dacryocystitis'
  },

  // ===========================================================================
  // --- CHAPTER 3: CONJUNCTIVA ---
  // ===========================================================================

  // --- Topic 1: Anatomy & Histology of the Conjunctiva ---
  {
    id: 'conjunctiva_anatomy_q1',
    chapterId: 3,
    type: 'short-answer',
    title: 'Histology of the Conjunctiva',
    content: 'What is the histology of the conjunctiva? Describe its two major cellular layers in detail.',
    answer: 'The conjunctiva is a thin, translucent mucous membrane consisting of two histological layers:\n\n1. Epithelium:\n   - Composed of non-keratinized stratified squamous epithelium (which transitions to stratified columnar epithelium in the palpebral and fornical zones).\n   - Contains goblet cells, which are unicellular mucous glands that secrete mucus. This mucus forms the inner mucin layer of the tear film, rendering the hydrophobic corneal epithelial surface hydrophilic.\n\n2. Substantia Propria (Stroma):\n   - Superficial adenoid layer: Composed of loose connective tissue rich in leukocytes and lymphatic channels. It does not develop until 3-4 months after birth (which explains the absence of follicular tissue in newborn conjunctival responses).\n   - Deep fibrous layer: Composed of dense, tough fibro-elastic connective tissue that attaches to the underlying tarsal plates in the palpebral part, and contains major blood vessels and nerves.',
    isClinical: false,
    topic: 'Anatomy & Histology of the Conjunctiva'
  },
  {
    id: 'conjunctiva_anatomy_q2',
    chapterId: 3,
    type: 'short-answer',
    title: 'Vascular, Lymphatic & Nerve Supply of the Conjunctiva',
    content: 'Describe the arterial supply, venous drainage, lymphatic drainage, and nerve supply of the conjunctiva.',
    answer: '1. Arterial Supply:\n   - Anterior conjunctival arteries: Branches of the anterior ciliary arteries (which supply the bulbar part near the limbus).\n   - Posterior conjunctival arteries: Branches of the palpebral arches of the eyelids (which supply the palpebral and fornical parts).\n   - These two arterial networks anastomose freely to form a highly vascular, rich plexus.\n\n2. Venous Drainage:\n   - Drains backward into the palpebral veins (from the palpebral conjunctiva) and the ophthalmic veins (from the bulbar conjunctiva).\n\n3. Lymphatic Drainage:\n   - Lateral half of the conjunctiva: Drains into the preauricular and parotid lymph nodes.\n   - Medial half of the conjunctiva: Drains into the submandibular lymph nodes.\n   - Both pathways eventually empty into the upper deep cervical lymph nodes.\n\n4. Nerve Supply:\n   - Formed by branches of the ophthalmic and maxillary divisions of the Trigeminal Nerve (V):\n     * Upper conjunctiva: Supplied by the supraorbital, supratrochlear, and infratrochlear nerves (branches of V1).\n     * Lower conjunctiva: Supplied by the infraorbital and lacrimal nerves (V2 and V1).\n     * Limbal conjunctiva (around the cornea): Supplied by the short and long ciliary nerves.',
    isClinical: false,
    topic: 'Anatomy & Histology of the Conjunctiva'
  },
  {
    id: 'conjunctiva_anatomy_q3',
    chapterId: 3,
    type: 'short-answer',
    title: 'Anatomical Parts of the Conjunctiva',
    content: 'What are the main geographical parts of the conjunctiva? Describe their anatomical relations.',
    answer: 'The conjunctiva is anatomically divided into three continuous segments:\n\n1. Palpebral Conjunctiva:\n   - Lines the internal posterior surface of the eyelids.\n   - It is thin, pink, highly vascular, and extremely adherent to the underlying tarsal plates (which prevents it from wrinkling or shifting during blinking).\n\n2. Conjunctival Fornix (Fornical Conjunctiva):\n   - The transitional loose redundant fold that connects the palpebral and bulbar conjunctiva.\n   - Composed of the superior, inferior, lateral, and medial fornices. It is highly elastic and loosely attached to underlying tissue, allowing completely free movement of the eyeball.\n\n3. Bulbar Conjunctiva:\n   - Overlies the anterior aspect of the sclera up to the corneal limbus.\n   - It is extremely thin and completely transparent, allowing the white sclera to show through. It is loosely attached to the underling Tenon\'s capsule (allowing it to shift easily), but becomes firmly adherent and fused with the cornea at the limbus.',
    isClinical: false,
    topic: 'Anatomy & Histology of the Conjunctiva'
  },
  {
    id: 'conjunctiva_anatomy_q4',
    chapterId: 3,
    type: 'short-answer',
    title: 'Conjunctivitis Definition & Clinical Features',
    content: 'Define conjunctivitis and describe its general clinical features/signs.',
    answer: '1. Definition:\n   Conjunctivitis is the inflammation of the conjunctiva, presenting as a highly common causative etiology of "acute red eye".\n\n2. General Clinical Signs:\n   - Conjunctival hyperemia (redness): Marked superficial congestion of blood vessels that is clinically most severe and pronounced at the fornices and fades towards the limbus.\n   - Chemosis: Edema of the loose bulbar subconjunctival tissue, causing it to look translucent, swollen, or jelly-like.\n   - Discharge: Exudates produced by inflamed tissue. Can be watery/serous (viral/allergic), mucoid (allergic/vernal), mucopurulent (acute bacterial), or purulent (hyperacute gonococcal).',
    isClinical: true,
    topic: 'Anatomy & Histology of the Conjunctiva'
  },

  // --- Topic 2: Acute Bacterial Conjunctivitis (Mucopurulent & Purulent) ---
  {
    id: 'conjunctiva_acute_q1',
    chapterId: 3,
    type: 'short-answer',
    title: 'Mucopurulent Conjunctivitis Definition & Causes',
    content: 'Define Mucopurulent Conjunctivitis (MPC) and list its predisposing factors and causative organisms.',
    answer: 'Definition: An acute infective conjunctivitis characterized by marked conjunctival hyperemia and mucopurulent discharge.\n\nPredisposing factors: Bad hygiene and contaminated environment (poor sanitation).\n\nCausative organisms: Koch-Weeks bacillus (80%) (Haemophilus aegyptius) which is common in Egypt during spring and autumn, and other organisms (20%) like Staph or Strept.',
    isClinical: false,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },
  {
    id: 'conjunctiva_acute_q2',
    chapterId: 3,
    type: 'short-answer',
    title: 'Mucopurulent Conjunctivitis Symptoms & Signs',
    content: 'Describe the clinical picture (symptoms and signs) of Mucopurulent Conjunctivitis.',
    answer: 'Symptoms: Eye discomfort, red eye, and discharge.\n\nSigns: Eyelid edema, conjunctival hyperemia (most marked at the fornices), chemosis (conjunctival edema), and mucopurulent discharge that glues the lashes together in the morning.',
    isClinical: true,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },
  {
    id: 'conjunctiva_acute_q3',
    chapterId: 3,
    type: 'short-answer',
    title: 'Mucopurulent Conjunctivitis Treatment & Contraindication',
    content: 'Outline the treatment lines for MPC and explain why eye bandage is strictly contraindicated.',
    answer: 'Treatment: Hot fomentations, antibiotic eye drops and ointment, and dark glasses.\n\nContraindication: Eye bandage is strictly contraindicated because it prevents the free exit of discharge, increases the temperature of the conjunctival sac, and helps bacterial multiplication and retention of toxins.',
    isClinical: true,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },
  {
    id: 'conjunctiva_acute_q4',
    chapterId: 3,
    type: 'short-answer',
    title: 'Purulent Conjunctivitis Definition & Organism',
    content: 'Define Purulent Conjunctivitis (PC) and mention its two clinical types and causative organisms.',
    answer: 'Definition: An acute suppurative inflammation of the conjunctiva characterized by hyperemia, copious purulent discharge, and a high tendency for corneal involvement.\n\nTypes:\n- Epidemic type (occurs in summer)\n- Genital type (autoinfection from genital gonorrhea or via maternal passages during labor)\n\nCausative organisms: Gonococcus (80% - gram-negative diplococci) and other bacteria (20%).',
    isClinical: false,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },
  {
    id: 'conjunctiva_acute_q5',
    chapterId: 3,
    type: 'short-answer',
    title: 'Purulent Conjunctivitis: Infiltration vs. Discharge Stage',
    content: 'Describe the clinical presentation of the Stage of Infiltration versus the Stage of Discharge in Purulent Conjunctivitis.',
    answer: 'Stage of Infiltration (lasts 2-3 days): Severe lid edema closing the palpebral fissure, marked conjunctival chemosis/hyperemia, subconjunctival hemorrhage, watery/mucoid discharge, mild fever, and tender preauricular lymph nodes.\n\nStage of Discharge (lasts 2-3 weeks): Decreased edema and systemic manifestations, but marked by a profuse, continuous flow of thick purulent discharge.',
    isClinical: true,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },
  {
    id: 'conjunctiva_acute_q6',
    chapterId: 3,
    type: 'short-answer',
    title: 'PC Corneal Ulcer Complications Pathogenesis',
    content: 'Explain why corneal ulcers are highly common and dangerous complications in Purulent Conjunctivitis.',
    answer: '1. Gonococci possess the unique ability to invade an intact corneal epithelium.\n2. Severe conjunctival chemosis mechanically presses on limbal capillaries, impairing corneal nutrition.\n3. Chemosis forms a physical gutter around the cornea, pooling organisms and destructive proteolytic enzymes.',
    isClinical: true,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },
  {
    id: 'conjunctiva_acute_q7',
    chapterId: 3,
    type: 'short-answer',
    title: 'PC Corneal Ulcers Clinical Types',
    content: 'List the clinical types of corneal ulcers that can complicate Purulent Conjunctivitis.',
    answer: '- Marginal corneal ulcer: The most common, which may coalesce to form a dangerous ring ulcer.\n- Central and paracentral corneal ulcers: Rarer, but carry a very high risk of early perforation.',
    isClinical: true,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },
  {
    id: 'conjunctiva_acute_q8',
    chapterId: 3,
    type: 'short-answer',
    title: 'Purulent Conjunctivitis Treatment Protocol',
    content: 'Outline the treatment protocol for Purulent Conjunctivitis.',
    answer: '- Systemic: Broad-spectrum systemic antibiotics.\n- Local: Frequent broad-spectrum antibiotic eye drops and ointment.\n- Adjuvant: Mydriatic-cycloplegic drops (Atropine) if the cornea becomes involved.',
    isClinical: true,
    topic: 'Acute Bacterial Conjunctivitis (Mucopurulent & Purulent)'
  },

  // --- Topic 2: Ophthalmia Neonatorum & Inclusion Conjunctivitis ---
  {
    id: 'conjunctiva_neonat_q1',
    chapterId: 3,
    type: 'short-answer',
    title: 'Ophthalmia Neonatorum Definition & Causes',
    content: 'Define Ophthalmia Neonatorum and mention its infectious and non-infectious causes.',
    answer: 'Definition: Any form of acute conjunctivitis occurring within the first month of life after delivery.\n\nNon-Infectious cause: Chemical conjunctivitis (irritation caused by silver nitrate drops or savlon).\n\nInfectious causes: Neisseria gonorrhoeae, Chlamydia trachomatis (Inclusion blenorrhoea), Staph, Strept, or Herpes simplex virus.',
    isClinical: false,
    topic: 'Ophthalmia Neonatorum & Inclusion Conjunctivitis'
  },
  {
    id: 'conjunctiva_neonat_q2',
    chapterId: 3,
    type: 'short-answer',
    title: 'Ophthalmia Neonatorum Differential Diagnosis',
    content: 'Contrast between Chemical, Gonococcal, and Chlamydial Ophthalmia Neonatorum regarding the time of onset and discharge characteristics.',
    answer: '- Chemical ON: Onset within hours of birth; self-limited serous discharge.\n- Gonococcal ON: Onset within 24-48 hours; hyperacute, copious, thick purulent discharge with severe lid swelling.\n- Chlamydial ON: Onset within 5-12 days; mild to moderate purulent discharge with redness marked in the palpebral conjunctiva.',
    isClinical: true,
    topic: 'Ophthalmia Neonatorum & Inclusion Conjunctivitis'
  },
  {
    id: 'conjunctiva_neonat_q3',
    chapterId: 3,
    type: 'short-answer',
    title: 'Early Neonatal Discharge Significance',
    content: 'State why any ocular discharge during the first week of life in a neonate must be treated with high suspicion.',
    answer: 'Because the lacrimal gland does not start secreting tears until at least two weeks after birth; therefore, any early watering or discharge indicates a pathological infection, not physiological tearing.',
    isClinical: true,
    topic: 'Ophthalmia Neonatorum & Inclusion Conjunctivitis'
  },
  {
    id: 'conjunctiva_neonat_q4',
    chapterId: 3,
    type: 'short-answer',
    title: 'Ophthalmia Neonatorum Prophylaxis & Cure',
    content: 'Outline the prophylactic and curative treatment lines for Ophthalmia Neonatorum.',
    answer: '- Prophylaxis: Treatment of maternal genital infections before labor, washing the baby\'s eyes from above downward immediately after birth, and Crede\'s method (prophylactic antibiotic eye drops).\n\n- Curative: Systemic antibiotics (Benzyl penicillin or Cefotaxime for Gonorrhea; systemic Erythromycin for Chlamydia) combined with topical antibiotic drops.',
    isClinical: true,
    topic: 'Ophthalmia Neonatorum & Inclusion Conjunctivitis'
  },
  {
    id: 'conjunctiva_neonat_q5',
    chapterId: 3,
    type: 'short-answer',
    title: 'Inclusion Conjunctivitis in Adults',
    content: 'Mention the causative organism, modes of transmission, and clinical signs of Inclusion Conjunctivitis in adults.',
    answer: 'Causative organism: Chlamydia oculogenitalis (Serotypes D, E, F).\n\nTransmission: Autoinfection from genitalia affected by chlamydial urethritis/cervicitis, sexual transmission, or via contaminated swimming pools.\n\nSigns: Large follicles located mainly in the lower palpebral conjunctiva, mucopurulent discharge, superficial keratitis (no pannus), and preauricular lymphadenopathy.',
    isClinical: true,
    topic: 'Ophthalmia Neonatorum & Inclusion Conjunctivitis'
  },

  // --- Topic 3: Viral Conjunctivitis ---
  {
    id: 'conjunctiva_viral_q1',
    chapterId: 3,
    type: 'short-answer',
    title: 'Adenoviral Conjunctivitis Types',
    content: 'Enumerate the two main types of Adenoviral Conjunctivitis and state their specific causative serotypes.',
    answer: '1. Epidemic Keratoconjunctivitis (EKC): Caused by Adenovirus types 8 and 19.\n2. Pharyngo-conjunctival Fever (PCF): Caused by Adenovirus types 3 and 7.',
    isClinical: false,
    topic: 'Viral Conjunctivitis'
  },
  {
    id: 'conjunctiva_viral_q2',
    chapterId: 3,
    type: 'short-answer',
    title: 'EKC vs. PCF Differentiating Signs',
    content: 'Describe the shared and differentiating clinical signs between EKC and PCF.',
    answer: '- Shared signs: Acute red eye, photophobia, lacrimation, lower palpebral conjunctival follicles, subconjunctival hemorrhages, and preauricular lymphadenopathy.\n\n- Differentiating signs: EKC is characterized by a distinctive keratitis progressing from punctate epithelial erosions to deep subepithelial and stromal infiltrates. PCF is characterized by systemic symptoms like high fever and acute pharyngitis.',
    isClinical: true,
    topic: 'Viral Conjunctivitis'
  },
  {
    id: 'conjunctiva_viral_q3',
    chapterId: 3,
    type: 'short-answer',
    title: 'Adenoviral Conjunctivitis Steroid Role',
    content: 'Outline the management lines for Adenoviral Conjunctivitis and state the role of topical steroids.',
    answer: 'Management: Mainly supportive (cold compresses, dark glasses, and artificial lubricants). Antivirals are not effective.\n\nRole of topical steroids: They do not shorten the course of the disease, but they are used to suppress severe corneal inflammation if visual acuity is diminished by subepithelial infiltrates.',
    isClinical: true,
    topic: 'Viral Conjunctivitis'
  },

  // --- Topic 4: Trachoma (Egyptian Ophthalmia) ---
  {
    id: 'conjunctiva_trachoma_q1',
    chapterId: 3,
    type: 'short-answer',
    title: 'Trachoma Cause & Transmission',
    content: 'Define Trachoma and mention its causative agent, surface serotypes, and primary vector of transmission.',
    answer: 'Definition: A chronic infective disease affecting the conjunctiva and cornea, characterized by follicles, papillae, and pannus, which heals by cicatrization.\n\nCausative agent: Chlamydia trachomatis (Endemic serotypes A, B, Ba, and C).\n\nVector: Flies play the main role in transmitting the infected discharge from eye to eye.',
    isClinical: false,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q2',
    chapterId: 3,
    type: 'short-answer',
    title: 'Trachoma Stage 1 Clinical Picture',
    content: 'Describe the clinical picture of Trachoma Stage 1 (T1: At Onset).',
    answer: 'Symptoms: Sandy/gritty foreign body sensation, heaviness of the lids, and mucus discharge sticking the lashes together.\n\nSigns: Immature, small, non-raised grayish follicles on the upper tarsal conjunctiva that are non-expressible, accompanied by early trachomatous pannus in the upper cornea.',
    isClinical: true,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q3',
    chapterId: 3,
    type: 'short-answer',
    title: 'Trachomatous Pannus definition & Types',
    content: 'Define Trachomatous Pannus and list its five clinical types.',
    answer: 'Definition: Cellular infiltration combined with superficial vascularization affecting the upper part of the cornea (warmer zone under the upper lid).\n\nClinical types:\n1. Thin pannus (Pannus tenuis).\n2. Vascular pannus (Pannus vasculosus).\n3. Fleshy pannus (Pannus carnosus).\n4. Annular pannus (Pannus annulosus).\n5. Cicatrized pannus (Pannus siccus / Nebula ex-pannus).',
    isClinical: true,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q4',
    chapterId: 3,
    type: 'short-answer',
    title: 'Herbert’s Rosettes & Pits',
    content: 'Define Herbert’s Rosettes and Herbert’s Pits.',
    answer: '- Herbert’s Rosettes: Solitary corneal follicles appearing as grayish, small elevated nodules at the leading edge of active pannus.\n\n- Herbert’s Pits: Small, depressed, clear pits left at the limbus after the cellular aggregations of Herbert\'s rosettes heal and regress.',
    isClinical: true,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q5',
    chapterId: 3,
    type: 'short-answer',
    title: 'Trachoma Stage 2 Subcategories',
    content: 'Enumerate the features of Trachoma Stage 2 (T2: Established/Florid Trachoma) and list its subcategories.',
    answer: 'Features: Characterized by well-developed, mature soft follicles and marked papillary hypertrophy on the upper tarsal conjunctiva.\n\nSubcategories:\n- T2a: Mature soft follicles.\n- T2b\': Marked uniform papillary hypertrophy.\n- T2b\'\': Mixed trachomatous and flat-topped spring catarrh papillae.\n- T2c: Trachoma complicated by acute gonococcal infection.\n- T2v: Stellwag\'s browny edema (plasma cell infiltration + hyaline degeneration).',
    isClinical: true,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q6',
    chapterId: 3,
    type: 'short-answer',
    title: 'Trachoma Stage 3 (Cicatrization Signs)',
    content: 'Describe the signs of cicatrization seen in Trachoma Stage 3 (T3).',
    answer: '1. Arlt\'s line: A horizontal white line of scar tissue involving the sulcus subtarsalis.\n2. Post-Trachomatous Degenerations (PTDs): Yellowish-white spots of trapped epithelial cells and mucus in conjunctival crypts.\n3. Post-Trachomatous Concretions (PTCs): Chalky white, raised, hard lesions formed by the calcification of PTDs that can scratch the cornea.',
    isClinical: true,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q7',
    chapterId: 3,
    type: 'short-answer',
    title: 'WHO Simplified Trachoma Classification',
    content: 'Outline the WHO simplified classification of Trachoma.',
    answer: '- TF (Trachomatous Follicles): Presence of 5 or more follicles on the upper tarsal conjunctiva.\n- TI (Trachomatous Intense): Pronounced inflammatory thickening that obscures 50% of the deep tarsal vessels.\n- TS (Trachomatous Scarring): Presence of easily visible scar tissue lines.\n- TT (Trachomatous Trichiasis): At least one in-turning eyelash rubbing on the globe.\n- CO (Corneal Opacity): Visually significant opacity obscuring part of the pupillary margin.',
    isClinical: false,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q8',
    chapterId: 3,
    type: 'short-answer',
    title: 'Chronic Trachoma Complications',
    content: 'Enumerate the eyelid, conjunctival, and corneal complications of chronic Trachoma.',
    answer: '- Eyelid: Trichiasis, cicatricial entropion (mainly upper lid), and mechanical ptosis (due to Muller\'s muscle infiltration and heavy lids).\n- Conjunctiva: Conjunctival xerosis (dryness due to goblet cell destruction) and posterior symblepharon (shallow fornix).\n- Cornea: Diffuse nebulae causing irregular astigmatism, dense leucoma, and corneal xerosis.\n- Lacrimal: Chronic dacryocystitis and chronic dacryoadenitis.',
    isClinical: true,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },
  {
    id: 'conjunctiva_trachoma_q9',
    chapterId: 3,
    type: 'short-answer',
    title: 'Active Trachoma Surgical Interventions',
    content: 'Mention the surgical management required for the specific clinical stages of Trachoma.',
    answer: '- Stage T2a (Large mature follicles): Expression of the follicles.\n- Stage T2b (Papillary hypertrophy): Scraping of the papillae using a sharp spoon.\n- Stages T3 & T4 (With PTDs and PTCs): Surgical picking of the hard concretions to protect the cornea from abrasions.',
    isClinical: true,
    topic: 'Trachoma (Egyptian Ophthalmia)'
  },

  // --- Topic 5: Allergic Conjunctivitis (Spring Catarrh & Phlyctenular) ---
  {
    id: 'conjunctiva_allergic_q1',
    chapterId: 3,
    type: 'short-answer',
    title: 'Spring Catarrh Demographics',
    content: 'Define Vernal Kerato-Conjunctivitis (Spring Catarrh) and mention its primary age group, sex predilection, and season of exacerbation.',
    answer: 'Definition: A chronic, bilateral, recurrent seasonal allergic conjunctivitis driven by an IgE-mediated hypersensitivity to exogenous allergens.\n\nAge/Sex: Affects children, with a strong predilection for boys.\n\nSeason: Exacerbates during the warm summer season (Spring is a misnomer).',
    isClinical: false,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },
  {
    id: 'conjunctiva_allergic_q2',
    chapterId: 3,
    type: 'short-answer',
    title: 'Spring Catarrh Presentation Types',
    content: 'Enumerate and describe the three clinical presentation types of Spring Catarrh.',
    answer: '1. Palpebral type (70%): Large, dark red/bluish-white, flat-topped multiple papillae arranged in a classic "cobblestone" pattern on the upper palpebral conjunctiva; the upper fornix is completely free.\n\n2. Bulbar / Limbal type (10%): Gelatinous masses at the limbus containing small white spots called "Trantas spots" (concretions of eosinophils and necrotic epithelial cells).\n\n3. Mixed type (20%): Shows a combination of both palpebral and limbal allergic signs.',
    isClinical: true,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },
  {
    id: 'conjunctiva_allergic_q3',
    chapterId: 3,
    type: 'short-answer',
    title: 'Spring Catarrh Corneal Manifestations',
    content: 'List the corneal manifestations that can complicate severe Spring Catarrh.',
    answer: '1. Keratitis superficialis vernalis of Tobgy (scattered white punctate epithelial erosions).\n2. Shield ulcer (epithelial macro-erosions in the upper cornea).\n3. Corneal opacity resembling arcus senilis.',
    isClinical: true,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },
  {
    id: 'conjunctiva_allergic_q4',
    chapterId: 3,
    type: 'short-answer',
    title: 'Spring Catarrh vs. Trachoma Papillae',
    content: 'Match the ten points of differential diagnosis between the Papillae of Spring Catarrh and the Papillae of Trachoma.',
    answer: '1. Etiology: Allergic in Spring Catarrh vs Chlamydial in Trachoma.\n2. Symptoms: Intense itching vs Heaviness of lids.\n3. Season: Exacerbates in summer vs Not seasonal.\n4. Sex: Predominantly males vs Equal incidence.\n5. Size: Large cobblestone vs Fine small papillae.\n6. Top: Flat-topped vs Rounded tops.\n7. Color: Bluish-white vs Red.\n8. Upper Fornix: Always free vs Heavily affected.\n9. Discharge: Ropy and rich in eosinophils vs Mucous with no eosinophils.\n10. Inclusion bodies: Completely absent vs Present in cytological smears.',
    isClinical: true,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },
  {
    id: 'conjunctiva_allergic_q5',
    chapterId: 3,
    type: 'short-answer',
    title: 'Spring Catarrh Medical Management',
    content: 'Outline the progressive medical lines of treatment for Spring Catarrh.',
    answer: '- Local Hygiene: Cold saline or 3% sodium bicarbonate eye washes to clear thick discharge.\n- First Line: Topical antihistamines, mast cell stabilizers, and decongestants.\n- Acute Attacks: Short-term topical steroid drops or non-steroidal anti-inflammatory drops (long-term steroid use must be avoided to prevent glaucoma and cataracts).\n- Resistant Cases: Topical immunosuppressants (Cyclosporine 2%) or intralesional triamcinolone steroid injection into the tarsal border.',
    isClinical: true,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },
  {
    id: 'conjunctiva_allergic_q6',
    chapterId: 3,
    type: 'short-answer',
    title: 'Phlyctenular Conjunctivitis Pathogenesis',
    content: 'Define Phlyctenular Kerato-Conjunctivitis and describe its underlying hypersensitivity mechanism.',
    answer: 'Definition: An acute allergic condition affecting the conjunctiva and cornea, presenting as a localized nodule called a phlycten.\n\nMechanism: It is a delayed hypersensitivity (Type IV) cell-mediated immune reaction to endogenous toxins, most commonly Tuberculo-protein (TB), intestinal parasites, or chronic staphylococcal blepharitis.',
    isClinical: false,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },
  {
    id: 'conjunctiva_allergic_q7',
    chapterId: 3,
    type: 'short-answer',
    title: 'Simple vs. Corneal Phlycten Picture',
    content: 'Describe the clinical presentation of a simple Conjunctival Phlycten versus a Corneal Phlycten.',
    answer: '- Conjunctival Phlycten: A small (1-3 mm), round, elevated grayish nodule surrounded by a localized zone of conjunctival injection, most commonly located at the limbus or bulbar conjunctiva.\n\n- Corneal Phlycten: Starts at the limbus and can ulcerate to form a marginal ulcer, a migratory fascicular ulcer, or a ring ulcer if multiple limbal phlyctens coalesce.',
    isClinical: true,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },
  {
    id: 'conjunctiva_allergic_q8',
    chapterId: 3,
    type: 'short-answer',
    title: 'Phlycten vs. Pinguecula Differential Diagnosis',
    content: 'Provide the eight-point differential diagnosis between a Phlycten and a Pinguecula.',
    answer: '1. Cause: Allergic immune reaction vs Degenerative change.\n2. Age: Mainly affects young children vs Occurs in old individuals.\n3. Shape: Rounded nodule vs Triangular nodule.\n4. Color: Grayish vs Yellow.\n5. Site: Can occur anywhere on bulbar conjunctiva/limbus vs Restricted to the nasal limbal side.\n6. Suppuration: Frequently occurs vs Never suppurates.\n7. Ulceration: Commonly occurs vs Never ulcerates.\n8. Vascularization: Positive local injection vs Completely negative vascular activity.',
    isClinical: true,
    topic: 'Allergic Conjunctivitis (Spring Catarrh & Phlyctenular)'
  },

  // --- Topic 6: Conjunctival Degenerations & Symblepharon (Pterygium & Pinguecula) ---
  {
    id: 'conjunctiva_degen_q1',
    chapterId: 3,
    type: 'short-answer',
    title: 'Pterygium Definition & Presentation',
    content: 'Define Pterygium and mention its main environmental predisposing factors, anatomical parts, and symptoms.',
    answer: 'Definition: A triangular encroachment of vascularized conjunctival tissue onto the corneal surface.\n\nPredisposing factors: Chronic irritation by wind, dust, fumes, and exposure to Ultraviolet (UV) rays.\n\nAnatomical parts: Apex (head) overlying the cornea, Neck overlying the limbus, and Body overlying the sclera.\n\nSymptoms: Discomfort, ocular disfigurement, diminished vision (if it crosses the pupillary area), or diplopia (in recurrent cases due to mechanical restriction of movement).',
    isClinical: true,
    topic: 'Conjunctival Degenerations & Symblepharon (Pterygium & Pinguecula)'
  },
  {
    id: 'conjunctiva_degen_q2',
    chapterId: 3,
    type: 'short-answer',
    title: 'Pterygium Surgical Excision Indications',
    content: 'Enumerate the clinical indications for surgical excision of a Pterygium.',
    answer: '1. Progressive pterygium crossing towards the visual axis.\n2. Interference with vision (encroachment onto the pupillary zone).\n3. Severe cosmetic disfigurement.\n4. Recurrent pterygium causing restriction of ocular motility and diplopia.',
    isClinical: true,
    topic: 'Conjunctival Degenerations & Symblepharon (Pterygium & Pinguecula)'
  },
  {
    id: 'conjunctiva_degen_q3',
    chapterId: 3,
    type: 'short-answer',
    title: 'Pterygium Excision & Recurrence Prevention',
    content: 'List the surgical techniques used to remove a Pterygium and state the measures used to prevent its high rate of recurrence.',
    answer: 'Techniques: Simple excision with conjunctival suturing, or Excision with bare sclera technique.\n\nPrevention of Recurrence:\n* Covering the bare sclera with a conjunctival autograft or an amniotic membrane graft.\n* Intraoperative topical application or postoperative eye drops of Mitomycin C.\n* Exposure to postoperative Beta irradiation (Strontium 90).',
    isClinical: true,
    topic: 'Conjunctival Degenerations & Symblepharon (Pterygium & Pinguecula)'
  },
  {
    id: 'conjunctiva_degen_q4',
    chapterId: 3,
    type: 'short-answer',
    title: 'Pinguecula Definition, Etiology & Management',
    content: 'Define Pinguecula and state its etiology, clinical features, and management.',
    answer: 'Definition: A benign yellow degenerative nodule occurring on the nasal side of the limbus.\n\nEtiology: Age-related tissue degeneration exacerbated by chronic exposure to ultraviolet (UV) rays.\n\nClinical features: Small, static, yellow triangular elevation on the nasal limbus; never ulcerates or grows onto the cornea.\n\nManagement: No treatment is required; simple surgical excision can be done if cosmetically disturbing.',
    isClinical: true,
    topic: 'Conjunctival Degenerations & Symblepharon (Pterygium & Pinguecula)'
  },
  {
    id: 'conjunctiva_degen_q5',
    chapterId: 3,
    type: 'short-answer',
    title: 'Symblepharon Definition & Causes',
    content: 'Define Symblepharon and list its main clinical causes.',
    answer: 'Definition: An abnormal adhesion of the palpebral conjunctiva to the bulbar conjunctiva or ocular surface.\n\nCauses: Any severe lesion that leaves two opposing raw, bared conjunctival areas, such as:\n1. Chemical or thermal burns of the conjunctival sac.\n2. Severe trachomatous scarring.\n3. Membranous conjunctivitis.\n4. Autoimmune diseases (Stevens-Johnson syndrome and ocular cicatricial pemphigoid).',
    isClinical: true,
    topic: 'Conjunctival Degenerations & Symblepharon (Pterygium & Pinguecula)'
  },
  {
    id: 'conjunctiva_degen_q6',
    chapterId: 3,
    type: 'short-answer',
    title: 'Symblepharon Complications & Management',
    content: 'List the clinical complications and management lines (prophylactic and curative) for Symblepharon.',
    answer: 'Complications: Diplopia (due to restricted eye movement), visual affection (if scarring covers the cornea), lid malpositions (entropion/ectropion), and exposure keratopathy.\n\nProphylactic Management: Frequent sweeping of the fornices with a glass rod coated with antibiotic ointment to break early adhesions, and topical cortisone ointment to suppress fibrosis.\n\nCurative Management: Surgical excision of the adhesions and resurfacing the raw area using a mucous membrane autograft or an amniotic membrane graft, combined with lamellar/penetrating keratoplasty if a dense corneal opacity is present.',
    isClinical: true,
    topic: 'Conjunctival Degenerations & Symblepharon (Pterygium & Pinguecula)'
  },

  // ===========================================================================
  // --- CHAPTER 4: CORNEA & SCLERA (31 Questions) ---
  // ===========================================================================

  // --- Topic 1: Hypopyon Ulcer (Acute Serpiginous Ulcer) (Q1 - Q10) ---
  {
    id: 'cornea_hypopyon_q1',
    chapterId: 4,
    type: 'short-answer',
    title: 'Hypopyon Ulcer Definition & Etiology',
    content: 'Define Hypopyon Ulcer and mention its commonest causative organism and predisposing factors.',
    answer: 'Definition: A primary infective corneal ulcer characterized by deeply progressive ulceration, severe toxic iridocyclitis, and early formation of sterile pus in the anterior chamber.\n\nCausative organism: Pneumococcus in 80% of cases.\n\nPredisposing factors:\n- General: Decreased immunity due to old age, malnutrition, or Diabetes Mellitus.\n- Local: Epithelial damage caused by trauma (finger nail scratch, foreign body, trichiasis, or PTDs) because Pneumococci cannot invade an intact corneal epithelium.',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q2',
    chapterId: 4,
    type: 'short-answer',
    title: 'Pneumococcal Hypopyon Ulcer Signs',
    content: 'Describe the typical hallmark signs of a Pneumococcal Hypopyon Ulcer on corneal examination.',
    answer: '1. Paracentral disc-shaped deeply progressive ulcer.\n2. An advancing, undermined crescentic edge that creeps towards the center of the cornea, preceded by intense cellular infiltration.\n3. A quiet, healing peripheral edge that is flat with less infiltration and shows vascularization.\n4. Presence of a sterile hypopyon (yellowish fluid settling down with a flat upper level in the anterior chamber).',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypoyon_q3',
    chapterId: 4,
    type: 'short-answer',
    title: 'Uncomplicated Corneal Ulcer Symptoms & Signs',
    content: 'List the symptoms and general signs of an uncomplicated corneal ulcer (The DD for Painful Drop of Vision).',
    answer: 'Symptoms: Stitching pain (due to exposed nerve endings), defective vision, photophobia (due to accompanying iritis), lacrimation, blepharospasm, and haloes around light (due to corneal edema).\n\nSigns: Eyelid edema, severe ciliary (circumcorneal) injection, lost corneal luster, grayish infiltration with sloughing of epithelium, and a positive fluorescein test (stains green under cobalt blue light).',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q4',
    chapterId: 4,
    type: 'short-answer',
    title: 'Corneal Ulcer Non-Perforated Complications',
    content: 'Enumerate five non-perforated complications of a deeply progressive corneal ulcer.',
    answer: '1. Secondary toxic iridocyclitis.\n2. Secondary glaucoma (due to trabecular meshwork blockage by hypopyon or peripheral anterior synechiae).\n3. Descemetocele (bulging of Descemet\'s membrane under normal IOP, appearing as a translucent bleb).\n4. Ectatic scar (Keratoectasia or Anterior Staphyloma if the healed area bulges).\n5. Corneal opacities (Nebula, Macula, or Leucoma) causing irregular astigmatism and visual loss.',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q5',
    chapterId: 4,
    type: 'short-answer',
    title: 'Corneal Perforation Sequelae',
    content: 'State the sequelae/complications that can occur immediately following corneal ulcer perforation.',
    answer: '1. Iris prolapse.\n2. Anterior synechia or Leucoma adherent.\n3. Lost anterior chamber with complicated cataract formation.\n4. Corneal fistula.\n5. Purulent Endophthalmitis or Panophthalmitis.',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q6',
    chapterId: 4,
    type: 'short-answer',
    title: 'Corneal Fistula Definition & Signs',
    content: 'Define Corneal Fistula and state its clinical diagnostic signs.',
    answer: 'Definition: A permanent opening in the cornea lined by epithelium that fails to heal due to chronic straining or high IOP.\n\nDiagnostic signs:\n- Lost anterior chamber (flat AC) and soft ocular tension (marked hypotony).\n- Positive River Green Sign (Seidel\'s test: a stream of clear aqueous washing away fluorescein under blue light).\n- Presence of papilledema and anterior polar cataract.',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q7',
    chapterId: 4,
    type: 'short-answer',
    title: 'Non-Perforated Corneal Scars Classification',
    content: 'Define and contrast the three types of non-perforated Corneal Scars based on density.',
    answer: '1. Nebula: A faint, thin corneal scar following the healing of superficial ulcers; opacity is less than 1/2 of corneal thickness, and iris details are clearly visible.\n2. Macula: A localized spot-like scar of intermediate density; opacity is 1/2 to 3/4 of corneal thickness, and iris details are visible but blurred.\n3. Leucoma: A dense white scar following the healing of deep ulcers; opacity is more than 3/4 of corneal thickness, and iris details cannot be made out through it.',
    isClinical: false,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q8',
    chapterId: 4,
    type: 'short-answer',
    title: 'Bacterial Corneal Ulcer Medical Treatment',
    content: 'Outline the standard medical treatment protocol for an uncomplicated bacterial corneal ulcer.',
    answer: '1. Topical Antibiotics: Either dual therapy (fortified drops to cover Gram +ve and Gram -ve) or fluoroquinolone monotherapy.\n2. Atropine Sulphate 1% (Drops/Ointment): Paralyses ciliary/sphincter muscles to relieve spasm pain, and dilates the pupil to prevent posterior synechiae.\n3. Bilateral Eye Bandage: Contraindicated in mucopurulent conjunctivitis, but highly indicated in clean ulcers to stop mechanical eyelid friction, stop pain, and help rapid epithelial healing.\n4. Hot Fomentations: Produces counter-irritant pain relief and improves circulation to wash toxins and bring immunoglobulins.',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q9',
    chapterId: 4,
    type: 'short-answer',
    title: 'Resistant Corneal Ulcer Alternative Therapies',
    content: 'List the alternative and surgical management options required for managing a resistant corneal ulcer.',
    answer: '1. Subconjunctival injection of antibiotics.\n2. Collagen shields (effective high-dose drug delivery contact lenses).\n3. Paracentesis (puncture and evacuation of the anterior chamber).\n4. Amniotic membrane graft or Bulbar conjunctival flap to cover the ulcer bed.\n5. Tarsorrhaphy (lateral or median).\n6. Therapeutic Keratoplasty (lamellar or penetrating corneal graft).',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q10',
    chapterId: 4,
    type: 'short-answer',
    title: 'Descemetocele, Secondary Glaucoma & Fistula Management',
    content: 'Mention the specific treatment lines for managing a Descemetocele, Secondary Glaucoma, and a Corneal Fistula.',
    answer: '- Descemetocele: Standard ulcer treatment + oral Diamox (Acetazolamide) to lower IOP and prevent perforation + strict bilateral bandage.\n- Secondary Glaucoma: Add anti-glaucoma eye drops, oral Diamox, and perform repeated paracentesis.\n- Corneal Fistula: Chauffage (indirect thermal cautery close to the fistula to destroy its epithelial lining); if it fails, plan for a therapeutic penetrating keratoplasty.',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },
  {
    id: 'cornea_hypopyon_q11',
    chapterId: 4,
    type: 'short-answer',
    title: 'Corneal Ulcer Perforation Complications & Signs',
    content: 'A 67-year-old male patient under medical treatment for a corneal ulcer suddenly felt a gush of water coming from his eye accompanied by a marked deterioration of vision.\n\n1. What complication has occurred?\n2. Enumerate the clinical signs expected to confirm this condition on examination.\n3. Enumerate the specific sequences/outcomes expected with this condition.',
    answer: '1. Complication: Corneal Ulcer Perforation.\n\n2. Clinical Signs on Examination:\n- Total loss or flattening of the anterior chamber (Shallow AC).\n- Marked ocular hypotony (very soft globe).\n- Positive Seidel Test (A fluorescein green river under cobalt blue light).\n- Iris Prolapse or anterior synechia.\n\n3. Expected Sequences/Outcomes:\n- Leucoma Adherent or anterior staphyloma.\n- Lost AC with complicated cataract.\n- Corneal Fistula.\n- Endophthalmitis.',
    isClinical: true,
    topic: 'Hypopyon Ulcer (Acute Serpiginous Ulcer)'
  },

  // --- Topic 2: Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus) (Q11 - Q16) ---
  {
    id: 'cornea_viral_q1',
    chapterId: 4,
    type: 'short-answer',
    title: 'Dendritic Ulcer Etiology & Recurrence',
    content: 'Define Dendritic Ulcer and mention its causative organism, source of recurrence, and activation factors.',
    answer: 'Definition: A primary infective corneal ulcer characterized by an irregular linear branching shape.\n\nCausative organism: Herpes Simplex Virus (HSV - an epitheliotropic virus).\n\nSource of recurrence: The virus becomes dormant in the trigeminal/Gasserian ganglion after primary infection and reactivates along the nerve branches.\n\nActivation factors (Herpes fibrillis): Induced by heat, fevers (common cold, influenza, pneumonia), or the use of local immunosuppressive steroid eye drops.',
    isClinical: false,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },
  {
    id: 'cornea_viral_q2',
    chapterId: 4,
    type: 'short-answer',
    title: 'Active Dendritic Ulcer Clinical Presentation',
    content: 'Describe the diagnostic clinical presentation (symptoms and signs) of an active Dendritic Ulcer.',
    answer: 'Symptoms: Mild stitching pain, photophobia, tearing, and blurred vision.\n\nSigns:\n- Lost corneal luster.\n- Paracentral linear dendritic shape with side branches ending in knobs and characteristic epitheliolysis at the edges.\n- Marked Corneal Hypoesthesia (decreased or absent corneal sensation).\n- Positive fluorescein stain matching the dendritic branches.',
    isClinical: true,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },
  {
    id: 'cornea_viral_q3',
    chapterId: 4,
    type: 'short-answer',
    title: 'Herpes Simplex Keratitis Complications',
    content: 'Enumerate the specific complications of a non-perforated Herpes Simplex Keratitis.',
    answer: '1. Herpetic iridocyclitis and secondary glaucoma.\n2. Disciform Keratitis (a delayed hypersensitivity immune reaction to the viral antigen in the stroma, presenting as a central grey discoid stromal opacity with Descemet\'s folds).\n3. Keratitis Meta-herpetica (recurrent structural ulceration due to complete corneal anesthesia, with no active virus present).\n4. Secondary bacterial infection leading to a large amoeboid ulcer with hypopyon.\n5. Permanent paracentral corneal nebulae.',
    isClinical: true,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },
  {
    id: 'cornea_viral_q4',
    chapterId: 4,
    type: 'short-answer',
    title: 'Dendritic Ulcer Medical Protocol & Contraindications',
    content: 'Outline the treatment protocol for a Dendritic Ulcer and state the absolute drug contraindication.',
    answer: 'Protocol: Atropine drops, prophylactic antibiotic drops to prevent secondary infection, eye bandage, and general vitamins (A and C).\n\nSpecific Treatment: Potent antiviral eye ointment (Acyclovir/Zovirax) applied 5 times daily (every 4 hours) for up to 4 days after complete epithelization.\n\nAbsolute Contraindication: Topical Corticosteroids are strictly contraindicated in active epithelial dendritic ulcers because they cause rapid viral multiplication, forming a huge geographical/amoeboid ulcer with a high risk of corneal perforation.',
    isClinical: true,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },
  {
    id: 'cornea_viral_q5',
    chapterId: 4,
    type: 'short-answer',
    title: 'Herpes Zoster Ophthalmicus & Hutchinson\'s Sign',
    content: 'Define Herpes Zoster Ophthalmicus (HZO) and describe its clinical picture and the diagnostic value of Hutchinson\'s sign.',
    answer: 'Definition: A primary infective neuro-dermatitis and keratitis due to VZV infection of the Gasserian ganglion tracking down the ophthalmic division of the trigeminal nerve.\n\nClinical Picture: High fever, malaise, severe neuralgic pain followed by grouped, painful unilateral skin vesicles distributed strictly along the frontal nerve pathway on an erythematous base.\n\nHutchinson\'s sign: Eruption of skin vesicles on the tip of the nose, indicating involvement of the Nasociliary nerve branch. This sign is of high diagnostic value because the nasociliary nerve also supplies the globe, predicting a 100% chance of severe ocular involvement (keratitis, scleritis, or iridocyclitis).',
    isClinical: true,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },
  {
    id: 'cornea_viral_q6',
    chapterId: 4,
    type: 'short-answer',
    title: 'Herpes Zoster Ophthalmicus Treatment Protocol',
    content: 'List the comprehensive systemic and local treatment protocol for HZO.',
    answer: 'Systemic: High-dose systemic antiviral tablets (Acyclovir/Zovirax) for 10 days, bed rest, sedation, and potent analgesics for neuralgic pain.\n\nSkin Lesions: Local steroid skin ointment or calamine lotion with antibiotic powder to prevent secondary bacterial infection.\n\nOcular Lesions (Keratitis/Iridocyclitis): Treated aggressively with a combination of local topical steroids and Atropine drops.',
    isClinical: true,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },
  {
    id: 'cornea_viral_q7',
    chapterId: 4,
    type: 'short-answer',
    title: 'Herpetic Dendritic Corneal Ulcer Case Study',
    content: 'Regarding a patient with a suspected active Herpetic Dendritic Corneal Ulcer:\n1. Name the causative organism.\n2. Name 3 complications of a non-perforated dendritic ulcer.\n3. Name the most potent specific antiviral agent used for its treatment.',
    answer: '1. Causative Organism: Herpes Simplex Virus Type 1 (HSV-1).\n\n2. Complications of Non-perforated Ulcer:\n- Herpetic Iridocyclitis with secondary glaucoma.\n- Disciform Keratitis (immune reaction in the stroma).\n- Keratitis Meta-herpetica (neurotrophic ulceration due to corneal anesthesia).\n\n3. Most potent antiviral agent: Topical Acyclovir (Zovirax) eye ointment 5 times daily.',
    isClinical: true,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },
  {
    id: 'cornea_viral_q8',
    chapterId: 4,
    type: 'short-answer',
    title: 'Herpes Zoster Ophthalmicus Case Study',
    content: 'Regarding the provided clinical photo of Herpes Zoster Ophthalmicus (HZO):\n1. Diagnose the condition.\n2. What is the name of the sign when vesicles appear on the tip of the nose?\n3. Name the nerve involved in the distribution of this disease.\n4. Enumerate lines of treatment for this condition.',
    answer: '1. Diagnosis: Herpes Zoster Ophthalmicus (HZO).\n\n2. Name of the sign: Hutchinson\'s Sign.\n\n3. Nerve involved: Ophthalmic division of the Trigeminal Nerve (CN V1) - specifically the Nasociliary nerve branch.\n\n4. Lines of Treatment:\n- Systemic: High-dose oral Acyclovir tablets (800 mg 5 times daily for 10 days).\n- Skin: Local antibiotic powder/calamine lotion to avoid secondary bacterial infection.\n- Ocular: Topical corticosteroids and Atropine eye drops for keratitis/iridocyclitis.\n- General: Rest, sedation, and potent analgesics for neuralgic pain.',
    isClinical: true,
    topic: 'Viral Ulcers (Dendritic Ulcer & Herpes Zoster Ophthalmicus)'
  },

  // --- Topic 3: Fungal Ulcer (Q17 - Q20) ---
  {
    id: 'cornea_fungal_q1',
    chapterId: 4,
    type: 'short-answer',
    title: 'Fungal Corneal Ulcer Types & Predisposing Factors',
    content: 'Enumerate the two main types of fungi causing corneal ulcers and mention their specific predisposing factors.',
    answer: '1. Yeast Fungi (Candida): Infects immunocompromised eyes (prolonged steroid abuse, dry eye, severe exposure keratitis, or chronic herpes keratitis).\n2. Filamentous Fungi (Fusarium, Aspergillus): Infects healthy normal corneas following mild trauma involving vegetable matter (e.g., a scratch by a tree branch or plant while gardening).',
    isClinical: true,
    topic: 'Fungal Ulcer'
  },
  {
    id: 'cornea_fungal_q2',
    chapterId: 4,
    type: 'short-answer',
    title: 'Filamentous Fungal Ulcer Slit-Lamp Signs',
    content: 'Describe the characteristic diagnostic signs of a Filamentous Fungal Ulcer on slit-lamp examination.',
    answer: '1. Grey or dirty-white dry-textured corneal surface with an elevated plaque-like appearance.\n2. Feathery extensions branching beneath the epithelium into the adjacent stroma.\n3. Multiple satellite lesions (micro-abscesses) in the surrounding tissues.\n4. Deep endothelial plaque and severe anterior chamber reaction with a dense hypopyon.',
    isClinical: true,
    topic: 'Fungal Ulcer'
  },
  {
    id: 'cornea_fungal_q3',
    chapterId: 4,
    type: 'short-answer',
    title: 'Fungal Keratitis Diagnostic Workflow',
    content: 'Outline the diagnostic workflow (scraping and culture) used to confirm Fungal Keratitis.',
    answer: 'Perform corneal scraping from the bed and margins of the ulcer followed by:\n- Direct Microscopy: Gram stain and Giemsa stain to visualize fungal hyphae.\n- Culture Media: Inoculation on Sabouraud’s dextrose agar, blood agar, or brain-heart infusion broth.\n- Deep Lesions: Superficial keratectomy biopsy if deep stromal fungal structures are suspected.',
    isClinical: true,
    topic: 'Fungal Ulcer'
  },
  {
    id: 'cornea_fungal_q4',
    chapterId: 4,
    type: 'short-answer',
    title: 'Resistant Fungal Ulcer Management',
    content: 'List the medical and surgical management lines for a resistant Fungal Ulcer.',
    answer: 'Medical: Intensive topical and systemic antifungal drugs, combined with cycloplegic (Atropine) drops.\n\nSurgical (for resistant cases): Mechanical epithelial debridement, superficial keratectomy to enhance drug penetration, a vascularized conjunctival flap, or an urgent penetrating keratoplasty.',
    isClinical: true,
    topic: 'Fungal Ulcer'
  },
  {
    id: 'cornea_fungal_q5',
    chapterId: 4,
    type: 'short-answer',
    title: 'Vegetable Matter Ocular Trauma case',
    content: 'A young man aged 30 years presented with difficulty in left eye vision for the past 10-15 days. He gave a history of left ocular trauma involving vegetable matter (a plant branch) 15 days back. On examination, there was an ulcerative lesion in the cornea whose base has a soft creamy infiltrate. The margins are feathery with a few satellite lesions.\n\n1. Name the causative organism category for this condition.\n2. Describe the methods used for laboratory detection of this organism.\n3. Enumerate the comprehensive lines of treatment.',
    answer: '1. Causative organism category: Filamentous Fungi (e.g., Fusarium or Aspergillus).\n\n2. Laboratory Detection Methods:\n- Corneal scraping followed by direct microscopy with Gram and Giemsa stain.\n- Inoculation and culture on Sabouraud\'s dextrose agar or blood agar.\n- Superficial corneal biopsy in deep lesions.\n\n3. Lines of Treatment:\n- Medical: Topical and systemic antifungal drugs (e.g., Natamycin, Voriconazole) + Cycloplegic eye drops (Atropine 1%).\n- Surgical: Mechanical epithelial debridement, conjunctival flap, or therapeutic penetrating keratoplasty if resistant.',
    isClinical: true,
    topic: 'Fungal Ulcer'
  },

  // --- Topic 4: Non-Infective Ulcers (Neurotrophic & Exposure) (Q21 - Q23) ---
  {
    id: 'cornea_noninfect_q1',
    chapterId: 4,
    type: 'short-answer',
    title: 'Neurotrophic Keratitis definition & Hallmarks',
    content: 'Define Neurotrophic Keratitis and describe its unique clinical hallmarks.',
    answer: 'Definition: A primary non-infective keratitis caused by the loss of sensory nerve supply to the cornea (paralysis of the ophthalmic division of the trigeminal nerve).\n\nClinical Hallmarks:\n- Absolute corneal anesthesia (absent corneal touch reflex) with ciliary injection.\n- Central disc-shaped ulcer with punched-out edges that has zero tendency to heal.\n- Complete absence of pain (characteristic sign), progressing rapidly to deep stromal melting and perforation.',
    isClinical: true,
    topic: 'Non-Infective Ulcers (Neurotrophic & Exposure)'
  },
  {
    id: 'cornea_noninfect_q2',
    chapterId: 4,
    type: 'short-answer',
    title: 'Neurotrophic Corneal Ulcer Healing Promotion',
    content: 'Outline the treatment lines used to promote healing in a Neurotrophic Corneal Ulcer.',
    answer: '1. Intensive artificial tear drops by day and heavy lubricating ointments at night.\n2. Complete permanent sealing of the lacrimal puncta to retain moisture.\n3. Therapeutic bandage soft contact lenses.\n4. Median or paramedian tarsorrhaphy to mechanically keep the lids closed and protect the center.',
    isClinical: true,
    topic: 'Non-Infective Ulcers (Neurotrophic & Exposure)'
  },
  {
    id: 'cornea_noninfect_q3',
    chapterId: 4,
    type: 'short-answer',
    title: 'Exposure Keratitis definition, Location & Management',
    content: 'Define Exposure Keratitis (Ulcer with Lagophthalmos), state its location, and outline its management.',
    answer: 'Definition: A primary non-infective keratitis due to incomplete lid closure, causing improper wetting and severe desiccation of the exposed corneal surface.\n\nTypical Location: Confined strictly to the lower third of the cornea with a sharp, straight upper border, accompanied by conjunctival xerosis.\n\nManagement: Treat the underlying cause of lagophthalmos (e.g., facial nerve recovery, thyroid management). Protect the cornea using heavy artificial lubricants, therapeutic soft contact lenses, narrow plaster strapping at night, or surgical tarsorrhaphy.',
    isClinical: true,
    topic: 'Non-Infective Ulcers (Neurotrophic & Exposure)'
  },
  {
    id: 'cornea_noninfect_q4',
    chapterId: 4,
    type: 'short-answer',
    title: 'Neurotrophic Keratitis & River Green Sign Definitions',
    content: 'Define the following terms:\n1. Neurotrophic Keratitis.\n2. River Green Sign.',
    answer: '1. Neurotrophic Keratitis: A primary non-infective degenerative keratitis caused by the loss of corneal sensory nerve supply (Trigeminal nerve palsy), leading to a painless, central punched-out ulcer that resists healing.\n\n2. River Green Sign (Seidel\'s Test): A diagnostic clinical sign of corneal wound leak or perforation, where a stream of clear aqueous humor is seen washing away topically applied fluorescein dye under blue light illumination.',
    isClinical: false,
    topic: 'Non-Infective Ulcers (Neurotrophic & Exposure)'
  },

  // --- Topic 5: Ectatic Corneal Disorders (Keratoconus) (Q24 - Q28) ---
  {
    id: 'cornea_ectatic_q1',
    chapterId: 4,
    type: 'short-answer',
    title: 'Keratoconus Demographics & Definition',
    content: 'Define Keratoconus and describe its incidence features (age, sex, and laterality).',
    answer: 'Definition: A non-inflammatory, developmental structural weakness of the central corneal stroma, which bulges forward under the effect of normal IOP to form a conical projection.\n\nIncidence: Occurs at puberty, more common in females, and is a bilateral but asymmetrical progressive condition with a positive family history.',
    isClinical: false,
    topic: 'Ectatic Corneal Disorders (Keratoconus)'
  },
  {
    id: 'cornea_ectatic_q2',
    chapterId: 4,
    type: 'short-answer',
    title: 'Early Keratoconus Symptoms & Visual Signs',
    content: 'Enumerate the diagnostic symptoms and early visual signs of a patient with early Keratoconus.',
    answer: 'Symptoms: Gradual, progressive, painless diminution of vision that changes frequently and cannot be fully corrected by ordinary glasses.\n\nEarly Signs:\n- High progressive index myopia and irregular astigmatism.\n- Retinoscopy shows a spinning red reflex (scissors reflex).\n- Placido disc or keratometer shows complete distortion/irregularity of the mires.',
    isClinical: true,
    topic: 'Ectatic Corneal Disorders (Keratoconus)'
  },
  {
    id: 'cornea_ectatic_q3',
    chapterId: 4,
    type: 'short-answer',
    title: 'Advanced Keratoconus Structural Signs',
    content: 'Describe the advanced structural signs of Keratoconus seen on physical examination.',
    answer: '1. Central thinning and ectasia of the cornea forming a prominent cone directed down and nasally.\n2. Munson\'s Sign: Angulation/V-shaped distortion of the lower eyelid margin on looking downward.\n3. Fleischer\'s Ring: A brown iron deposition ring in the epithelial cells at the base of the cone.\n4. Vogt\'s Striae: Fine vertical stress lines in the deep stroma.\n5. Apical corneal opacities due to ruptures in Bowman\'s membrane filled with fibrous tissue.',
    isClinical: true,
    topic: 'Ectatic Corneal Disorders (Keratoconus)'
  },
  {
    id: 'cornea_ectatic_q4',
    chapterId: 4,
    type: 'short-answer',
    title: 'Acute Hydrops Pathogenesis & Course',
    content: 'Define Acute Hydrops in Keratoconus, explaining its underlying pathogenesis and clinical course.',
    answer: 'Definition: Sudden onset of severe corneal edema and marked visual drop in a known keratoconus patient.\n\nPathogenesis: Caused by a spontaneous rupture of Descemet\'s membrane, allowing a sudden gush of aqueous humor to influx directly into the corneal stroma.\n\nClinical Course: Causes pain and watering for several weeks, then resolves spontaneously over 10 weeks as endothelial cells slide over the gap, leaving a permanent apical corneal scar and partially reducing the cone curvature.',
    isClinical: true,
    topic: 'Ectatic Corneal Disorders (Keratoconus)'
  },
  {
    id: 'cornea_ectatic_q5',
    chapterId: 4,
    type: 'short-answer',
    title: 'Keratoconus Progressive Stepwise Treatment',
    content: 'Outline the progressive stepwise treatment options for Keratoconus from early to advanced stages.',
    answer: '1. Early stages: Spectacle glasses correction.\n2. Mild progression: Hard, rigid gas-permeable (RGP) contact lenses (cancels the irregular corneal refractive power).\n3. Active progression: Corneal Collagen Cross-Linking (CXL) using Riboflavin and UV-A light to stop stromal progression.\n4. Lens intolerance: Intrastromal Corneal Ring Segments (ICRS) to flatten the cone.\n5. Advanced stages with apical scarring or severe thinning: Penetrating Keratoplasty (corneal graft).',
    isClinical: true,
    topic: 'Ectatic Corneal Disorders (Keratoconus)'
  },

  // --- Topic 6: Keratoplasty & Keratorefractive Surgery (Q29 - Q32) ---
  {
    id: 'cornea_graft_q1',
    chapterId: 4,
    type: 'short-answer',
    title: 'Lamellar vs. Penetrating Keratoplasty',
    content: 'Differentiate between Lamellar Keratoplasty and Penetrating Keratoplasty.',
    answer: '- Lamellar Keratoplasty: Transplantation of only the superficial layers (half-thickness) of the donor cornea, leaving the patient\'s native endothelium intact; indicated for superficial opacities.\n- Penetrating Keratoplasty: Full-thickness transplantation of all corneal layers from a healthy donor; indicated for deep opacities and advanced keratoconus.',
    isClinical: false,
    topic: 'Keratoplasty & Keratorefractive Surgery'
  },
  {
    id: 'cornea_graft_q2',
    chapterId: 4,
    type: 'short-answer',
    title: 'Corneal Graft Primary Indications',
    content: 'Enumerate the four primary clinical indications for performing a Corneal Graft (Keratoplasty).',
    answer: '1. Optical indication: To improve vision (e.g., dense corneal opacities, advanced keratoconus).\n2. Therapeutic indication: To eliminate active resistant disease (e.g., chronic dendritic ulcer, fungal keratitis).\n3. Structural / Tectonic indication: To restore globe integrity (e.g., deep descemetocele, tissue loss after pterygium excision).\n4. Cosmetic indication: To replace an ugly opaque blind cornea with a clear graft.',
    isClinical: true,
    topic: 'Keratoplasty & Keratorefractive Surgery'
  },
  {
    id: 'cornea_graft_q3',
    chapterId: 4,
    type: 'short-answer',
    title: 'Keratoplasty Absolute Local Contraindications',
    content: 'Enumerate five absolute local contraindications for performing a Keratoplasty surgery.',
    answer: '1. Untreated or uncontrolled Glaucoma.\n2. Active anterior uveitis.\n3. Severe conjunctival xerosis (dry eye).\n4. Neuroparalytic/Neurotrophic keratitis.\n5. Deep, extensive corneal neovascularization (high risk of graft rejection).',
    isClinical: true,
    topic: 'Keratoplasty & Keratorefractive Surgery'
  },
  {
    id: 'cornea_graft_q4',
    chapterId: 4,
    type: 'short-answer',
    title: 'PRK vs. LASIK',
    content: 'Differentiate between PRK and LASIK as keratorefractive procedures.',
    answer: '- PRK (Photorefractive Keratectomy): The Excimer laser is applied directly to the anterior corneal stroma after removing the epithelium to reshape the surface and correct errors of refraction.\n- LASIK (Laser in situ Keratomileusis): A microkeratome or femtosecond laser is used to create a superficial corneal flap (130-160 um thick); the flap is lifted, the Excimer laser sculpts the deep stroma, and the flap is repositioned without surface epithelium removal.',
    isClinical: false,
    topic: 'Keratoplasty & Keratorefractive Surgery'
  },

  // ===========================================================================
  // --- CHAPTER 5: LENS ---
  // ===========================================================================

  // --- Topic 1: Congenital & Developmental Cataract ---
  {
    id: 'lens_congenital_q1',
    chapterId: 5,
    type: 'short-answer',
    title: 'Congenital Cataract Etiologies',
    content: 'Enumerate four major metabolic or maternal etiologies of Congenital Cataract.',
    answer: '1. Maternal infection during the first trimester (particularly Rubella virus).\n2. Maternal malnutrition or infantile malnutrition (deficient Vitamin D, Calcium, or proteins).\n3. Metabolic disorders (Galactosemia, Galactokinase deficiency, or Lowe syndrome).\n4. Fetal hypoxia due to placental hemorrhage.',
    isClinical: false,
    topic: 'Congenital & Developmental Cataract'
  },
  {
    id: 'lens_congenital_q2',
    chapterId: 5,
    type: 'short-answer',
    title: 'Congenital Cataract General Features',
    content: 'List the general features that characterize a Congenital Cataract.',
    answer: '1. It is usually bilateral.\n2. It is partial (visually significant or non-axial).\n3. It is stationary (rarely progresses, except in rubella total cataract).\n4. It is a soft cataract in consistency.',
    isClinical: false,
    topic: 'Congenital & Developmental Cataract'
  },
  {
    id: 'lens_congenital_q3',
    chapterId: 5,
    type: 'short-answer',
    title: 'Zonular (Lamellar) Cataract Presentation',
    content: 'Describe the clinical presentation (symptoms and signs) of Zonular (Lamellar) Cataract.',
    answer: 'Symptoms: The mother notices a white color in the child\'s pupil ("Leukocoria") and poor fixation due to dropped vision.\n\nSigns on oblique illumination/slit lamp: Grayish-white disc-shaped opacity in the central lens nucleus while the periphery is clear, with radial riders or spokes projecting out like a steering wheel.\n\nSigns on Red Reflex: Central dim or blackened reflex with a bright red peripheral reflex.',
    isClinical: true,
    topic: 'Congenital & Developmental Cataract'
  },
  {
    id: 'lens_congenital_q4',
    chapterId: 5,
    type: 'short-answer',
    title: 'Rubella Total Cataract Features',
    content: 'Enumerate the systemic and ocular features associated with Rubella Total Cataract.',
    answer: 'Systemic features: Microcephaly, mental retardation, deafness, and congenital heart defects (PDA, VSD).\n\nOcular features: Microphthalmos, buphthalmos, and total lens opacification with complete loss of the red reflex.',
    isClinical: true,
    topic: 'Congenital & Developmental Cataract'
  },
  {
    id: 'lens_congenital_q5',
    chapterId: 5,
    type: 'short-answer',
    title: 'Untreated Congenital Cataract Complications',
    content: 'Enumerate three major functional complications of an untreated dense Congenital Cataract.',
    answer: '1. Sensory deprivation amblyopia (lazy eye).\n2. Sensory nystagmus (in bilateral extensive cases).\n3. Strabismus / Squint (commonly in unilateral cases).',
    isClinical: true,
    topic: 'Congenital & Developmental Cataract'
  },
  {
    id: 'lens_congenital_q6',
    chapterId: 5,
    type: 'short-answer',
    title: 'Congenital Cataract Management & Technique',
    content: 'State the management rules and the specific named surgical technique for Congenital Cataract.',
    answer: '- Visually significant/dense cataract: Operated as early as possible (ASAP) to avoid amblyopia.\n- Non-visually significant (partial/peripheral): Follow-up until age 5 to test visual acuity.\n- Surgical technique of choice: "Lensectomy and anterior vitrectomy" performed via a pars plana or corneal approach.',
    isClinical: true,
    topic: 'Congenital & Developmental Cataract'
  },

  // --- Topic 2: Senile Cortical Cataract (Progression & Hypermaturity) ---
  {
    id: 'lens_cortical_q1',
    chapterId: 5,
    type: 'short-answer',
    title: 'Senile Cortical Cataract Stages',
    content: 'List the four progressive clinical stages of a Senile Cortical Cataract.',
    answer: '1. Incipient stage\n2. Immature stage\n3. Mature stage\n4. Hypermature stage',
    isClinical: false,
    topic: 'Senile Cortical Cataract (Progression & Hypermaturity)'
  },
  {
    id: 'lens_cortical_q2',
    chapterId: 5,
    type: 'short-answer',
    title: 'Incipient vs. Immature Stage',
    content: 'Contrast between the symptoms and signs of the Incipient stage versus the Immature stage.',
    answer: '- Incipient Stage: Symptoms include gradual visual drop, uniocular diplopia (irregular refraction), and haloes around light. Signs show peripheral wedge-shaped or triangular grayish-white opacities on a dilated pupil.\n- Immature Stage: Symptoms include marked visual drop, especially at night (night blindness). Signs show incomplete uniform gray-white opacification of the deep cortex, and the iris shadow is still present.',
    isClinical: true,
    topic: 'Senile Cortical Cataract (Progression & Hypermaturity)'
  },
  {
    id: 'lens_cortical_q3',
    chapterId: 5,
    type: 'short-answer',
    title: 'Intumescent Cataract & Glaucoma Link',
    content: 'Define the Intumescent form of Immature Cataract and state its most dangerous clinical complication.',
    answer: 'Definition: A form where rapid lens degeneration leads to water influx from the aqueous, causing the lens to become heavily swollen with a glistening capsule.\n\nComplication: Triggers secondary pupillary block glaucoma, known as Phacomorphic Glaucoma.',
    isClinical: true,
    topic: 'Senile Cortical Cataract (Progression & Hypermaturity)'
  },
  {
    id: 'lens_cortical_q4',
    chapterId: 5,
    type: 'short-answer',
    title: 'Mature vs. Hypermature Slit-Lamp Signs',
    content: 'Contrast between Mature and Hypermature Cortical Cataract on slit-lamp examination.',
    answer: '- Mature Cataract: Total grayish-white opacification of the cortex, and the iris shadow is completely absent (no clear zone remains between the iris and opacity).\n- Hypermature Cataract: Glistening calcium and cholesterol crystals deposit on a wrinkled/shrunken capsule. The cortical material liquefies and escapes, causing lens shrinkage, deep anterior chamber, and tremulous iris (Iridodonesis).',
    isClinical: true,
    topic: 'Senile Cortical Cataract (Progression & Hypermaturity)'
  },
  {
    id: 'lens_cortical_q5',
    chapterId: 5,
    type: 'short-answer',
    title: 'Morgagnian Hypermature Cataract Pathology',
    content: 'Define the Morgagnian form of Hypermature Cataract and describe its pathology.',
    answer: 'Definition: A specific type of hypermature cataract where the cortex completely liquefies into a milky fluid.\n\nPathology: Impaired capsule permeability causes fluid retention and water absorption. The dense, proteolysis-resistant brown nucleus becomes freely mobile and sinks inferiorly within the liquefied cortex.',
    isClinical: true,
    topic: 'Senile Cortical Cataract (Progression & Hypermaturity)'
  },

  // --- Topic 3: Senile Nuclear Cataract ---
  {
    id: 'lens_nuclear_q1',
    chapterId: 5,
    type: 'short-answer',
    title: 'Nuclear Cataract Pathogenesis & "Second Sight"',
    content: 'Describe the pathogenesis and the specific hallmark symptom of a Senile Nuclear Cataract.',
    answer: 'Pathogenesis: Exaggerated dehydration and compression of the lens nucleus, leading to denaturation and progressive opacification of the nuclear proteins.\n\nHallmark Symptom: Progressive index myopia, which temporarily corrects the patient\'s presbyopia, allowing them to read without glasses again, known as "Second Sight".',
    isClinical: true,
    topic: 'Senile Nuclear Cataract'
  },
  {
    id: 'lens_nuclear_q2',
    chapterId: 5,
    type: 'short-answer',
    title: 'Nuclear Cataract & "Day Blindness"',
    content: 'Explain why a patient with a Nuclear Cataract complains specifically of "Day Blindness".',
    answer: 'Because the nuclear opacity is located strictly in the center of the lens. Exposure to bright daylight induces physiological miosis (pupillary constriction), which confines light rays strictly to the central opaque zone, markedly dropping vision during the day.',
    isClinical: true,
    topic: 'Senile Nuclear Cataract'
  },
  {
    id: 'lens_nuclear_q3',
    chapterId: 5,
    type: 'short-answer',
    title: 'Sclerosis vs. Pathological Nuclear Cataract',
    content: 'Provide the four-point differential diagnosis between Physiological Nuclear Sclerosis and Pathological Nuclear Cataract.',
    answer: '1. Cause: Exaggerated physiological dehydration/compression vs Pathological denaturation and opacification.\n2. Visual Acuity: Can be corrected to normal levels with glasses vs Not improved by spectacles.\n3. Oblique Illumination: Grayish appearance of the nucleus vs Yellow, yellow-brown, or black nucleus.\n4. Red Reflex: Complete red reflex vs Black center surrounded by a red periphery.',
    isClinical: true,
    topic: 'Senile Nuclear Cataract'
  },
  {
    id: 'lens_nuclear_q4',
    chapterId: 5,
    type: 'short-answer',
    title: 'Senile Nuclear Sclerosis Clinical Presentation',
    content: 'Describe the expected clinical presentation of Senile Nuclear Sclerosis regarding: Visual Acuity, Oblique Illumination, and Red Reflex.',
    answer: '- Visual Acuity: Decreased for distance, but can be corrected back to normal levels using spectacle lenses (index myopic shift allows reading without near glasses).\n- Oblique Illumination: Shows a distinct grayish or dusky appearance localized within the central lens nucleus.\n- Red Reflex: Shows a complete, uninterrupted red reflex across the entire pupil.',
    isClinical: true,
    topic: 'Senile Nuclear Cataract'
  },

  // --- Topic 4: Preoperative Evaluation & Surgical Techniques ---
  {
    id: 'lens_preop_q1',
    chapterId: 5,
    type: 'short-answer',
    title: 'Ocular Parameters Before Cataract Surgery',
    content: 'List four essential parameters to check during the local ocular examination before cataract surgery.',
    answer: '1. Visual Acuity (Unaided & Aided): Ensure there is at least light perception (No PL = No surgery).\n2. Intraocular Pressure (IOP): To exclude or guard the prognosis against associated glaucoma.\n3. Pupillary Reaction to Light: Vital to assess optic nerve head/retinal pathway integrity.\n4. Fundus Examination / Ocular Ultrasound (B-scan): Mandatory if the cataract is mature/dense to ensure a normal retina and macula before operating.',
    isClinical: true,
    topic: 'Preoperative Evaluation & Surgical Techniques'
  },
  {
    id: 'lens_preop_q2',
    chapterId: 5,
    type: 'short-answer',
    title: 'ECCE vs. Phacoemulsification',
    content: 'Differentiate between ECCE and Phacoemulsification regarding the mechanism of nucleus extraction and incision size.',
    answer: '- ECCE (Extracapsular Cataract Extraction): Requires a large limbal incision; the anterior capsule is opened, and the hard nucleus is delivered out of the eye as a single whole piece, followed by cortex aspiration.\n- Phacoemulsification: Requires a tiny corneal incision; an ultrasonic probe vibrates to emulsify and fragment the lens nucleus inside the eye, which is then aspirated mechanically.',
    isClinical: false,
    topic: 'Preoperative Evaluation & Surgical Techniques'
  },
  {
    id: 'lens_preop_q3',
    chapterId: 5,
    type: 'short-answer',
    title: 'ICCE definition, Indication & Disadvantages',
    content: 'Define ICCE and mention its current primary indication and its key disadvantages.',
    answer: 'Definition: Intracapsular Cataract Extraction, which involves removing the entire lens completely out of the eye within its intact capsule.\n\nPrimary Indication: Extensive lens subluxation or dislocation.\n\nDisadvantages: High incidence of vitreous loss, retinal detachment, aphakic glaucoma, and cystoid macular edema (CME).',
    isClinical: false,
    topic: 'Preoperative Evaluation & Surgical Techniques'
  },
  {
    id: 'lens_preop_q4',
    chapterId: 5,
    type: 'short-answer',
    title: 'Postoperative Cataract Complications',
    content: 'Enumerate six major postoperative complications of cataract extraction surgery.',
    answer: '1. Endophthalmitis (the worst suppurative complication).\n2. Vitreous loss / Vitreous hemorrhage.\n3. Secondary glaucoma (increased eye pressure).\n4. Retinal Detachment.\n5. Severe anterior uveitis.\n6. Corneal decompensation / edema.',
    isClinical: true,
    topic: 'Preoperative Evaluation & Surgical Techniques'
  },

  // --- Topic 5: Complicated & Traumatic Cataract ---
  {
    id: 'lens_traumatic_q1',
    chapterId: 5,
    type: 'short-answer',
    title: 'Complicated Cataract Definition & Causes',
    content: 'Define Complicated Cataract and list three anterior segment and three posterior segment ocular diseases that cause it.',
    answer: 'Definition: An acquired lens opacity occurring secondary to a local intraocular disease.\n\nCauses (Anterior Segment): Chronic iridocyclitis, perforated central corneal ulcer, acute glaucoma, or prolonged topical steroid use.\n\nCauses (Posterior Segment): High degenerative myopia, retinal detachment, retinitis pigmentosa, or intraocular tumors.',
    isClinical: true,
    topic: 'Complicated & Traumatic Cataract'
  },
  {
    id: 'lens_traumatic_q2',
    chapterId: 5,
    type: 'short-answer',
    title: 'Concussion Cataract Location & Shape',
    content: 'State the characteristic initial location and pathognomonic shape of a Traumatic Concussion Cataract.',
    answer: 'Location: Posterior subcapsular or cortical cortex, due to thin posterior capsule features and lack of subcapsular epithelium.\n\nShape: Typically Rosette-shaped with a feathery appearance along the lens sutures.',
    isClinical: true,
    topic: 'Complicated & Traumatic Cataract'
  },
  {
    id: 'lens_traumatic_q3',
    chapterId: 5,
    type: 'short-answer',
    title: 'Vossius Ring Definition',
    content: 'Define Vossius Ring.',
    answer: 'A pathognomonic ring of dark iris pigment deposited directly onto the anterior lens capsule, caused by the mechanical impact of blunt trauma pressing the pupillary iris border against the lens.',
    isClinical: true,
    topic: 'Complicated & Traumatic Cataract'
  },
  {
    id: 'lens_traumatic_q4',
    chapterId: 5,
    type: 'short-answer',
    title: 'Physical Agents Traumatic Cataract Matching',
    content: 'Match the physical traumatic agent (Infra-red, Radiation, Electrical) with its specific cortical cataract presentation.',
    answer: '- Infra-Red Rays (Glass Blower\'s Cataract): Causes posterior cortical opacity that progresses to maturity.\n- Ionic Radiation (Cancer X-ray therapy): Causes posterior cortical opacity that progresses to maturity.\n- Electrical Trauma (High current shock): Causes an anterior cortical lens opacity.',
    isClinical: false,
    topic: 'Complicated & Traumatic Cataract'
  },
  {
    id: 'lens_traumatic_q5',
    chapterId: 5,
    type: 'short-answer',
    title: 'Secondary "After Cataract" (PCO) & Treatment',
    content: 'Define "After Cataract" (Posterior Capsule Opacification - PCO), describe its two clinical forms, and state its treatment.',
    answer: 'Definition: Opacification of the posterior lens capsule that persists or forms months after a successful ECCE or Phacoemulsification surgery.\n\nClinical forms:\n1. Elschnig\'s pearls: Cluster of transparent soap-bubble-like regenerating lens cells.\n2. Capsular fibrosis: Structural thickening and scarring of the capsule.\n\nTreatment: Non-invasive Nd:YAG laser capsulotomy (or surgical capsulotomy if dense).',
    isClinical: true,
    topic: 'Complicated & Traumatic Cataract'
  },

  // ===========================================================================
  // --- CHAPTER 6: ORBIT ---
  // ===========================================================================

  // --- Topic 1: Orbital & Preseptal Cellulitis ---
  {
    id: 'orbit_cellulitis_q1',
    chapterId: 6,
    type: 'short-answer',
    title: 'Orbital Cellulitis Definition & Etiology',
    content: 'Define Orbital Cellulitis and mention its commonest source of infection and causative organisms.',
    answer: 'Definition: Acute suppurative inflammation of the orbital fibro-fatty tissues posterior to the orbital septum.\n\nCommonest source: Endogenous extension from neighboring paranasal sinuses (especially the ethmoid sinus).\n\nCausative organisms: Pyogenic organisms, most commonly Staphylococcus aureus and Streptococci.',
    isClinical: false,
    topic: 'Orbital & Preseptal Cellulitis'
  },
  {
    id: 'orbit_cellulitis_q2',
    chapterId: 6,
    type: 'short-answer',
    title: 'Orbital Cellulitis Clinical Picture',
    content: 'Describe the clinical picture (symptoms and signs) of Orbital Cellulitis.',
    answer: 'Symptoms: Severe deep orbital pain, double vision (diplopia), high fever, headache, and malaise.\n\nSigns: Marked lid edema with erythema and tenderness, conjunctival chemosis, axial proptosis, and marked limitation of ocular movements in all directions (ophthalmoplegia).',
    isClinical: true,
    topic: 'Orbital & Preseptal Cellulitis'
  },
  {
    id: 'orbit_cellulitis_q3',
    chapterId: 6,
    type: 'short-answer',
    title: 'Orbital Cellulitis Complications',
    content: 'Enumerate the ocular and intracranial complications of untreated Orbital Cellulitis.',
    answer: 'Ocular complications: Exposure keratopathy/corneal ulceration, orbital abscess, panophthalmitis, and central retinal artery or vein occlusion.\n\nIntracranial complications: Meningitis, brain abscess, and Cavernous Sinus Thrombosis.',
    isClinical: true,
    topic: 'Orbital & Preseptal Cellulitis'
  },
  {
    id: 'orbit_cellulitis_q4',
    chapterId: 6,
    type: 'short-answer',
    title: 'Preseptal Cellulitis Definition & Differentiating Features',
    content: 'Define Preseptal Cellulitis and state the key clinical signs used to differentiate it from dangerous Orbital Cellulitis.',
    answer: 'Definition: Infection of the eyelid and surrounding skin strictly anterior to the orbital septum.\n\nDifferentiating signs: In Preseptal Cellulitis, visual acuity is completely normal, ocular motility is fully intact (no limitation), and there is NO proptosis.',
    isClinical: true,
    topic: 'Orbital & Preseptal Cellulitis'
  },
  {
    id: 'orbit_cellulitis_q5',
    chapterId: 6,
    type: 'short-answer',
    title: 'Orbital Cellulitis Management & CT Scan Role',
    content: 'State the management protocol for Orbital Cellulitis and describe how CT scan differentiates it from Preseptal Cellulitis.',
    answer: 'Management: Urgent hospitalization, hot foments, and intensive intravenous (IV) parenteral broad-spectrum antibiotics; surgical drainage is mandatory if an abscess forms.\n\nCT scan differentiation: Shows soft tissue inflammatory involvement confined anterior to the orbital septum in preseptal cellulitis, while involvement is present posterior to the septum in orbital cellulitis.',
    isClinical: true,
    topic: 'Orbital & Preseptal Cellulitis'
  },
  {
    id: 'orbit_cellulitis_q6',
    chapterId: 6,
    type: 'short-answer',
    title: 'Acute Orbital Cellulitis Case Study',
    content: 'A 15-year-old girl presents with an acute onset of right-sided painful proptosis, total ophthalmoplegia, and severely swollen, hyperemic eyelids and conjunctiva. Her systemic body temperature is markedly elevated at 39°C. The contralateral left eye is completely normal.\n\n1. What is your probable diagnosis?\n2. Enumerate 4 potential ocular or systemic complications for this case.\n3. Enumerate 2 life-threatening diseases that enter into the differential diagnosis of this condition.',
    answer: '1. Probable Diagnosis: Right-sided Acute Orbital Cellulitis.\n\n2. Four Potential Complications:\n- Orbital Abscess formation.\n- Exposure keratopathy leading to corneal ulceration and perforation.\n- Central Retinal Artery Occlusion (CRAO) causing permanent blindness.\n- Cavernous Sinus Thrombosis.\n\n3. Two Differential Diagnosis Diseases: Cavernous Sinus Thrombosis and Acute Suppurative Dacryoadenitis.',
    isClinical: true,
    topic: 'Orbital & Preseptal Cellulitis'
  },

  // --- Topic 2: Thyroid Eye Disease (TED / Graves\' Disease) ---
  {
    id: 'orbit_thyroid_q1',
    chapterId: 6,
    type: 'short-answer',
    title: 'Thyroid Eye Disease Definition & Pathogenesis',
    content: 'Define Thyroid Eye Disease and describe its underlying immunogenic pathogenesis.',
    answer: 'Definition: Ocular and orbital manifestations resulting from thyroid gland dysfunction (most common cause of unilateral and bilateral proptosis).\n\nPathogenesis: Immunogenic deposition of abnormal mucopolysaccharides and collagen within the orbit and extraocular muscles, accompanied by lymphocytic infiltration and subsequent muscle fibrosis.',
    isClinical: false,
    topic: "Thyroid Eye Disease (TED / Graves' Disease)"
  },
  {
    id: 'orbit_thyroid_q2',
    chapterId: 6,
    type: 'short-answer',
    title: 'Thyrotoxic Exophthalmos Ocular Signs',
    content: "List the four major local ocular signs of Thyrotoxic Exophthalmos (Graves' disease).",
    answer: "1. Soft Tissue Involvement: Edema and congestion of the eyelids and conjunctiva.\n2. Lid Retraction: Leading to a staring look, infrequent blinking, and lid lag (Von Graefe's sign: retarded descent of the upper lid in down-gaze).\n3. Axial Proptosis: Unilateral or bilateral.\n4. Restrictive Myopathy: Limited ocular motility (especially up-gaze due to inferior rectus thickening) causing diplopia.",
    isClinical: true,
    topic: "Thyroid Eye Disease (TED / Graves' Disease)"
  },
  {
    id: 'orbit_thyroid_q3',
    chapterId: 6,
    type: 'short-answer',
    title: 'Thyroid Eye Disease Therapeutic Options',
    content: 'Enumerate the progressive therapeutic options for managing Thyroid Eye Disease.',
    answer: '1. Strict medical treatment of the underlying thyrotoxicosis/thyroid state.\n2. Artificial tear substitutes for continuous corneal protection against exposure.\n3. Systemic corticosteroids to reduce active orbital inflammation.\n4. Lateral tarsorrhaphy if severe lagophthalmos is present.\n5. Surgical Orbital Decompression in advanced cases (e.g., compressive optic neuropathy).',
    isClinical: true,
    topic: "Thyroid Eye Disease (TED / Graves' Disease)"
  },

  // --- Topic 3: Cavernous Sinus Thrombosis (CST) ---
  {
    id: 'orbit_cavernous_q1',
    chapterId: 6,
    type: 'short-answer',
    title: 'Cavernous Sinus Thrombosis Definition \& Structures',
    content: 'Define Cavernous Sinus Thrombosis, mention its primary etiology, and list the vital structures running inside it.',
    answer: 'Definition: A life-threatening thrombotic occlusion of the cavernous sinus venous channel.\n\nEtiology: Spread of pyogenic infection along venous tributaries from septic foci (like orbital cellulitis or facial boils).\n\nStructures inside/in the wall: Internal carotid artery, abducent nerve (runs inside), oculomotor, trochlear, ophthalmic, and maxillary nerves (in the lateral wall).',
    isClinical: false,
    topic: 'Cavernous Sinus Thrombosis (CST)'
  },
  {
    id: 'orbit_cavernous_q2',
    chapterId: 6,
    type: 'short-answer',
    title: 'Cavernous Sinus Thrombosis Presentation',
    content: 'Describe the clinical symptoms and signs of Cavernous Sinus Thrombosis.',
    answer: 'Symptoms: Severe deep orbital pain, diplopia, high remittent fever, headache, vomiting, and cerebral symptoms.\n\nSigns: Marked lid edema, severe conjunctival chemosis, rapidly increasing axial proptosis, total ophthalmoplegia, edema over the mastoid region, and characteristic rapid involvement of the contralateral (fellow) eye.',
    isClinical: true,
    topic: 'Cavernous Sinus Thrombosis (CST)'
  },
  {
    id: 'orbit_cavernous_q3',
    chapterId: 6,
    type: 'short-answer',
    title: 'Cavernous Sinus Thrombosis Emergency Management',
    content: 'Outline the emergency management lines for a patient with Cavernous Sinus Thrombosis.',
    answer: '1. Immediate hospitalization.\n2. Intensive, continuous intravenous (IV) broad-spectrum antibiotics.\n3. Intravenous Heparin (5000 I.U. every 6 hours) to prevent thrombus propagation.\n4. Identification and eradication of the primary causative septic focus.',
    isClinical: true,
    topic: 'Cavernous Sinus Thrombosis (CST)'
  },

  // --- Topic 4: Proptosis & Enophthalmos ---
  {
    id: 'orbit_proptosis_q1',
    chapterId: 6,
    type: 'short-answer',
    title: 'Proptosis Definition & Causes',
    content: 'Define Proptosis and enumerate the primary causes of unilateral versus bilateral proptosis.',
    answer: 'Definition: Abnormal protrusion of the eyeball outside the boundaries of the orbital rim.\n\nUnilateral causes: Thyroid ophthalmopathy (most common), orbital cellulitis, benign vascular tumors (hemangioma), malignant tumors (rhabdomyosarcoma), orbital varices, or dermoid cysts.\n\nBilateral causes: Thyroid ophthalmopathy (most common) and Cavernous Sinus Thrombosis.',
    isClinical: false,
    topic: 'Proptosis & Enophthalmos'
  },
  {
    id: 'orbit_proptosis_q2',
    chapterId: 6,
    type: 'short-answer',
    title: 'Proptosis Evaluation and Measurements',
    content: 'Describe the physical inspection parameters required to confirm and evaluate Proptosis.',
    answer: '1. Confirm the presence of proptosis: Stand behind the patient, tilt their head backward, and look down at the level of both corneas from above.\n2. Measure the exact degree: Distance between the corneal apex and lateral orbital rim is measured using a transparent ruler or Hertel\'s exophthalmometer.\n3. Determine the direction: Axial protrusion indicates intraconal lesions; displaced protrusion indicates extraconal masses.',
    isClinical: true,
    topic: 'Proptosis & Enophthalmos'
  },
  {
    id: 'orbit_proptosis_q3',
    chapterId: 6,
    type: 'short-answer',
    title: 'Enophthalmos Definition & Causes',
    content: 'Define Enophthalmos and list four distinct clinical causes.',
    answer: 'Definition: Backward displacement or retraction of the eyeball within the orbital cavity.\n\nCauses:\n1. Congenital microphthalmos.\n2. Traumatic orbital floor fracture (blow-out fracture with fat herniation).\n3. Severe post-inflammatory orbital fat atrophy.\n4. Cicatrizing orbital tumors.',
    isClinical: true,
    topic: 'Proptosis & Enophthalmos'
  },
  {
    id: 'orbit_proptosis_q4',
    chapterId: 6,
    type: 'short-answer',
    title: 'Atrophia Bulbi Definition, Causes & Management',
    content: 'Define Atrophia Bulbi, mention its causes, and state its management.',
    answer: 'Definition: A shrunken, completely non-functional (blind) and disorganized eyeball.\n\nCauses: Long-standing retinal detachment, severe ocular trauma, or endophthalmitis/panophthalmitis.\n\nManagement: Enucleation of the globe if it is a blind, painful eye.',
    isClinical: true,
    topic: 'Proptosis & Enophthalmos'
  },

  // --- Topic 5: Surgical Operations of the Orbit ---
  {
    id: 'orbit_surgery_q1',
    chapterId: 6,
    type: 'short-answer',
    title: 'Enucleation Definition & Indications',
    content: 'Define Enucleation and list its explicit clinical indications.',
    answer: 'Definition: Surgical removal of the eyeball as a whole piece, leaving the extraocular muscles, conjunctiva, and optic nerve behind.\n\nIndications:\n1. To control pain in a blind, painful eye (e.g., Absolute Glaucoma).\n2. To save life in cases of malignant intraocular tumors (Retinoblastoma, Melanoma).\n3. To save the fellow eye in cases of Sympathetic Ophthalmitis.\n4. Cosmetic improvement of a severely deformed eye.',
    isClinical: true,
    topic: 'Surgical Operations of the Orbit'
  },
  {
    id: 'orbit_surgery_q2',
    chapterId: 6,
    type: 'short-answer',
    title: 'Evisceration Definition, Indications & Contraindications',
    content: 'Define Evisceration, state its absolute clinical indications, and explain why Enucleation is contraindicated in these conditions.',
    answer: 'Definition: Surgical removal of all intraocular contents while leaving the outer scleral shell, conjunctiva, and extraocular muscles completely intact.\n\nIndications: Endophthalmitis and Panophthalmitis.\n\nWhy Enucleation is contraindicated: Because cutting across the optic nerve sheath in an actively infected panophthalmitis eye opens up subarachnoid pathways, carrying a fatal risk of spreading pus directly into the brain, causing purulent meningitis.',
    isClinical: true,
    topic: 'Surgical Operations of the Orbit'
  },
  {
    id: 'orbit_surgery_q3',
    chapterId: 6,
    type: 'short-answer',
    title: 'Exenteration Definition & Indications',
    content: 'Define Exenteration and mention its primary indications.',
    answer: 'Definition: Radical surgical removal of all intraocular and orbital contents within the orbital periosteum, including the eyelids.\n\nIndications: Aggressive, advanced malignant orbital tumors with a completely free periosteum and no systemic metastasis, or extensive malignant tumors of the eyelids/conjunctiva invading the orbit.',
    isClinical: true,
    topic: 'Surgical Operations of the Orbit'
  },

  // ===========================================================================
  // --- CHAPTER 7: ERRORS OF REFRACTION ---
  // ===========================================================================

  // --- Topic 1: Myopia (Short Sightedness) ---
  {
    id: 'refraction_myopia_q1',
    chapterId: 7,
    type: 'short-answer',
    title: 'Myopia Definition & Etiology',
    content: 'Define Myopia and list its three main etiological categories.',
    answer: 'Definition: A refractive condition where parallel light rays come to a focus in front of the retina when the eye is at rest and accommodation is completely relaxed.\n\nEtiology:\n1. Axial Myopia: An increase in the antero-posterior axial length of the eye (most common; each 1 mm increase results in a 3 D myopic shift).\n2. Refractive Myopia: Increased refractive power of the eye due to:\n   * Curvature Myopia: Increased curvature of the cornea (Keratoconus) or lens (Lenticonus).\n   * Index Myopia: Increased refractive index of the lens nucleus (Senile nuclear cataract or hyperglycemia in uncontrolled diabetes).\n3. Abnormal Lens Position: Anterior dislocation of the lens.',
    isClinical: false,
    topic: 'Myopia (Short Sightedness)'
  },
  {
    id: 'refraction_myopia_q2',
    chapterId: 7,
    type: 'short-answer',
    title: 'Simple vs. Progressive Myopia',
    content: 'Contrast between Simple Myopia and Progressive (Degenerative) Myopia regarding age of onset, progression, and maximum refractive error.',
    answer: '- Simple Myopia: Starts around puberty (14 years), progresses slowly until it becomes stationary in the twenties, and rarely exceeds 6 diopters.\n- Progressive Myopia: Starts early in childhood (5-10 years), progresses rapidly, continues to progress even after the age of 25, can reach 25 D or more, and is accompanied by degenerative fundus changes.',
    isClinical: false,
    topic: 'Myopia (Short Sightedness)'
  },
  {
    id: 'refraction_myopia_q3',
    chapterId: 7,
    type: 'short-answer',
    title: 'Why Accommodation Worsens Myopia',
    content: 'Explain why the continuous exertion of accommodation worsens a myopic patient\'s condition.',
    answer: 'Because accommodation mechanically increases the curvature and refractive power of the crystalline lens. This brings the focus of parallel light rays even further forward in front of the retina, increasing the distance between the focal point and the macular surface, which worsens the blur.',
    isClinical: true,
    topic: 'Myopia (Short Sightedness)'
  },
  {
    id: 'refraction_myopia_q4',
    chapterId: 7,
    type: 'short-answer',
    title: 'High Progressive Myopia Fundus Signs',
    content: 'Enumerate four diagnostic fundus signs seen in a patient with High Progressive Myopia.',
    answer: '1. Tessellated (tigeroid) fundus.\n2. Myopic Crescent (atrophy of outer retina and choroid temporal to or around the optic disc).\n3. Fuchs\' Spot (black area at the macula due to recurrent hemorrhages from subretinal CNV).\n4. Extensive chorio-retinal degenerations and posterior staphyloma.',
    isClinical: true,
    topic: 'Myopia (Short Sightedness)'
  },
  {
    id: 'refraction_myopia_q5',
    chapterId: 7,
    type: 'short-answer',
    title: 'High Myopia Complications',
    content: 'Enumerate five clinical complications that can develop secondary to High Myopia.',
    answer: '1. Rhegmatogenous Retinal Detachment (due to tears or holes in chorio-retinal degeneration areas).\n2. Posterior Vitreous Detachment (PVD) with floaters.\n3. True divergent squint (Exotropia).\n4. Complicated nuclear or cortical cataract.\n5. Pigmentary Glaucoma (due to pigment deposition blocking the trabecular meshwork).',
    isClinical: true,
    topic: 'Myopia (Short Sightedness)'
  },
  {
    id: 'refraction_myopia_q6',
    chapterId: 7,
    type: 'short-answer',
    title: 'Myopia Optical and Surgical Treatment',
    content: 'Outline the optical and surgical corneal/lens treatment options for Myopia.',
    answer: '- Optical: Spectacle glasses using concave (minus) spherical lenses (prescribe the least tolerable minus lens), or contact lenses.\n- Surgical (Corneal): LASIK, PRK, or Femtosecond laser-assisted Small Incision Lenticule Extraction (Femto-SMILE).\n- Surgical (Lens): Phakic Intraocular Lens (IOL) implantation (IC-IOL or ICL), or Refractive Lens Exchange (RLE).',
    isClinical: false,
    topic: 'Myopia (Short Sightedness)'
  },
  {
    id: 'refraction_myopia_q7',
    chapterId: 7,
    type: 'short-answer',
    title: 'School Blackboard Reading Difficulty Case Study',
    content: 'A 14-year-old boy is seen complaining of difficulty in reading the blackboard at school, but he has no difficulty in reading books. Also, he is complaining of a recurrent headache. On examination, his uncorrected visual acuity was 6/24 in the right eye and 6/18 in the left eye, both improving with a pinhole test to 6/9.\n\n1. What is your diagnosis?\n2. Explain the physical cause of improvement of vision with a pinhole in this case.',
    answer: '1. Diagnosis: Simple Axial Myopia.\n\n2. Cause of Pinhole Improvement: The pinhole cuts off peripheral blurred/divergent light rays and allows only a small, central bundle of parallel light rays to enter the eye. This bypasses the refractive error of the eye, reducing the size of the blur circle on the retina and sharpening the image.',
    isClinical: true,
    topic: 'Myopia (Short Sightedness)'
  },

  // --- Topic 2: Hypermetropia (Far Sightedness) ---
  {
    id: 'refraction_hyper_q1',
    chapterId: 7,
    type: 'short-answer',
    title: 'Hypermetropia Definition & Etiology',
    content: 'Define Hypermetropia and enumerate its four main etiological causes.',
    answer: 'Definition: A refractive condition where parallel light rays come to a focus behind the retina when accommodation is completely relaxed.\n\nEtiology:\n1. Axial Hypermetropia: Shortness of the antero-posterior length of the eye (infants are born with it, and it usually resolves by age 7).\n2. Curvature Hypermetropia: Flattening of the corneal curvature (Cornea plana).\n3. Index Hypermetropia: Decreased refractive index of the lens nucleus (Senile cortical cataract or hyperglycemia under tight control).\n4. Abnormal Lens Position: Posterior dislocation of the lens, or complete absence of the lens (Aphakia).',
    isClinical: false,
    topic: 'Hypermetropia (Far Sightedness)'
  },
  {
    id: 'refraction_hyper_q2',
    chapterId: 7,
    type: 'short-answer',
    title: 'Why Hypermetropia is Correctable by Accommodation',
    content: 'Explain why Hypermetropia is the only error of refraction that can be completely corrected by accommodation.',
    answer: 'Because hypermetropic light rays focus behind the retina, meaning the eye requires more refractive power to bring the focal point forward. Accommodation naturally increases the convexity and refractive power of the lens, which successfully shifts the focus onto the retinal surface.',
    isClinical: true,
    topic: 'Hypermetropia (Far Sightedness)'
  },
  {
    id: 'refraction_hyper_q3',
    chapterId: 7,
    type: 'short-answer',
    title: 'Five Components of Hypermetropia',
    content: 'Enumerate and define the five components of Hypermetropia.',
    answer: '1. Total Hypermetropia: The entire error measured under complete ciliary muscle paralysis using Atropine.\n2. Latent Hypermetropia: The part of the error corrected naturally by the normal physiological tone of the ciliary muscle (about 1 D).\n3. Manifest Hypermetropia: The remaining error that cannot be corrected by ciliary muscle tone alone (Total minus Latent).\n4. Facultative Hypermetropia: The part of manifest hypermetropia that can be actively corrected by voluntary accommodation.\n5. Absolute Hypermetropia: The remaining part of manifest hypermetropia that cannot be overcome by accommodation (Manifest minus Facultative).',
    isClinical: false,
    topic: 'Hypermetropia (Far Sightedness)'
  },
  {
    id: 'refraction_hyper_q4',
    chapterId: 7,
    type: 'short-answer',
    title: 'Hypermetropia Symptoms and Signs Progression',
    content: 'Describe the age-related progression of symptoms and signs in a hypermetropic patient.',
    answer: '- In children: Usually asymptomatic because the amplitude of accommodation is strong enough to correct the entire manifest error.\n- As age advances: Presents with accommodative asthenopia (eyestrain/headache) first for near work and later for both distance and near vision, leading to early presbyopia.\n- Signs: Small globe, shallow anterior chamber with a narrow angle, tortuous retinal vessels, and pseudo-papilledema (blurred disc margins due to crowded fibers in a small lamina cribrosa).',
    isClinical: true,
    topic: 'Hypermetropia (Far Sightedness)'
  },
  {
    id: 'refraction_hyper_q5',
    chapterId: 7,
    type: 'short-answer',
    title: 'Hypermetropia Complications & Treatment Rules',
    content: 'Enumerate the clinical complications and optical treatment rules for Hypermetropia.',
    answer: '- Complications: True convergent squint (Accommodative Esotropia) and Primary Angle-Closure Glaucoma (due to a shallow anterior chamber).\n- Treatment Rules: Prescribe spherical convex (plus) lenses:\n  * In children with accommodative esotropia: Full hypermetropic correction under atropine cycloplegia.\n  * In adults: The highest tolerated plus lens is prescribed.\n  * In old age: Full correction is given because accommodation is weak.',
    isClinical: true,
    topic: 'Hypermetropia (Far Sightedness)'
  },

  // --- Topic 3: Astigmatism ---
  {
    id: 'refraction_astig_q1',
    chapterId: 7,
    type: 'short-answer',
    title: 'Astigmatism Definition & Regular vs. Irregular',
    content: 'Define Astigmatism and differentiate between Regular and Irregular Astigmatism.',
    answer: 'Definition: A refractive error where the eye does not possess the same refractive power in all meridia, preventing parallel light rays from coming to a single point focus on the retina.\n\n- Regular Astigmatism: The two principal meridians (highest and lowest power) are oriented at a right angle (90 degrees) to each other, and the refractive change between them is gradual and regular.\n- Irregular Astigmatism: The principal meridians are not perpendicular to each other, and the refractive change is irregular; it cannot be corrected by ordinary glasses (occurs in corneal scars and Keratoconus).',
    isClinical: false,
    topic: 'Astigmatism'
  },
  {
    id: 'refraction_astig_q2',
    chapterId: 7,
    type: 'short-answer',
    title: 'Astigmatism With vs. Against the Rule',
    content: 'Differentiate between "Astigmatism With the Rule" and "Astigmatism Against the Rule".',
    answer: '- Astigmatism With the Rule: The vertical meridian of the cornea is more curved and more powerful than the horizontal meridian (the vertical meridian is more myopic or less hypermetropic).\n- Astigmatism Against the Rule: The vertical meridian is less curved and less powerful than the horizontal meridian (the vertical meridian is less myopic or more hypermetropic).',
    isClinical: false,
    topic: 'Astigmatism'
  },
  {
    id: 'refraction_astig_q3',
    chapterId: 7,
    type: 'short-answer',
    title: 'Regular Astigmatism Five Subdivisions',
    content: 'Enumerate and define the five subdivisions of Regular Astigmatism.',
    answer: '1. Simple Myopic: One principal meridian is emmetropic, and the other (vertical) is myopic.\n2. Simple Hypermetropic: One principal meridian is emmetropic, and the other (horizontal) is hypermetropic.\n3. Compound Myopic: Both principal meridians are myopic, but to different degrees (vertical is more myopic).\n4. Compound Hypermetropic: Both principal meridians are hypermetropic, but to different degrees (horizontal is more hypermetropic).\n5. Mixed: One principal meridian focuses in front of the retina (myopic), and the other focuses behind the retina (hypermetropic).',
    isClinical: false,
    topic: 'Astigmatism'
  },
  {
    id: 'refraction_astig_q4',
    chapterId: 7,
    type: 'short-answer',
    title: 'Why Accommodation Cannot Compensate Astigmatism',
    content: 'Explain why Astigmatism cannot be corrected or compensated for by accommodation.',
    answer: 'Because accommodation is exerted simultaneously, symmetrically, and circumferentially across the entire lens. If the ciliary muscle contracts to correct the error of one meridian, it automatically increases the power of the perpendicular meridian by the same amount, which worsens its focus.',
    isClinical: true,
    topic: 'Astigmatism'
  },
  {
    id: 'refraction_astig_q5',
    chapterId: 7,
    type: 'short-answer',
    title: 'Astigmatism Clinical Diagnostic Signs',
    content: 'Describe the diagnostic signs found on a clinical exam for Astigmatism.',
    answer: '1. Visual Acuity: The patient notices the opening of Snellen\'s rings clearly in certain directions but blurred in others.\n2. Placido\'s Disc: Shows distorted, non-concentric circular reflections on the corneal surface.\n3. Ophthalmoscopy: The optic disc appears oval rather than round due to unequal dioptric power.\n4. Retinoscopy / Keratometry: Measures unequal dioptric values between the two principal meridians; shows a scissor reflex in irregular astigmatism.',
    isClinical: true,
    topic: 'Astigmatism'
  },
  {
    id: 'refraction_astig_q6',
    chapterId: 7,
    type: 'short-answer',
    title: 'Regular vs. Irregular Astigmatism Management',
    content: 'Outline the optical management of Regular versus Irregular Astigmatism.',
    answer: '- Regular Astigmatism: Corrected using cylindrical lenses (with the cylinder axis placed perpendicular to the meridian requiring correction) or sphero-cylindrical lenses for compound/mixed types. Toric soft contact lenses can also be used.\n- Irregular Astigmatism: Ordinary spectacle glasses fail; it must be managed using Rigid Gas Permeable (RGP) contact lenses to provide a uniform refracting surface, or via surgical procedures (PTK/Keratoplasty).',
    isClinical: false,
    topic: 'Astigmatism'
  },

  // --- Topic 4: Aphakia, Anisometropia & Presbyopia ---
  {
    id: 'refraction_aphakia_q1',
    chapterId: 7,
    type: 'short-answer',
    title: 'Aphakia Definition, Optical Problems & Signs',
    content: 'Define Aphakia, list its optical problems, and describe its classic clinical signs.',
    answer: 'Definition: The complete absence of the crystalline lens from the eye cavity.\n\nOptical Problems: High hypermetropia, total loss of accommodation, and significant against-the-rule astigmatism (due to surgical wound scar contraction).\n\nClinical Signs: Presence of a limbal/corneal surgical scar, absence of two of the three Purkinje-Sanson images, a deep anterior chamber, tremulous iris (Iridodonesis), and a jet-black pupil.',
    isClinical: true,
    topic: 'Aphakia, Anisometropia & Presbyopia'
  },
  {
    id: 'refraction_aphakia_q2',
    chapterId: 7,
    type: 'short-answer',
    title: 'Why Spectacles are Contraindicated in Unilateral Aphakia',
    content: 'Explain why glasses are strictly contraindicated in treating Unilateral Aphakia, and state the preferred alternatives.',
    answer: 'Why contraindicated: Because a highly powerful plus spectacle lens placed over the aphakic eye will cause a 30% magnification of its retinal image compared to the normal fellow eye. This creates severe aniseikonia (unequal image sizes), making binocular fusion impossible and resulting in constant diplopia.\n\nPreferred Alternatives: Implantation of a secondary Intraocular Lens (IOL) or fitting a contact lens, as they minimize image magnification.',
    isClinical: true,
    topic: 'Aphakia, Anisometropia & Presbyopia'
  },
  {
    id: 'refraction_aphakia_q3',
    chapterId: 7,
    type: 'short-answer',
    title: 'Anisometropia Definition, Clinical Types & Outcomes',
    content: 'Define Anisometropia, mention its three clinical types, and state its two main visual outcomes if untreated.',
    answer: 'Definition: A considerable difference in the refractive state between the two eyes, usually exceeding 4 diopters.\n\nTypes: Simple (one eye emmetropic, one ametropic), Compound (both eyes ametropic of the same type), and Mixed (one eye myopic, one hypermetropic).\n\nOutcomes:\n1. Alternating Vision: If one eye is myopic (used for near) and the other emmetropic (used for distance).\n2. Uniocular Vision: The highly ametropic eye is suppressed by the brain, leading to severe anisometropic amblyopia.',
    isClinical: true,
    topic: 'Aphakia, Anisometropia & Presbyopia'
  },
  {
    id: 'refraction_aphakia_q4',
    chapterId: 7,
    type: 'short-answer',
    title: 'Presbyopia Definition & Pathogenesis',
    content: 'Define Presbyopia and explain its underlying physiological pathogenesis.',
    answer: 'Definition: An age-related, physiological recession of the near point of the eye, making near vision and reading uncomfortable or difficult (typically manifests around 45 years of age).\n\nPathogenesis: Caused by a progressive, age-related loss of elasticity of the lens capsule and sclerosis of the lens substance, combined with a physiological decline in ciliary muscle power, which reduces the total amplitude of accommodation.',
    isClinical: false,
    topic: 'Aphakia, Anisometropia & Presbyopia'
  },
  {
    id: 'refraction_aphakia_q5',
    chapterId: 7,
    type: 'short-answer',
    title: 'Presbyopia Reading Spectacles Calculation',
    content: 'State the rules for calculating and prescribing near reading spectacles for a presbyopic patient.',
    answer: '1. Fully correct any pre-existing errors of refraction for distance (far vision) first.\n2. Measure the patient\'s near point while wearing their distance correction to calculate the total amplitude of accommodation (Amplitude = 100 / near point in cm).\n3. Keep 1/3 of this calculated amplitude of accommodation in reserve to prevent asthenopia and ensure comfort.\n4. Allow the patient to use the remaining 2/3 of their accommodation, and add a convex spherical plus lens to reach a total sum of 3 diopters (since the standard reading distance is 33 cm; 100/33 = 3 D).',
    isClinical: true,
    topic: 'Aphakia, Anisometropia & Presbyopia'
  },
  {
    id: 'refraction_aphakia_q6',
    chapterId: 7,
    type: 'short-answer',
    title: 'Presbyopia Closer Distance Prescription Calculation Case Study',
    content: 'A presbyopic patient came seeking glasses for near work. He sees 6/6 with a -1 D lens for Far vision. The near point with his far glasses was 33 cm, but according to his job, he needs to focus on objects at a closer distance of 20 cm. Calculate the required near reading glasses power for this patient.',
    answer: '1. Distance correction = -1.00 D.\n2. Near point with far glasses is 33 cm -> Total amplitude of accommodation = 100 / 33 = 3.00 D.\n3. Keep 1/3 of accommodation in reserve for comfort = 1/3 * 3 = 1.00 D.\n4. Allowed accommodation to be actively used = 3.00 - 1.00 = 2.00 D.\n5. The patient wants to work at 20 cm -> Refractive power needed for 20 cm = 100 / 20 = 5.00 D.\n6. Near lens addition required = Needed power (5.00 D) - Allowed accommodation (2.00 D) = +3.00 D.\n7. Final Near Reading Spectacle Prescription = Distance lens (-1.00 D) + Near Addition (+3.00 D) = +2.00 D spherical lens.',
    isClinical: true,
    topic: 'Aphakia, Anisometropia & Presbyopia'
  },

  // ===========================================================================
  // --- CHAPTER 8: GLAUCOMA ---
  // ===========================================================================

  // ===========================================================================
  // --- CHAPTER 8: GLAUCOMA ---
  // ===========================================================================

  // --- Topic 1: Anatomy & Physiology of the AC Angle & Aqueous Humor ---
  {
    id: 'glaucoma_anatomy_q1',
    chapterId: 8,
    type: 'short-answer',
    title: 'Anatomy of the Anterior Chamber Angle',
    content: 'Describe the anatomical boundaries, exam method, and gonioscopic structures of the anterior chamber angle.',
    answer: '1. Definition: The angle located between the periphery of the cornea and the root of the iris.\n\n2. Examination Method: It cannot be visualized by direct illumination due to total internal reflection. It requires Gonioscopy (e.g., using a Goldmann 3-mirror contact lens with a slit lamp).\n\n3. Gonioscopic Appearance (from anterior to posterior):\n   - Schwalbe\'s line: A white-opaque line representing the termination of Descemet\'s membrane.\n   - Trabecular Meshwork: A sponge-like band with holes extending from Schwalbe\'s line to the scleral spur, through which aqueous filters.\n   - Scleral Spur: A whitish ridge of sclera that serves as the origin point for the longitudinal fibers of the ciliary muscle.\n   - Anterior surface of ciliary body.\n   - Root of the iris.\n\n4. Structures NOT visualized on Gonioscopy:\n   - Canal of Schlemm (located inside the limbus).\n   - Aqueous veins (which drain from Schlemm\'s canal to episcleral veins).',
    isClinical: false,
    topic: 'Anatomy & Physiology of the AC Angle & Aqueous Humor'
  },
  {
    id: 'glaucoma_anatomy_q2',
    chapterId: 8,
    type: 'short-answer',
    title: 'Aqueous Humor Physiology & Circulation',
    content: 'Describe the properties, volume, secretion mechanism, physiological functions, and drainage pathways of the aqueous humor.',
    answer: '1. Properties & Volume: A clear, colorless, transparent fluid with a volume of around 1.25 ml filling the anterior and posterior chambers.\n\n2. Secretion Mechanism (by the ciliary body processes):\n   - Active secretion (80%): Mediated by the non-pigmented ciliary epithelium using the carbonic anhydrase enzyme system to actively transport ions.\n   - Passive secretion (20%): Occurs via ultrafiltration and diffusion dependent on capillary hydrostatic pressure in the ciliary body.\n\n3. Physiological Functions:\n   - Maintains and regulates the intraocular pressure (IOP).\n   - Provides nutrition and oxygen to avascular ocular structures (cornea, lens, anterior vitreous).\n   - Acts as an optical refractive medium (Refractive Index = 1.33).\n   - Carries high concentrations of antibodies during intraocular inflammation (forming plasmoid aqueous).\n\n4. Circulation & Drainage Flow:\n   - Secreted into the Posterior Chamber -> passes through the pupil -> enters the Anterior Chamber.\n   - Trabecular Outflow Route (80%): Passes through the Trabecular Meshwork (TM) -> Canal of Schlemm -> Collector Channels -> Aqueous veins -> Episcleral veins.\n   - Uveoscleral Outflow Route (20%): Passes across the ciliary body into the suprachoroidal space -> drains into the choroid and scleral vessels.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the AC Angle & Aqueous Humor'
  },
  {
    id: 'glaucoma_anatomy_q3',
    chapterId: 8,
    type: 'short-answer',
    title: 'Intraocular Pressure (IOP) & Devices',
    content: 'Define intraocular pressure (IOP), state its normal range, explain its diurnal variation, and list the methods of measurement.',
    answer: '1. IOP Definition: The pressure exerted by the intraocular contents on the coats of the eyeball; it is a major risk factor for glaucoma, with no single, absolute "safe" or "unsafe" threshold.\n\n2. Normal Range: Average is ~16 mmHg, with a standard deviation (SD) of 3 mmHg (giving a physiological range of 10-21 mmHg).\n\n3. Diurnal Variation: Fluctuates naturally throughout the day, usually highest in the morning and lowest in the evening. Normal variation is 2-3 mmHg. A diurnal variation exceeding 4-5 mmHg is highly suspicious of glaucoma. The rise during sleep is due to venous stagnation and lack of extraocular muscle massage.\n\n4. Measurement Methods (Tonometry):\n   - Indentation (Schiotz) Tonometry: Performed with the patient in a supine position. Measures the depth of indentation made on the cornea by a plunger. Disadvantage: Influenced by ocular/scleral rigidity (underestimates IOP in low rigidity eyes like high myopes).\n   - Applanation (Goldmann) Tonometry: The gold standard. Measures the force required to flatten (applanate) a fixed area of the cornea (3.06 mm diameter). Does not depend heavily on scleral rigidity.\n   - Non-contact (Air puff) Tonometry: Uses a rapid puff of air to applanate the cornea; completely noninvasive.\n   - Icare rebound tonometry: Does not require topical anesthetics.',
    isClinical: true,
    topic: 'Anatomy & Physiology of the AC Angle & Aqueous Humor'
  },
  {
    id: 'glaucoma_anatomy_q4',
    chapterId: 8,
    type: 'short-answer',
    title: 'Optic Nerve Head (ONH) Relevance in Glaucoma',
    content: 'Describe the anatomy of the normal optic nerve head and its structural relevance in glaucomatous damage.',
    answer: '1. General Anatomy: Composed of about 1.2 million retinal ganglion cell axons passing through the posterior scleral canal (lamina cribrosa).\n\n2. Optic Disc Details: Measures ~1.5 mm in diameter, appears as a pale pink disc with a clearly defined margin. It features a central white depression called the physiological cup (normal Cup-to-Disc [C/D] ratio is ~0.3).\n\n3. Neuroretinal Rim: The healthy pink area representing the nerve fibers located between the edge of the cup and the outer edge of the disc.\n\n4. Pathological Relevance: In glaucoma, chronically elevated IOP or ischemia triggers progressive retinal ganglion cell death. This causes thinning of the neuroretinal rim, vertical elongation of the cup, bayoneting of blood vessels, and progressive cupping that corresponds directly to characteristic visual field defects.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the AC Angle & Aqueous Humor'
  },
  {
    id: 'glaucoma_anatomy_q5',
    chapterId: 8,
    type: 'short-answer',
    title: 'Glaucoma Definition & General Classification',
    content: 'Define Glaucoma and outline its main classifications.',
    answer: '1. Definition: A progressive, chronic optic neuropathy characterized by progressive excavation/cupping of the optic nerve head and corresponding visual field defects, where elevated intraocular pressure (IOP) is the major modifiable risk factor.\n\n2. General Classification:\n   - Congenital / Developmental Glaucoma: Manifests at birth or in early childhood due to developmental angle anomalies.\n   - Acquired Glaucoma: Subdivided into:\n     * Primary Glaucomas (no pre-existing ocular disease): Primary Open-Angle Glaucoma (POAG) or Primary Angle-Closure Glaucoma (PACG).\n     * Secondary Glaucomas (secondary to local ocular or systemic diseases): Can be open-angle or closed-angle.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the AC Angle & Aqueous Humor'
  },

  // --- Topic 2: Congenital Glaucoma (Buphthalmos) ---
  {
    id: 'glaucoma_congenital_q1',
    chapterId: 8,
    type: 'short-answer',
    title: 'Congenital Glaucoma Definition & Etiology',
    content: 'Define Congenital Glaucoma and describe its primary underlying trabeculo-dysgenesis etiology.',
    answer: 'Definition: An increase in intraocular pressure (IOP) manifesting at birth or early infancy that results in damage to the optic nerve.\n\nEtiology (Trabeculo-dysgenesis):\nCongenital anomalies in the angle of the anterior chamber, including:\n1. Failure of complete separation of the iris from the cornea due to deficient mesodermal atrophy (incomplete recess formation).\n2. Abnormal anterior insertion of the iris or the longitudinal bundle of the ciliary muscle into the trabecular meshwork.\n3. Complete absence or fibrosis of the canal of Schlemm.',
    isClinical: false,
    topic: 'Congenital Glaucoma (Buphthalmos)'
  },
  {
    id: 'glaucoma_congenital_q1b',
    chapterId: 8,
    type: 'short-answer',
    title: 'Congenital Glaucoma Types & Syndromic Associations',
    content: 'Enumerate the clinical classifications/types of congenital/developmental glaucoma and list the ocular and systemic conditions associated with secondary infantile glaucoma.',
    answer: '1. Clinical Classification:\n   - Primary Congenital (Infantile) Glaucoma: Due to isolated trabeculodysgenesis. Symptoms typically manifest from birth up to 1 year of age.\n   - Developmental Glaucoma with Associated Anomalies (Secondary Infantile Glaucoma).\n\n2. Secondary Infantile Glaucoma Associations:\n   - Ocular Anomalies: Microphthalmos, Aniridia (absent iris), Ectopia lentis, Persistent Hyperplastic Primary Vitreous (PHPV), Retinopathy of Prematurity (ROP), and developmental uveitis.\n   - Systemic & Metabolic Syndromes: Sturge-Weber Syndrome (encephalotrigeminal angiomatosis), Marfan Syndrome, Congenital Rubella Syndrome, and Mucopolysaccharidosis (metabolic lysosomal storage disease).\n   - Traumatic, Inflammatory, or Neoplastic processes in early childhood.',
    isClinical: true,
    topic: 'Congenital Glaucoma (Buphthalmos)'
  },
  {
    id: 'glaucoma_congenital_q2',
    chapterId: 8,
    type: 'short-answer',
    title: 'Buphthalmos Clinical Triad',
    content: 'Enumerate the classic clinical triad of symptoms in Buphthalmos and explain their physiological cause.',
    answer: 'Triad: Lacrimation, Photophobia, and Blepharospasm.\n\nPhysiological cause: Triggered by mechanical stretching of the corneal ciliary nerves due to high IOP and localized corneal edema.',
    isClinical: true,
    topic: 'Congenital Glaucoma (Buphthalmos)'
  },
  {
    id: 'glaucoma_congenital_q3',
    chapterId: 8,
    type: 'short-answer',
    title: 'Advanced Buphthalmos Clinical Signs',
    content: 'Describe the clinical signs found on examination of a child with advanced Buphthalmos.',
    answer: '1. Cornea (3 signs): Corneal edema, corneal enlargement (diameter >12 mm), and corneal opacity due to tears in Descemet\'s membrane (Haab\'s striae).\n2. Eyeball: Enlargement of the entire globe (buphthalmos / ox-eye) due to stretching of the thin, elastic outer coats under high pressure before age 3.\n3. Sclera: Appears bluish in color due to thinning of the sclera, exposing the underlying dark uveal pigment.\n4. Anterior Chamber: Markedly deep anterior chamber (due to backward displacement of iris-lens diaphragm).\n5. Iris & Pupil: Tremulous iris (iridodonesis) and iris atrophy; large, sluggishly reacting pupil; lens may show mild subluxation due to stretched zonules.\n6. Optic Disc: Glaucomatous optic cupping (a late sign showing progressive excavation).\n7. Refraction: Axial myopia due to globe elongation (partially balanced by corneal flattening).\n8. Gonioscopy: Shows flat iris insertion and complete absence of the angle recess.',
    isClinical: true,
    topic: 'Congenital Glaucoma (Buphthalmos)'
  },
  {
    id: 'glaucoma_congenital_q4',
    chapterId: 8,
    type: 'short-answer',
    title: 'Buphthalmos Differential Diagnosis',
    content: 'Enumerate the differential diagnosis of Buphthalmos regarding a large cornea versus a cloudy cornea.',
    answer: '- Large Cornea DD: Megalocornea (isolated corneal enlargement with normal IOP and no optic nerve damage), High axial myopia, and Keratoglobus.\n- Cloudy Cornea DD: Birth trauma (forceps injury tearing Descemet\'s membrane), metabolic disorders (mucopolysaccharidosis), and congenital Rubella syndrome with keratitis.\n- Other DD: Secondary infantile glaucoma causes (phacolytic, uveitic, traumatic, neoplastic like retinoblastoma).',
    isClinical: true,
    topic: 'Congenital Glaucoma (Buphthalmos)'
  },
  {
    id: 'glaucoma_congenital_q5',
    chapterId: 8,
    type: 'short-answer',
    title: 'Buphthalmos Diagnostic & Surgical Guidelines',
    content: 'Outline the diagnostic workflow under General Anesthesia (GA) and the definitive surgical guidelines for Buphthalmos based on corneal diameter.',
    answer: 'Diagnostic Workflow: Measurement of corneal diameter (suspicious if >11 mm), Gonioscopy (using a Koeppe lens or Goldmann lens), and direct measurement of IOP.\n\nSurgical Guidelines (Always Surgical - Earlier is Better):\n* Medical therapy (Diamox or topical Beta-blockers) is used only preoperatively to temporarily reduce IOP and clear corneal edema to aid visualization.\n* If corneal diameter is <13 mm and the cornea is clear: Plan for Goniotomy (surgical splitting of the abnormal meshwork from the inside).\n* If corneal diameter is <13 mm but the cornea is completely hazy/opaque: Plan for Trabeculotomy (external approach to probe and tear open the meshwork into the AC).\n* If corneal diameter is >13 mm or previous direct angle surgeries failed: Plan for Subscleral Trabeculectomy, Valve (Ahmed) Implantation, or Cyclodestructive procedures (for advanced blind eyes).',
    isClinical: true,
    topic: 'Congenital Glaucoma (Buphthalmos)'
  },
  {
    id: 'glaucoma_congenital_q6',
    chapterId: 8,
    type: 'short-answer',
    title: 'Primary Congenital Glaucoma Signs & Surgery',
    content: 'Regarding Primary Congenital Glaucoma (Buphthalmos):\n1. Name two diagnostic corneal signs seen in this disease.\n2. Name the definitive surgical procedure used for treatment when the corneal diameter exceeds 13 mm.',
    answer: '1. Two Corneal Signs: Corneal enlargement (diameter >12 mm) and Haab\'s striae (horizontal/curved tears in Descemet\'s membrane).\n\n2. Surgical Procedure if diameter >13 mm: Subscleral Trabeculectomy or Valve (Seton) Implantation (since the canal of Schlemm is usually absent or fibrosed at this size block and goniotomy is ineffective).',
    isClinical: true,
    topic: 'Congenital Glaucoma (Buphthalmos)'
  },

  // --- Topic 3: Primary Open-Angle Glaucoma (POAG) ---
  {
    id: 'glaucoma_poag_q1',
    chapterId: 8,
    type: 'short-answer',
    title: 'POAG Definition, Incidence, Risk Factors & Etiology',
    content: 'Define Primary Open-Angle Glaucoma (POAG), state its incidence, its primary risk factors, and describe its pathophysiological etiology.',
    answer: '1. Definition: A bilateral, asymmetrical, non-congestive progressive optic neuropathy characterized by chronic elevation of IOP in the presence of an anatomically open anterior chamber angle, leading to optic nerve head damage and characteristic visual field defects.\n\n2. Incidence: Commonly affects adults over 50 years of age, affecting males and females equally. It is strictly bilateral, though one eye usually precedes the other.\n\n3. Risk Factors:\n   - Positive family history of glaucoma.\n   - Darker races (incidence is 4x higher and occurs earlier in black populations).\n   - Ocular factors: High axial myopia, Central Retinal Vein Occlusion (CRVO), ocular hypertension.\n   - Systemic factors: Diabetes Mellitus, migraine/vasospasm, and prolonged topical steroid use.\n\n4. Pathophysiological Etiology: Age-related sclerosis and degeneration of the Trabecular Meshwork (TM), resulting in narrowed Fontana spaces. This markedly reduces the facility of aqueous outflow, elevating intraocular pressure.',
    isClinical: false,
    topic: 'Primary Open-Angle Glaucoma (POAG)'
  },
  {
    id: 'glaucoma_poag_q2',
    chapterId: 8,
    type: 'short-answer',
    title: 'POAG Symptoms & "Thief of Sight" Concept',
    content: 'Describe the clinical symptoms of POAG and explain why it is clinically designated as the "Thief of Sight".',
    answer: '1. Symptoms:\n   - Usually completely asymptomatic in early stages. It presents with no pain and no signs of ocular congestion.\n   - Mild non-specific symptoms may occur: Dull headache, early-onset presbyopia (due to high IOP compressing the ciliary nerves), night blindness (due to early peripheral rod-damaged field loss), or progressive loss of peripheral field in one eye.\n\n2. "Thief of Sight" Concept:\n   Since the visual acuity remains excellent (6/6) and central vision is spared until the very final end-stages, patients are completely unaware of their progressive, irreversible outer field loss. Often, they only notice the disease when absolute tunnel vision or complete blindness in one eye occurs.',
    isClinical: true,
    topic: 'Primary Open-Angle Glaucoma (POAG)'
  },
  {
    id: 'glaucoma_poag_q3',
    chapterId: 8,
    type: 'short-answer',
    title: 'POAG Clinical Signs (IOP, ONH, Visual Fields)',
    content: 'Detail the clinical signs of POAG, categorizing them into Intraocular Pressure, Optic Nerve Head Cupping, and Visual Field Changes.',
    answer: '1. Elevated IOP:\n   - Elevated IOP >21 mmHg with an open angle on gonioscopy. A high IOP is typical, but a normal IOP does not exclude "low-tension" or "normal-tension" glaucoma.\n\n2. Glaucomatous ONH Cupping:\n   - Early Signs: Cup-to-Disc (C/D) ratio >0.4, vertical elongation of the cup (due to early loss of superior/inferior rim fibers), asymmetry of C/D ratio between eyes >0.2, splinter/flame-shaped hemorrhages at the disc margin, and visible holes in the lamina cribrosa.\n   - Late Signs: Extremely deep cupping (C/D >0.7) extending to the disc margin, overhanging edge of the cup, and vessel interruption (nasal shift or "bayoneting sign" where blood vessels bend sharply over the edge).\n\n3. Visual Field Changes (correlate with rim damage):\n   - Central Changes: Paracentral scotoma, Seidel\'s scotoma (comma-shaped scotoma), Arcuate / Bjerrum scotoma (continuous arch of loss connecting blind spot to nasal meridian), and nasal step.\n   - Peripheral Changes: Nasal contraction of the field, progressing to concentric contraction, eventually resulting in a narrow tubular field (tunnel vision). The central macula is spared until the very late stages.',
    isClinical: true,
    topic: 'Primary Open-Angle Glaucoma (POAG)'
  },
  {
    id: 'glaucoma_poag_q3b',
    chapterId: 8,
    type: 'short-answer',
    title: 'POAG Confirmatory Diagnostic Elements',
    content: 'How is POAG definitively diagnosed? Enumerate the key confirmatory elements.',
    answer: 'Definitive diagnosis requires a combination of:\n1. Sustained high IOP: Tested with Applanation (Goldmann) tonometry, checking diurnal variation (diurnal fluctuation >4 mmHg is highly suggestive of pathology), and adjusting for Central Corneal Thickness (CCT). Tonography may show reduced facility of outflow.\n2. Open Angle on Gonioscopy: Confirms the presence of a completely open, unobstructed anterior chamber angle (ruling out angle closure).\n3. Glaucomatous Optic Cupping: Documented via direct/indirect ophthalmoscopy, slit-lamp biomicroscopy, and Optical Coherence Tomography (OCT) of the retinal nerve fiber layer (RNFL).\n4. Characteristic Visual Field Defects: Measured using Automated Perimetry (e.g., Humphrey Field Analyzer).',
    isClinical: true,
    topic: 'Primary Open-Angle Glaucoma (POAG)'
  },
  {
    id: 'glaucoma_poag_q4',
    chapterId: 8,
    type: 'short-answer',
    title: 'POAG Medical Treatment Guidelines',
    content: 'Outline the life-long topical medical lines of treatment for POAG, specifying their mechanisms of action.',
    answer: 'General Principle: Medical treatment is lifelong, aimed at lowering the IOP to a "target pressure" where no further optic nerve damage occurs.\n\n1. First-Line Topical Therapy:\n   - Beta-blockers (e.g., Timolol 0.5%): Decrease aqueous humor secretion/formation by the non-pigmented ciliary epithelium.\n   - Prostaglandin analogues (e.g., Latanoprost, Travoprost): Facilitate and increase uveoscleral aqueous outflow. Highly preferred due to once-daily dosing.\n\n2. Second-Line Adjuvant Topical Therapy:\n   - Carbonic Anhydrase Inhibitors (CAIs) (e.g., Dorzolamide): Decrease aqueous humor formation/secretion.\n   - Alpha-2 Adrenergic Agonists (e.g., Brimonidine): Dual mechanism: decreases aqueous formation and increases uveoscleral outflow.\n\n3. Emergency Systemic Adjuvants:\n   - Systemic CAIs (Acetazolamide/Diamox tablets or IV): Used only temporarily as an emergency measure to control acute spikes.',
    isClinical: true,
    topic: 'Primary Open-Angle Glaucoma (POAG)'
  },
  {
    id: 'glaucoma_poag_q5',
    chapterId: 8,
    type: 'short-answer',
    title: 'POAG Surgical & Laser Indications',
    content: 'List the clinical indications and surgical options for POAG when medical therapy fails.',
    answer: '1. Indications for intervention:\n   - Failure of maximally tolerated medical therapy to control IOP.\n   - Progressive deterioration of visual fields or optic disc cupping despite apparently "controlled" IOP.\n   - Poor patient compliance due to poverty, negligence, or drug side effects.\n\n2. Laser Options:\n   - Laser Trabeculoplasty (Argon or Selective Laser Trabeculoplasty [SLT]): Applying laser energy to the trabecular meshwork to stimulate remodeling and increase aqueous outflow. Best for early, moderate POAG.\n\n3. Surgical Options:\n   - Subscleral Trabeculectomy: The standard filtering surgery. Creates a guarded sclerostomy channel allowing aqueous to drain from the AC to the subconjunctival space (forming a filtering bleb). Mitomycin C (MMC) may be used to prevent scarring.\n   - Drainage Setons / Valves (e.g., Ahmed Valve): Implantation of a silicone tube into the AC connected to an equatorial plate to drain aqueous; reserved for refractory or previously failed cases.\n   - Cyclodestructive Procedures (e.g., Laser Cyclophotocoagulation or Cyclocryotherapy): Selectively destroys parts of the ciliary processes to permanently reduce aqueous production; reserved for blind, painful advanced eyes.',
    isClinical: true,
    topic: 'Primary Open-Angle Glaucoma (POAG)'
  },

  // --- Topic 4: Primary Angle-Closure Glaucoma (PACG) ---
  {
    id: 'glaucoma_pacg_q1',
    chapterId: 8,
    type: 'short-answer',
    title: 'PACG Predispositions, Pathogenesis & Mechanisms',
    content: 'Detail the incidence, predisposing factors, and dual pathophysiological mechanisms of Primary Angle-Closure Glaucoma (PACG).',
    answer: '1. Incidence: Usually bilateral (one eye precedes), more common in females over 40 (often of a hyper-sensible/neurotic personality status).\n\n2. Predisposing Factors:\n   - Mydriasis: Moderate pupillary dilatation causes peripheral iris crowding, pushing the iris root into the narrow angle.\n   - Hypermetropia: Small eyeball dimensions, short axial length, shallow AC, and narrow AC angle.\n   - Old Age: Continuous physiological growth and thickening of the crystalline lens shifts the iris-lens diaphragm forward, further narrowing the AC.\n\n3. Underlving Pathophysiological Mechanisms:\n   - Pupillary Block Mechanism (Most Common): Relative contact between the pupillary margin of the iris and the anterior lens surface blocks aqueous passage from the posterior chamber to the AC. This increases posterior chamber pressure, bulging the peripheral iris forward (Iris Bombe) and mechanically sealing the trabecular angle.\n   - Plateau Iris Configuration: The ciliary body processes are positioned abnormally far forward, crowding and pushing the peripheral iris into direct contact with the trabecular meshwork without a significant pupillary block.',
    isClinical: false,
    topic: 'Primary Angle-Closure Glaucoma (PACG)'
  },
  {
    id: 'glaucoma_pacg_q2',
    chapterId: 8,
    type: 'short-answer',
    title: 'PACG Stages and Clinical Progression',
    content: 'List the five major clinical stages of PACG and describe their key clinical features.',
    answer: 'PACG develops along five distinct clinical stages:\n\n1. Latent Stage:\n   - Completely asymptomatic.\n   - Shallow anterior chamber, narrow AC angle (Shaffer Grade 1 or 2 on gonioscopy).\n   - Definitively managed with prophylactic Laser Peripheral Iridotomy (LPI).\n\n2. Intermittent / Prodromal Stage:\n   - Rapid, partial, completely reversible closure of the angle resolving spontaneously.\n   - Symptoms: Transient unilateral blurred/foggy vision, seeing rainbow-colored haloes around lights (due to corneal epithelial edema), mild dull headache, and eye ache; resolving spontaneously in 1-2 hours in bright light.\n\n3. Acute Congestive Stage:\n   - Sudden, total, irreversible closure of the angle with an acute massive IOP spike (50-60 mmHg).\n   - Symptoms: Excruciating ocular pain, severe headache, rapid drop in vision, ciliary congestion, nausea, and vomiting.\n\n4. Chronic Stage:\n   - Follows unresolved or recurrent attacks where parts of the angle become permanently closed by Peripheral Anterior Synechiae (PAS).\n   - Clinically mimics POAG with a moderate, constant elevation of IOP and progressive cupping/fields loss, but with closed angle zones on gonioscopy.\n\n5. Absolute Stage:\n   - End-stage glaucoma.\n   - Clinically characterized by a completely blind eye (No Perception of Light [No PL]), stony hard eyeball on digital tension, deep cupping, and corneal staphyloma, rubeosis iridis, or corneal pannus.',
    isClinical: true,
    topic: 'Primary Angle-Closure Glaucoma (PACG)'
  },
  {
    id: 'glaucoma_pacg_q3',
    chapterId: 8,
    type: 'short-answer',
    title: 'PACG Provocative Tests & Intermittent Management',
    content: 'Detail the diagnostic provocative tests and the clinical management approach for the Intermittent (Prodromal) stage of PACG.',
    answer: '1. Provocative Diagnostic Tests (Used to confirm angle-closure susceptibility in a clinic in suspected patients):\n   - Darkroom Test: Place the patient in a dark room for 1 hour while awake (mydriasis without sleeping).\n   - Prone Test: Applanation tonometry performed after laying face-down for 1 hour (shifts lens-iris diaphragm forward).\n   - Darkroom-Prone Test: Most sensitive. Combine both methods.\n   * Positive Result: A post-test IOP rise of 8 mmHg or more suggests narrow-angle closure susceptibility.\n\n2. Management of Intermittent Phase:\n   - During the prodromal attack: Immediately administer a weak miotic (Pilocarpine 2% to the affected eye to pull iris away from the angle, and Pilocarpine 1% to the contralateral fellow eye as a prophylactic measure).\n   - Definitive Treatment: Bilateral ND:YAG Laser Peripheral Iridotomy (LPI) or surgical Peripheral Iridectomy to construct a bypass channel between the posterior and anterior chambers, permanently resolving the pupillary block. Mydriatic drops (Atropine) are strictly contraindicated.',
    isClinical: true,
    topic: 'Primary Angle-Closure Glaucoma (PACG)'
  },
  {
    id: 'glaucoma_pacg_q4',
    chapterId: 8,
    type: 'short-answer',
    title: 'PACG Acute Attack Clinical Signs',
    content: 'What are the classic clinical symptoms and examination signs of an Acute Congestive Attack of Angle-Closure Glaucoma?',
    answer: '1. Symptoms:\n   - Excruciating, unbearable periocular pain and radiating ipsilateral frontal headache.\n   - Sudden, profound drop in vision (down to hand movements or light perception only).\n   - Systemic autonomic symptoms: Nausea, projectile vomiting, abdominal pain, and bradycardia (often misdiagnosed as an acute abdominal emergency).\n\n2. Signs on Slit-Lamp Examination:\n   - Eyelid: Severe lid edema.\n   - Conjunctiva: Marked circumcorneal ciliary injection (CCCI).\n   - Cornea: Hazy, opaque, and dull cornea due to severe microcystic epithelial edema from pressure.\n   - Anterior Chamber: Obliterated, extremely shallow AC with peripheral iridocorneal touch, and aqueous flare with cells.\n   - Iris & Pupil: Single or multiple areas of iris bombé. Pupil is fixed, mid-dilated, and vertically oval, completely non-reactive to light, showing a dull greenish-bluish reflex.\n   - IOP: Stony hard digital tension, with a measured applanation IOP spike reaching 50 to 80 mmHg.',
    isClinical: true,
    topic: 'Primary Angle-Closure Glaucoma (PACG)'
  },
  {
    id: 'glaucoma_pacg_q5',
    chapterId: 8,
    type: 'short-answer',
    title: 'PACG Acute Attack Emergency Treatment Protocol',
    content: 'Detail the comprehensive emergency medical and surgical treatment protocol for an Acute Congestive Attack of PACG.',
    answer: 'An acute angle-closure attack is a sight-threatening ophthalmic emergency requiring a two-phased medical and surgical treatment protocol:\n\n1. Immediate Emergency Medical Therapy (to break the block and rapidly lower IOP):\n   - Strict Hospitalization.\n   - Systemic Sedative: Administer systemic sedatives to relieve pain and anxiety.\n   - Intravenous Hyperosmotic: 20% Mannitol (infuse IV over 30-45 minutes; draws fluid osmotically from the vitreous cavity).\n   - Systemic CAI: Intravenous or oral Acetazolamide (Diamox 500 mg) to instantly reduce aqueous production.\n   - Topical Medications: Topical Beta-blockers (Timolol 0.5%) and topical Alpha-2 agonists (Brimonidine).\n   - Topical Miotics: Pilocarpine 2% drops are instilled frequently (every 15 min for 4 doses). (Note: Pilocarpine is ineffective initially when IOP is >40 mmHg due to ischemia of the sphincter pupillae; it must be used after IOP drops below 40 mmHg to drag the iris root away from the angle).\n\n2. Definitive Surgical/Laser Therapy (once the cornea clears and IOP drops):\n   - Gonioscopy-guided intervention:\n     * If the angle reopened: Plan Laser Peripheral Iridotomy (LPI) or surgical peripheral iridectomy.\n     * If the angle remains closed by permanent Peripheral Anterior Synechiae (PAS): Plan a filtration procedure (Trabeculectomy).\n   - Prophylactic Therapy: Prophylactic Laser Iridotomy MUST be performed on the contralateral, healthy fellow eye as it has an extremely high risk of experiencing a similar acute attack.',
    isClinical: true,
    topic: 'Primary Angle-Closure Glaucoma (PACG)'
  },
  {
    id: 'glaucoma_pacg_q6',
    chapterId: 8,
    type: 'short-answer',
    title: 'PACG Management Across All Clinical Stages',
    content: 'Outline the surgical and medical management of PACG patients depending on their clinical stage.',
    answer: 'The management approach is customized based on the active Stage of PACG:\n\n1. Latent Stage:\n   - Prophylactic Nd:YAG Laser Peripheral Iridotomy (LPI) to BOTH eyes.\n\n2. Intermittent / Prodromal Stage:\n   - Bilateral Laser Peripheral Iridotomy (LPI).\n\n3. Acute Congestive Stage:\n   - Intensive medical emergency lowering of IOP -> followed by LPI (if open) or Trabeculectomy (if closed by permanent PAS). Prophylactic LPI is mandatory for the fellow eye.\n\n4. Chronic Stage:\n   - Managed with medical therapy and filtering surgery (Trabeculectomy with Mitomycin C). Prophylactic LPI to the other eye.\n\n5. Absolute Stage (Complete Blindness + Pain Control):\n   - Control intractable pain via: topical cycloplegics/steroids, medical anti-glaucoma drugs, retrobulbar alcohol injections (blocks the ciliary ganglion), cyclodestructive procedures (laser cyclophotocoagulation), or surgical Enucleation of the blind eye if pain remains completely uncontrollable.',
    isClinical: true,
    topic: 'Primary Angle-Closure Glaucoma (PACG)'
  },

  // --- Topic 5: Secondary Glaucomas ---
  {
    id: 'glaucoma_secondary_q1',
    chapterId: 8,
    type: 'short-answer',
    title: 'Neovascular Glaucoma Pathogenesis & Management',
    content: 'Define Neovascular Glaucoma (100 Days Glaucoma), explain its underlying ischemic pathogenesis, and state its management.',
    answer: 'Definition: A severe form of secondary glaucoma caused by advanced retinal ischemia, commonly complicating Central Retinal Vein Occlusion (CRVO) or Proliferative Diabetic Retinopathy (PDR).\n\nPathogenesis: Low-grade retinal ischemia releases vascular endothelial growth factors (VEGF), triggering neovascularization on the iris surface (Rubeosis Iridis) and fibrovascular tissue growth across the anterior chamber angle, completely fibro-occluding the trabecular spaces.\n\nManagement: Medical therapy (Beta-blockers, CAIs, and topical steroids; miotics are contraindicated as they worsen inflammation). Retinal ablation via Panretinal Photocoagulation (PRP) or intravitreal Anti-VEGF injections is required; advanced cases necessitate a filtering valve or a cyclodestructive procedure.',
    isClinical: true,
    topic: 'Secondary Glaucomas'
  },
  {
    id: 'glaucoma_secondary_q2',
    chapterId: 8,
    type: 'short-answer',
    title: 'Phacomorphic vs. Phacolytic Glaucoma',
    content: 'Differentiate between Phacomorphic Glaucoma and Phacolytic Glaucoma regarding pathogenesis and definitive treatment.',
    answer: '- Phacomorphic Glaucoma: Secondary mechanical angle-closure glaucoma. Pathogenesis is driven by a rapidly swelling, hydrated Intumescent cataract that pushes the iris anteriorly, creating a secondary pupillary block and narrowing the angle. Treatment is urgent medical lowering of IOP followed by Cataract Extraction.\n- Phacolytic Glaucoma: Secondary open-angle glaucoma. Pathogenesis is driven by a mature or hypermature cataract leaking liquefied lens proteins through an intact capsule into the anterior chamber. Macrophages phagocytose these proteins and completely block the open trabecular meshwork. Treatment is urgent medical control of pressure followed by Cataract Extraction.',
    isClinical: true,
    topic: 'Secondary Glaucomas'
  },
  {
    id: 'glaucoma_secondary_q3',
    chapterId: 8,
    type: 'short-answer',
    title: 'Lens Particle vs. Angle Recession Glaucoma',
    content: 'Define Lens Particle Glaucoma and Angle Recession Glaucoma.',
    answer: '- Lens Particle Glaucoma: Secondary open-angle glaucoma caused by a perforating or traumatic rupture of the anterior lens capsule, which liberates free cortical lens particles directly into the anterior chamber, mechanically plugging the trabecular meshwork.\n- Angle Recession Glaucoma: Secondary open-angle glaucoma caused by a blunt ocular trauma that tears the ciliary body tissue from its attachment at the scleral spur, leading to localized trabecular meshwork scarring and subsequent delayed pressure elevation.',
    isClinical: true,
    topic: 'Secondary Glaucomas'
  },
  {
    id: 'glaucoma_secondary_q3b',
    chapterId: 8,
    type: 'short-answer',
    title: 'Secondary Glaucomas (Local vs. Systemic Causes)',
    content: 'Define secondary glaucoma and enumerate its key local and systemic etiology.',
    answer: 'Definition: An elevation of intraocular pressure causing optic nerve damage and fields loss, secondary to pre-existing ocular or systemic diseases.\n\n1. Systemic Causes:\n   - Chronic rise of episcleral venous pressure: E.g., Superior Vena Cava (SVC) obstruction or carotid-cavernous fistula.\n\n2. Local / Ocular Causes:\n   - Cornea: Severe corneal ulcers with deep AC inflammation or posterior synechiae.\n   - Iris & Ciliary Body (Uveitis): Exudates blocking the TM, or 360-degree posterior synechiae (seclusio pupillae) causing secondary pupillary block.\n   - Crystalline Lens:\n     * Phacomorphic (intumescent swollen lens causing angle closure).\n     * Phacolytic (leaking proteins from hypermature cataracts blocking the open angle).\n     * Pupillary block due to lens subluxation/dislocation.\n   - Hemorrhagic block: Massive traumatic hyphema (red blood cells blocking TM), or ghost-cell glaucoma following vitreous hemorrhage.\n   - Retinal/Vascular: CRVO or PDR releasing VEGF, causing rubeosis iridis and Neovascular Glaucoma.\n   - Trauma: Angle recession scarring.\n   - Intraocular Tumors: Melanoma or retinoblastoma mechanically compression or invading the angle.\n   - Corticosteroids: Steroid-induced glaucoma (decreases TM permeability).',
    isClinical: true,
    topic: 'Secondary Glaucomas'
  },
  {
    id: 'glaucoma_secondary_q4',
    chapterId: 8,
    type: 'short-answer',
    title: 'Systemic CAIs Side Effects',
    content: 'Enumerate five systemic or local side effects of systemic Carbonic Anhydrase Inhibitors (Acetazolamide/Diamox).',
    answer: '1. Systemic paresthesia (numbness and tingling sensation in the fingers, hands, and toes).\n2. General malaise, chronic fatigue, and depression.\n3. Gastrointestinal (GIT) irritation, nausea, and abdominal cramps.\n4. Renal stone formation.\n5. Electrolyte imbalance (hypokalemia; requires potassium supplementation).',
    isClinical: true,
    topic: 'Secondary Glaucomas'
  },

  // --- Topic 6: Glaucoma Diagnosis & Evaluation ---
  {
    id: 'glaucoma_diagnosis_general_q1',
    chapterId: 8,
    type: 'short-answer',
    title: 'General Clinical Diagnostic Parameters for Glaucoma',
    content: 'How is Glaucoma diagnosed in a general clinical context? Enumerate the four key diagnostic pillars.',
    answer: 'Definitive diagnosis and monitoring of glaucoma require evaluating four primary clinical pillars:\n\n1. Measurement of Intraocular Pressure (IOP):\n   - Performed via Applanation (Goldmann) tonometry, combined with checking diurnal variation patterns and adjusting for Central Corneal Thickness (CCT) via pachymetry.\n\n2. Evaluation of the Optic Nerve Head (ONH) & Retinal Nerve Fiber Layer (RNFL):\n   - Assessed by direct/indirect ophthalmoscopy, slit-lamp biomicroscopy, and Optical Coherence Tomography (OCT) to inspect the neuroretinal rim, C/D ratio, and early vertical thinning.\n\n3. Functional Assessment of Visual Fields (Perimetry):\n   - Standard Automated Perimetry (such as Humphrey Visual Fields) is conducted to identify and map central/peripheral scotomas (paracentral, Seidel, arcuate scotomas, nasal steps, and tubular fields).\n\n4. Examination of the Anterior Chamber Angle (Gonioscopy):\n   - Direct view using gonioscopic contact lenses to classify the disease as open-angle or closed-angle, and visualizes structures to rule out secondary etiology (like neovascularization, pigment dispersion, or angle recession).',
    isClinical: true,
    topic: 'Glaucoma Diagnosis & Evaluation'
  },

  // ===========================================================================
  // --- CHAPTER 9: UVEITIS ---
  // ===========================================================================

  // --- Topic 1: Anterior Uveitis (Iridocyclitis) ---
  {
    id: 'uveitis_anterior_q1',
    chapterId: 9,
    type: 'short-answer',
    title: 'Iridocyclitis Definition, Symptoms & Visual Loss Causes',
    content: 'Define Iridocyclitis and list its commonest symptoms and the specific causes of vision drop in an acute attack.',
    answer: 'Definition: Acute or chronic inflammation of the iris and ciliary body tissue.\n\nSymptoms: Severe ocular pain, marked photophobia, lacrimation, and drop of vision.\n\nCauses of drop of vision:\n1. Turbidity of the aqueous humor (aqueous flare and cells).\n2. Induced ciliary and pupillary muscle spasm (causing temporary myopia).\n3. Toxic Maculopathy (Cystoid Macular Edema).\n4. Secondary glaucoma.',
    isClinical: true,
    topic: 'Anterior Uveitis (Iridocyclitis)'
  },
  {
    id: 'uveitis_anterior_q2',
    chapterId: 9,
    type: 'short-answer',
    title: 'Acute Anterior Uveitis Clinical Signs',
    content: 'Enumerate the clinical signs found on examination of a patient with Acute Anterior Uveitis.',
    answer: '1. Circumcorneal ciliary injection (CCCI).\n2. Keratic Precipitates (KPs): Inflammatory cells deposited on the corneal endothelium (graded as small, medium, or large/mutton-fat).\n3. Aqueous Flare and cells (detected by slit-lamp biomicroscopy).\n4. Miosis (constricted pupil due to sphincter muscle spasm).\n5. Loss of normal Iris pattern (blurring of the collarette and crypts due to edema).\n6. Posterior Synechiae (adhesions between iris and lens capsule) causing a "Festooned pupil" configuration upon dilation.\n7. Vitreous opacities and variable intraocular pressure (IOP).',
    isClinical: true,
    topic: 'Anterior Uveitis (Iridocyclitis)'
  },
  {
    id: 'uveitis_anterior_q3',
    chapterId: 9,
    type: 'short-answer',
    title: 'Chronic/Recurrent Iridocyclitis Complications',
    content: 'Enumerate six major ocular complications of chronic or recurrent Iridocyclitis.',
    answer: '1. Seclusio pupillae (360-degree posterior synechiae) and Occlusio pupillae (inflammatory membrane covering the pupil).\n2. Secondary Glaucoma (due to pupillary block or peripheral anterior synechiae - PAS).\n3. Complicated Cataract (typically starting as a posterior subcapsular lens opacity).\n4. Cyclitic membrane formation behind the lens.\n5. Hypotony leading to Phthisis Bulbi (shrunken atrophic eye) due to ciliary body shutdown.\n6. Tractional Retinal Detachment (TRD) or Exudative Retinal Detachment (ERD).',
    isClinical: true,
    topic: 'Anterior Uveitis (Iridocyclitis)'
  },
  {
    id: 'uveitis_anterior_q4',
    chapterId: 9,
    type: 'short-answer',
    title: 'Iridocyclitis Management Protocol',
    content: 'Outline the therapeutic management protocol for an active attack of Iridocyclitis.',
    answer: 'Local Therapy:\n1. Topical Atropine Sulphate (Cycloplegic/Mydriatic): Paralyses the ciliary and sphincter muscles to relieve severe spasm pain, and breaks/prevents posterior synechiae.\n2. Topical Corticosteroids: Main stay to suppress the active ocular inflammation.\n\nSystemic Therapy: Systemic corticosteroids or NSAIDs for severe/bilateral cases, combined with specific antibiotics or antivirals if an infective etiology is identified.',
    isClinical: true,
    topic: 'Anterior Uveitis (Iridocyclitis)'
  },
  {
    id: 'uveitis_anterior_q5',
    chapterId: 9,
    type: 'short-answer',
    title: 'Acute Anterior Uveitis Case Study',
    content: 'A 30-year-old female presents complaining of a rapid onset of blurring of vision in her left eye, accompanied by a dull pain radiating to the eyebrow for the past 2 days. On examination, visual acuity was 6/6 in the right eye and 6/18 in the left eye (not improving with a pinhole). Intraocular pressure (IOP) was 16 mmHg in the right eye and significantly elevated at 30 mmHg in the left eye. Slit-lamp biomicroscopy of the left eye revealed white precipitates on the back of the cornea with a deep, turbid anterior chamber. The left pupil was narrow with a sluggish reaction to light.\n\n1. What is your diagnosis?\n2. Enumerate 4 probable causes/mechanisms for the diminution of vision in the left eye in this case.\n3. Enumerate 4 possible long-term structural complications of this disease.\n4. Enumerate 4 vital lines of treatment required for managing this case.',
    answer: '1. Diagnosis: Acute Anterior Uveitis (Iridocyclitis) with secondary inflammatory Glaucoma in the left eye.\n\n2. Four Causes of Diminution of Vision:\n- Turbidity and cells in the aqueous humor (aqueous flare blocking light pathways).\n- Induced ciliary and pupillary muscle spasm (causing temporary myopia).\n- Inflammatory deposition of Keratic Precipitates (KPs) on the central corneal endothelium.\n- Severe corneal edema secondary to the acutely elevated IOP (30 mmHg).\n\n3. Four Possible Complications:\n- Seclusio pupillae or occlusio pupillae leading to iris bombe.\n- Permanent Secondary Glaucoma (due to peripheral anterior synechiae - PAS).\n- Complicated Cataract (posterior subcapsular).\n- Phthisis Bulbi (atrophy of the globe due to ciliary body shutdown).\n\n4. Four Lines of Treatment:\n- Intensive topical Corticosteroids (to suppress active intraocular inflammation).\n- Topical Atropine Sulphate 1% (cycloplegic/mydriatic to relieve muscle spasm pain and break posterior synechiae).\n- Anti-glaucoma medications (e.g., topical Beta-blockers or oral Diamox to lower the high IOP; miotics are contraindicated).\n- Systemic anti-inflammatory drugs or specific antibiotics if an infectious etiology is identified.',
    isClinical: true,
    topic: 'Anterior Uveitis (Iridocyclitis)'
  },

  // --- Topic 2: Suppurative Uveitis (Endophthalmitis & Panophthalmitis) ---
  {
    id: 'uveitis_suppurative_q1',
    chapterId: 9,
    type: 'short-answer',
    title: 'Endophthalmitis Definition & Clinical Presentation',
    content: 'Define Endophthalmitis and describe its typical clinical presentation (symptoms and signs).',
    answer: 'Definition: Suppurative inflammation of the entire uveal tract and adjacent intraocular cavities, typically sparing the outer scleral coat.\n\nSymptoms: Severe ocular pain, intense photophobia, lacrimation, marked eye redness, and a rapid, profound drop of vision.\n\nSigns: Severe conjunctival injection and chemosis, corneal haze, hypopyon (layer of pus in the anterior chamber), and a yellow pupillary reflex (due to vitreous abscess/pus).',
    isClinical: true,
    topic: 'Suppurative Uveitis (Endophthalmitis & Panophthalmitis)'
  },
  {
    id: 'uveitis_suppurative_q2',
    chapterId: 9,
    type: 'short-answer',
    title: 'Postoperative Endophthalmitis Guidelines',
    content: 'State the management guidelines for an active case of Postoperative Endophthalmitis.',
    answer: '1. Intensive, urgent antibiotic administration via all possible routes, including topical, systemic, and mandatory Intravitreal antibiotic injection.\n2. Pars Plana Vitrectomy (PPV) if light perception (PL) is preserved but visual acuity is highly deteriorated.\n3. Evisceration or Enucleation if the condition progresses to a completely blind, painful eye.',
    isClinical: true,
    topic: 'Suppurative Uveitis (Endophthalmitis & Panophthalmitis)'
  },
  {
    id: 'uveitis_suppurative_q3',
    chapterId: 9,
    type: 'short-answer',
    title: 'Panophthalmitis Definition & Features vs Endophthalmitis',
    content: 'Define Panophthalmitis and contrast its clinical signs with Endophthalmitis.',
    answer: 'Definition: Severe, acute suppurative inflammation involving all three coats of the eyeball (including the sclera) and extending into the orbital tissues.\n\nDifferentiating Signs (In addition to endophthalmitis features):\n1. Marked eyelid edema and prominent Proptosis (due to orbital involvement).\n2. Total loss of light perception (No PL occurs very early).\n3. Complete ophthalmoplegia (limitation of eye movements).\n4. High risk of spontaneous perforation and self-evisceration.',
    isClinical: true,
    topic: 'Suppurative Uveitis (Endophthalmitis & Panophthalmitis)'
  },
  {
    id: 'uveitis_suppurative_q4',
    chapterId: 9,
    type: 'short-answer',
    title: 'Panophthalmitis Management & Contraindications',
    content: 'State the definitive management for Panophthalmitis and explain why Enucleation is strictly contraindicated.',
    answer: 'Management: Intensive high-dose broad-spectrum antibiotics for 48 hours; if no response occurs, immediate surgical Evisceration must be performed.\n\nWhy Enucleation is contraindicated: Because cutting through the infected optic nerve sheath in panophthalmitis opens up the subarachnoid pathways, carrying a fatal risk of spreading the purulent infection directly into the central nervous system, causing purulent meningitis or brain abscess.',
    isClinical: true,
    topic: 'Suppurative Uveitis (Endophthalmitis & Panophthalmitis)'
  },

  // --- Topic 3: Systemic Syndromes & Optic Atrophy Comparison ---
  {
    id: 'uveitis_syndromes_q1',
    chapterId: 9,
    type: 'short-answer',
    title: 'Behçet\'s Disease Oral/Genital Aphthosis Syndromic Match',
    content: 'Mention the systemic syndrome characterized by uveitis accompanied by recurrent oral and genital aphthous ulcers.',
    answer: 'Behçet\'s Disease (a chronic systemic vasculitis of unknown etiology).',
    isClinical: false,
    topic: 'Systemic Syndromes & Optic Atrophy Comparison'
  },
  {
    id: 'uveitis_syndromes_q2',
    chapterId: 9,
    type: 'short-answer',
    title: 'Sympathetic Ophthalmitis Definition & Pathogenesis',
    content: 'Define Sympathetic Ophthalmitis, explaining its predisposing cause and underlying etiology.',
    answer: 'Definition: A rare, bilateral diffuse granulomatous uveitis that affects a completely healthy uninjured eye (Sympathizing eye) following a penetrating trauma to the other eye (Exciting eye).\n\nPredisposing cause: Accidental penetrating ocular trauma or retained intraocular foreign body (IOFB) involving the ciliary body region.\n\nEtiology: An autoimmune delayed hypersensitivity reaction triggered by the systemic circulation of uveal pigment liberated from the damaged exciting eye, which acts as an allergen against the patient\'s own uveal tract tissue.',
    isClinical: true,
    topic: 'Systemic Syndromes & Optic Atrophy Comparison'
  },
  {
    id: 'uveitis_syndromes_q3',
    chapterId: 9,
    type: 'short-answer',
    title: 'Optic Atrophy Criteria Comparison',
    content: 'Provide the five-point comparative table mapping the criteria between Primary, Secondary, Consecutive, and Post-Glaucomatous Optic Atrophy.',
    answer: '1. Primary Optic Atrophy: White color, sharply defined edges, shallow saucer-shaped atrophic cup, clearly visible lamina cribrosa holes, and attenuated retinal vessels over a normal surrounding retina.\n\n2. Secondary Optic Atrophy: White color, blurred and elevated disc edges, filled/obscured optic cup, and attenuated vessels over a retina showing secondary proliferation of retinal pigment epithelium (RPE).\n\n3. Consecutive Optic Atrophy: Waxy yellow color, blurred disc edges, filled optic cup, and severely attenuated/thread-like vessels over a retina showing clear evidence of the causative retinal disease (e.g., Retinitis Pigmentosa).\n\n4. Post-Glaucomatous Optic Atrophy: White color, sharply defined disc edges, extremely deep glaucomatous cupping with a characteristic nasal shift of the retinal blood vessels, accompanied by high IOP values.',
    isClinical: false,
    topic: 'Systemic Syndromes & Optic Atrophy Comparison'
  },

  // ===========================================================================
  // --- CHAPTER 10: STRABISMUS ---
  // ===========================================================================

  // --- Topic 1: Apparent Squint & Latent Squint (Heterophoria) ---
  {
    id: 'strabismus_apparent_latent_q1',
    chapterId: 10,
    type: 'short-answer',
    title: 'Apparent Squint Definition & Causes',
    content: 'Define Apparent Squint and enumerate three anatomical and two optical causes.',
    answer: 'Definition: An apparent lack of parallelism between the two visual axes, but the visual axes are actually normal, the corneal reflex is perfectly centered, and there is no recovery movement on the cover test.\n\nAnatomical Causes:\n- Epicanthus (causes apparent convergent squint)\n- Ankyloblepharon (causes apparent divergent squint)\n- Blepharophimosis (causes apparent convergent squint)\n\nOptical Causes:\n- Abnormal angle alpha (increased alpha causes apparent divergence; decreased alpha causes apparent convergence)',
    isClinical: false,
    topic: 'Apparent Squint & Latent Squint (Heterophoria)'
  },
  {
    id: 'strabismus_apparent_latent_q2',
    chapterId: 10,
    type: 'short-answer',
    title: 'Latent Squint (Heterophoria) Definition & Types',
    content: 'Define Latent Squint (Heterophoria) and enumerate its five clinical types based on the direction of deviation.',
    answer: 'Definition: A tendency of the visual axes to deviate which is normally corrected and kept latent by the fusion mechanism, manifesting only when binocular vision is dissociated.\n\nTypes:\n1. Esophoria (Inward deviation tendency)\n2. Exophoria (Outward deviation tendency)\n3. Hypophoria (Downward deviation tendency)\n4. Hyperphoria (Upward deviation tendency)\n5. Cyclophoria (Wheel-rotation deviation tendency)',
    isClinical: false,
    topic: 'Apparent Squint & Latent Squint (Heterophoria)'
  },
  {
    id: 'strabismus_apparent_latent_q3',
    chapterId: 10,
    type: 'short-answer',
    title: 'Latent Squint Clinical Symptoms',
    content: 'Enumerate the clinical symptoms of Latent Squint when the binocular fusion mechanism begins to fail.',
    answer: '1. Intermittent binocular diplopia (double vision).\n2. Blurring of print and difficulty reading after prolonged near work.\n3. Accommodative asthenopia (eyestrain and headache).\n4. Nausea, dizziness, and difficulty changing focus rapidly.',
    isClinical: true,
    topic: 'Apparent Squint & Latent Squint (Heterophoria)'
  },
  {
    id: 'strabismus_apparent_latent_q4',
    chapterId: 10,
    type: 'short-answer',
    title: 'Latent Squint Diagnostic Clinical Tests',
    content: 'List the diagnostic clinical tests used to detect and measure Latent Squint.',
    answer: '1. Cover-uncover test (shows correction movement upon uncovering the latent eye).\n2. Alternate cover test.\n3. Maddox Wing test (to detect and measure latent squint in near vision).\n4. Maddox Rod test (to detect and measure latent squint in far vision).',
    isClinical: true,
    topic: 'Apparent Squint & Latent Squint (Heterophoria)'
  },
  {
    id: 'strabismus_apparent_latent_q5',
    chapterId: 10,
    type: 'short-answer',
    title: 'Latent Squint Comprehensive Management',
    content: 'Outline the comprehensive management lines for Latent Squint.',
    answer: '1. Full optical correction of any underlying error of refraction.\n2. Orthoptic treatment using the Synoptophore to strengthen fusion reserves.\n3. General health and nutritional support (Iron and vitamins for fatigue).\n4. Prescription of relieving or exerting prisms in spectacle lenses.\n5. Surgical treatment (muscle strengthening or weakening) if conservative measures fail.',
    isClinical: true,
    topic: 'Apparent Squint & Latent Squint (Heterophoria)'
  },

  // --- Topic 2: Concomitant Squint (Manifest Non-Paralytic) ---
  {
    id: 'strabismus_concomitant_q1',
    chapterId: 10,
    type: 'short-answer',
    title: 'Concomitant Squint Definition & Etiology',
    content: 'Define Concomitant Squint and list its three primary etiological causes.',
    answer: 'Definition: A manifest, non-paralytic squint where both eyes move freely without any mechanical limitation, and the angle of deviation remains constant in all directions of gaze.\n\nCauses:\n1. Defective vision in one eye (e.g., high anisometropia leading to diplopia, suppression, and subsequent amblyopia).\n2. Abnormal relation between accommodation and convergence due to uncorrected ametropia (Hyperopia triggers excessive convergence leading to Esotropia; Myopia reduces convergence leading to Exotropia).\n3. Central causes (absence or failure of the central binocular fusion mechanism in the brain).',
    isClinical: false,
    topic: 'Concomitant Squint (Manifest Non-Paralytic)'
  },
  {
    id: 'strabismus_concomitant_q2',
    chapterId: 10,
    type: 'short-answer',
    title: 'Concomitant Squint Subdivisions',
    content: 'Enumerate the clinical subdivisions of Concomitant Squint.',
    answer: '- According to the eye involved: Unilateral squint or Alternating squint.\n- According to the direction of deviation: Vertical squint or Horizontal squint.',
    isClinical: false,
    topic: 'Concomitant Squint (Manifest Non-Paralytic)'
  },
  {
    id: 'strabismus_concomitant_q3',
    chapterId: 10,
    type: 'short-answer',
    title: 'Concomitant Squint Management Protocol',
    content: 'Outline the management steps for a child presenting with Concomitant Squint.',
    answer: '1. Treat the underlying cause of visual loss if present.\n2. Correct the abnormal Accommodation/Convergence relationship using precise spectacle glasses or contact lenses.\n3. Medical therapy: Use of topical miotics or cycloplegic drugs to manipulate accommodation.\n4. Surgical management: Weaken overacting muscles (recession) or strengthen underacting muscles (resection) to realign the visual axes.',
    isClinical: true,
    topic: 'Concomitant Squint (Manifest Non-Paralytic)'
  },

  // --- Topic 3: Paralytic Squint (Incomitant) ---
  {
    id: 'strabismus_paralytic_q1',
    chapterId: 10,
    type: 'short-answer',
    title: 'Paralytic Squint Definition & Etiology',
    content: 'Define Paralytic Squint and enumerate six different etiological categories/causes.',
    answer: 'Definition: A manifest squint caused by paralysis or paresis of one or more extraocular muscles, characterized by limited eye movement and a variable angle of deviation.\n\nCauses:\n1. Traumatic injury to the cranial nerves or muscles.\n2. Metabolic disorders (most commonly Diabetes Mellitus).\n3. Vascular lesions (ischemia, embolism, or hemorrhage).\n4. Myogenic causes (direct myopathy of the muscle).\n5. Neuromuscular junction disorders (Myasthenia Gravis).\n6. Brain tumors compressing the nerve pathways.\n7. Neurogenic intracranial causes.',
    isClinical: false,
    topic: 'Paralytic Squint (Incomitant)'
  },
  {
    id: 'strabismus_paralytic_q2',
    chapterId: 10,
    type: 'short-answer',
    title: 'Paralytic Squint Clinical Presentation',
    content: 'Describe the clinical presentation (symptoms and signs) of a patient with an active Paralytic Squint.',
    answer: 'Symptoms:\n- Binocular diplopia (can be homonymous/uncrossed or heteronymous/crossed)\n- False orientation, accompanied by vertigo, nausea, and vomiting\n\nSigns:\n1. Marked limitation of ocular movement toward the field of action of the paralyzed muscle.\n2. Compensatory head posture (abnormal face turn and head tilt to minimize diplopia).\n3. The secondary angle of deviation (measured with the paralyzed eye fixing) is significantly greater than the primary angle of deviation (measured with the sound eye fixing).\n4. Positive past-pointing test.',
    isClinical: true,
    topic: 'Paralytic Squint (Incomitant)'
  },
  {
    id: 'strabismus_paralytic_q3',
    chapterId: 10,
    type: 'short-answer',
    title: 'Paralytic Squint Dual-Phase Protocol',
    content: 'Outline the dual-phase (preoperative and operative) treatment protocol for Paralytic Squint.',
    answer: 'Preoperative Management (Conservative phase):\n1. Treat the primary underlying systemic cause (e.g., control blood sugar in DM).\n2. Alternate covering/patching of the eyes to completely eliminate diplopia and prevent amblyopia.\n3. Use of relieving prisms in glasses to bridge minor deviations.\n\nOperative Management (Indicated strictly after waiting for 6 months for potential nerve regeneration):\n1. Weakening procedures (recession) of the contralateral antagonist muscle.\n2. Strengthening procedures (resection/cutting a part of the muscle) of the paralyzed muscle.\n3. Muscle transplantation surgeries in cases of complete, severe, irreversible muscle weakness.',
    isClinical: true,
    topic: 'Paralytic Squint (Incomitant)'
  },

  // ===========================================================================
  // --- CHAPTER 11: RETINA ---
  // ===========================================================================

  // --- Topic 1: Hypertensive & Diabetic Retinopathy ---
  {
    id: 'retina_dr_q1',
    chapterId: 11,
    type: 'short-answer',
    title: 'Hypertensive Retinopathy Grades',
    content: 'List the four progressive clinical grades of Hypertensive Retinopathy.',
    answer: 'Grade I: Generalized mild attenuation and narrowing of the retinal arteries; no venous changes.\n\nGrade II: Focal attenuation and focal narrowing of arteries, combined with irregular venous calibers.\n\nGrade III: Angiopathic retinopathy, showing soft (cotton-wool) exudates, retinal hemorrhages, and retinal edema.\n\nGrade IV: Severe neuro-retinopathy, featuring prominent Papilledema, a macular star presentation, cotton-wool spots, and flame-shaped hemorrhages.',
    isClinical: true,
    topic: 'Hypertensive & Diabetic Retinopathy'
  },
  {
    id: 'retina_dr_q2',
    chapterId: 11,
    type: 'short-answer',
    title: 'Diabetic Retinopathy Pathogenesis',
    content: 'Differentiate between the microvascular occlusion and leakage pathogenesis in Diabetic Retinopathy (DR).',
    answer: 'Microvascular Occlusion: Driven by thickening of the basement membrane, endothelial cell proliferation, defective RBC oxygen transport, and platelet aggregation, leading to retinal ischemia.\n\nMicrovascular Leakage: Driven by the loss of endothelial tight junctions and loss of mural pericytes, leading to breakdown of the blood-retinal barrier and retinal edema.',
    isClinical: false,
    topic: 'Hypertensive & Diabetic Retinopathy'
  },
  {
    id: 'retina_dr_q3',
    chapterId: 11,
    type: 'short-answer',
    title: 'Diabetic Retinopathy Clinical Classification',
    content: 'Contrast between the hallmark retinal signs of Background DR, Pre-proliferative DR, and Proliferative DR.',
    answer: 'Background DR: Characterized by micro-aneurysms (earliest clinical sign), hard yellow-white lipoprotein exudates, dot/blot and flame-shaped retinal hemorrhages, and localized retinal edema.\n\nPre-proliferative DR: Characterized by dilated veins showing irregular calibers, beading, and looping, combined with cotton-wool spots (micro-infarctions) and Intra-Retinal Microvascular Abnormalities (IRMA).\n\nProliferative DR: Characterized by active Neovascularization at the disc (NVD), elsewhere (NVE), or on the iris (NVI/Rubeosis iridis), accompanied by fibrovascular tissue proliferation, vitreous/pre-retinal hemorrhage, and tractional retinal detachment.',
    isClinical: true,
    topic: 'Hypertensive & Diabetic Retinopathy'
  },
  {
    id: 'retina_dr_q4',
    chapterId: 11,
    type: 'short-answer',
    title: 'Diabetic Retinopathy Management Protocol',
    content: 'Outline the therapeutic management protocol for Diabetic Retinopathy based on clinical indications.',
    answer: '1. Systemic: Strict, optimized metabolic control of blood glucose levels, blood pressure, and lipids.\n\n2. Intravitreal Anti-VEGF Injections: The absolute mainstay treatment for diabetic macular edema (DME).\n\n3. Laser Photocoagulation: Panretinal Photocoagulation (PRP) is highly indicated for Proliferative DR to regress neovascularization; focal macular grid laser is used for specific maculopathy.\n\n4. Surgical Vitrectomy: Indicated for non-clearing dense vitreous hemorrhage or tractional retinal detachment (TRD).\n\n5. Cyclocryotherapy: Indicated for end-stage neovascular glaucoma.',
    isClinical: true,
    topic: 'Hypertensive & Diabetic Retinopathy'
  },
  {
    id: 'retina_dr_q5',
    chapterId: 11,
    type: 'short-answer',
    title: 'Cotton Wool Spots Definition & Pathogenesis',
    content: 'Define "Cotton Wool Spots" and state their underlying histopathological nature.',
    answer: 'Definition: Soft, fluffy white opacities visible in the retina, representing micro-infarctions of the retinal nerve fiber layer (NFL) due to capillary occlusion and axoplasmic transport stagnation.',
    isClinical: false,
    topic: 'Hypertensive & Diabetic Retinopathy'
  },
  {
    id: 'retina_dr_q6',
    chapterId: 11,
    type: 'short-answer',
    title: 'Diabetic Retinopathy Clinical Signs & Vision Loss',
    content: 'Regarding Diabetic Retinopathy:\n1. List two characteristic retinal signs visible in the non-proliferative stage.\n2. List two common causes of progressive diminution of vision in a diabetic patient.',
    answer: '1. Two Retinal Signs: Retinal micro-aneurysms and hard lipoprotein exudates (or dot/blot hemorrhages).\n\n2. Two Causes of Vision Loss: Chronic Diabetic Macular Edema (DME) and extensive Vitreous Hemorrhage (or tractional retinal detachment).',
    isClinical: true,
    topic: 'Hypertensive & Diabetic Retinopathy'
  },

  // --- Topic 2: Central Retinal Vein Occlusion (CRVO) ---
  {
    id: 'retina_crvo_q1',
    chapterId: 11,
    type: 'short-answer',
    title: 'CRVO Etiology',
    content: 'Enumerate the etiological factors causing Central Retinal Vein Occlusion (CRVO).',
    answer: '1. Intraluminal factors: Increased blood viscosity (e.g., polycythemia).\n\n2. Vascular wall factors: Active vasculitis or endothelial damage (e.g., in Diabetes Mellitus).\n\n3. Extra-vascular compression: Severe neighboring atherosclerosis at the level of the lamina cribrosa or chronically increased IOP (Open-Angle Glaucoma).',
    isClinical: false,
    topic: 'Central Retinal Vein Occlusion (CRVO)'
  },
  {
    id: 'retina_crvo_q2',
    chapterId: 11,
    type: 'short-answer',
    title: 'CRVO Fundus Examination signs',
    content: 'Describe the early versus late fundus signs found on examination of a patient with CRVO.',
    answer: 'Early Signs: Retinal veins are massively dilated, tortuous, and engorged. Retinal arteries are narrowed and obscured by extensive, dense intra-retinal hemorrhages in all four quadrants ("blood and thunder" fundus), accompanied by diffuse retinal edema and cotton-wool spots.\n\nLate Signs: Retinal blood vessels become heavily attenuated and sheathed. Neovascularization or anastomotic collateral channels develop at the disc due to chronic low-grade retinal ischemia.',
    isClinical: true,
    topic: 'Central Retinal Vein Occlusion (CRVO)'
  },
  {
    id: 'retina_crvo_q3',
    chapterId: 11,
    type: 'short-answer',
    title: 'CRVO Visual Complications & Management',
    content: 'Enumerate the specific visual complications of CRVO and outline its management.',
    answer: 'Complications: Vitreous hemorrhage, Tractional Retinal Detachment (if a tear develops), permanent cystoid macular edema (CME), and Neovascular Glaucoma (100 days glaucoma).\n\nManagement:\n- Perform systemic investigations (CBC, blood sugar, BP, and IOP) to identify the underlying cause.\n- Prescribe anti-platelets (Aspirin) or anticoagulants to avoid blood clotting.\n- Order Fluorescein Angiography after 3 months to differentiate ischemic from non-ischemic types.\n- Apply Laser Photocoagulation (PRP) if neovascularization or macular edema develops.\n- Perform Vitrectomy if non-clearing vitreous hemorrhage or TRD complicates the case.',
    isClinical: true,
    topic: 'Central Retinal Vein Occlusion (CRVO)'
  },

  // --- Topic 3: Central Retinal Artery Occlusion (CRAO) ---
  {
    id: 'retina_crao_q1',
    chapterId: 11,
    type: 'short-answer',
    title: 'CRAO Etiology & Symptoms',
    content: 'Enumerate the etiologies of Central Retinal Artery Occlusion (CRAO) and describe its clinical symptoms.',
    answer: 'Etiology:\n1. Intraluminal: Emboli arising from distant atheromatous plaques (e.g., carotid artery disease).\n2. Vascular wall: Active arteritis (e.g., SLE or Giant Cell Arteritis) or local arterial spasm (Raynaud\'s disease).\n3. Extra-vascular: Exorbitant external compression, such as a tight scleral buckle used in retinal detachment surgery or retrobulbar hemorrhage.\n\nSymptoms: Sudden, catastrophic, completely painless unilateral loss of vision (often down to no light perception; may present as transient amaurosis fugax if caused by arterial spasm).',
    isClinical: true,
    topic: 'Central Retinal Artery Occlusion (CRAO)'
  },
  {
    id: 'retina_crao_q2',
    chapterId: 11,
    type: 'short-answer',
    title: 'CRAO Fundus Examination Signs',
    content: 'Describe the early versus late clinical signs of CRAO on fundus examination.',
    answer: 'Early Signs: Retinal arteries appear extremely thin and thread-like, and veins show segmentation of the blood column (cattle-truck phenomenon). The posterior retina turns completely milky-white due to ischemic coagulative necrosis and edema of the inner layers. A pathognomonic Cherry-Red Spot is visible at the fovea.\n\nLate Signs: Retinal edema completely resolves, blood vessels remain highly attenuated and sheathed, and the patient develops consecutive optic atrophy (waxy yellow disc with blurred edges and filled cup).',
    isClinical: true,
    topic: 'Central Retinal Artery Occlusion (CRAO)'
  },
  {
    id: 'retina_crao_q3',
    chapterId: 11,
    type: 'short-answer',
    title: 'Cherry-Red Spot Pathophysiological Mechanism',
    content: 'Explain the exact physiological mechanism behind the "Cherry-Red Spot" seen in CRAO.',
    answer: 'The fovea is anatomically very thin because it lacks the inner five layers of the retina, receiving its entire nutrition from the underlying choroid. When CRAO occurs, the surrounding thicker retina becomes completely edematous, opacified, and milky-white due to inner layer ischemia. The fovea remains completely transparent, allowing the normal red color of the highly vascularized choroid to shine through, creating a sharp, prominent red contrast against the pale ischemic background.',
    isClinical: false,
    topic: 'Central Retinal Artery Occlusion (CRAO)'
  },
  {
    id: 'retina_crao_q4',
    chapterId: 11,
    type: 'short-answer',
    title: 'CRAO Emergency Management Protocol',
    content: 'Outline the emergency management lines for a recent case of CRAO.',
    answer: 'CRAO is a definitive ocular emergency; treatment must be initiated within hours to save the retina:\n1. Immediate firm ocular massage to mechanically dislodge the trapped embolus into smaller peripheral branches.\n2. Anterior chamber paracentesis to rapidly drop the IOP, encouraging forward arterial blood flow.\n3. Intravenous systemic Diamox (Acetazolamide) to lower intraocular pressure.\n4. Inhalation of Carbogen gas (95% O2 and 5% CO2) to induce retinal vasodilation and enhance oxygenation.\n5. Systemic or local administration of thrombolytics or enzymes (e.g., streptokinase or alpha-chymotrypsin).',
    isClinical: true,
    topic: 'Central Retinal Artery Occlusion (CRAO)'
  },

  // --- Topic 4: Retinal Detachment (RD) ---
  {
    id: 'retina_rd_q1',
    chapterId: 11,
    type: 'short-answer',
    title: 'Rhegmatogenous Retinal Detachment (RRD) Predispositions',
    content: 'Define Rhegmatogenous Retinal Detachment (RRD) and list its predisposing risk factors.',
    answer: 'Definition: Separation of the neurosensory retina from the underlying retinal pigment epithelium (RPE) due to a fluid influx through a full-thickness retinal hole or tear, accompanied by a degree of vitreous liquefaction.\n\nRisk Factors: High axial myopia (due to peripheral retinal thinning), history of ocular trauma, previous aphakia (following cataract surgery), or peripheral lattice chorio-retinal degenerations.',
    isClinical: true,
    topic: 'Retinal Detachment (RD)'
  },
  {
    id: 'retina_rd_q2',
    chapterId: 11,
    type: 'short-answer',
    title: 'Rhegmatogenous RD Clinical Progression',
    content: 'Describe the typical clinical progression of symptoms and the signs of Rhegmatogenous RD.',
    answer: 'Symptoms: Begins with photopsia (flashes of light caused by vitreous traction on the retina), followed by sudden floaters (muscae volitantes due to vitreous traction/hemorrhage), a progressive shadow/curtain in the visual field, and complete loss of central vision if the macula detaches.\n\nSigns: The normal bright red reflex becomes dull and grayish-white. IOP is soft (marked hypotony). Fundus examination reveals an elevated, undulating grayish-white detached retina with dark, tortuous blood vessels, and the offending retinal breaks/tears appear dark red.',
    isClinical: true,
    topic: 'Retinal Detachment (RD)'
  },
  {
    id: 'retina_rd_q3',
    chapterId: 11,
    type: 'short-answer',
    title: 'Rhegmatogenous RD Surgical Guidelines',
    content: 'Outline the surgical management lines for RRD based on the presence of detachment.',
    answer: '- Retinal Break/Tear WITHOUT detachment: Immediate focal isolation and sealing using Argon Laser Photocoagulation or cryopexy to prevent fluid tracking.\n\n- Retinal Break WITH active detachment: Plan for a scleral buckling procedure combined with drainage of the sub-retinal fluid, followed by sealing the tear via intraoperative cryopexy or photocoagulation.\n\n- Advanced/Neglected RD or Proliferative Vitreoretinopathy (PVR): Managed via Pars Plana Vitrectomy (PPV) with removal of tractional membranes and long-term tamponade via intraocular Silicone Oil injection.',
    isClinical: true,
    topic: 'Retinal Detachment (RD)'
  },
  {
    id: 'retina_rd_q4',
    chapterId: 11,
    type: 'short-answer',
    title: 'Secondary Tractional & Exudative RD Etiologies',
    content: 'Enumerate the causes of Secondary Tractional RD and Exudative (Non-Rhegmatogenous) RD.',
    answer: '- Tractional RD Causes (No retinal break present; driven by vitreo-retinal membranes pulling the retina): Proliferative Diabetic Retinopathy (PDR), organized vitreous hemorrhage, chronic cyclitic membrane in severe iridocyclitis, or retinopathy of prematurity (ROP) due to high oxygen tension exposure in an incubator.\n\n- Exudative RD Causes (No break; driven by sub-retinal fluid accumulation): Severe exudative chorioretinitis, malignant intraocular tumors (e.g., Malignant Melanoma of the choroid), or severe pre-eclampsia.',
    isClinical: true,
    topic: 'Retinal Detachment (RD)'
  },

  // --- Topic 5: Retinitis Pigmentosa ---
  {
    id: 'retina_rp_q1',
    chapterId: 11,
    type: 'short-answer',
    title: 'Retinitis Pigmentosa Definition & Inheritance',
    content: 'Define Retinitis Pigmentosa and describe its primary inheritance pattern and initial anatomical cellular targets.',
    answer: 'Definition: A bilateral, progressive, degenerative, hereditary-familial retinal dystrophy that primarily destroys the photoreceptors, initially targeting the rod cells at the equator/periphery and later progressing to involve the central macula and the optic nerve. It can manifest as part of the systemic Laurence-Moon-Biedl Syndrome.',
    isClinical: false,
    topic: 'Retinitis Pigmentosa'
  },
  {
    id: 'retina_rp_q2',
    chapterId: 11,
    type: 'short-answer',
    title: 'Retinitis Pigmentosa Clinical Presentation',
    content: 'Describe the clinical presentation (symptoms and signs) of Retinitis Pigmentosa.',
    answer: 'Symptoms: Severe night blindness (nyctalopia - the earliest symptom due to rod cell destruction) and gradual, progressive constriction of the peripheral visual field, leading to a restricted central field of vision (tunnel/tubular vision).\n\nSigns (The Classic Fundus Triad):\n1. Bone-corpuscle fundus pigmentation (characteristic black melanin pigment deposits distributed heavily in the mid-periphery).\n2. Severe attenuation and thread-like narrowing of the retinal blood vessels.\n3. Waxy yellow appearance of the optic disc (consecutive optic atrophy).\n\nVisual Field signs: Ring scotoma that progressively expands into concentric contraction until only a small central tubular field remains.',
    isClinical: true,
    topic: 'Retinitis Pigmentosa'
  },
  {
    id: 'retina_rp_q3',
    chapterId: 11,
    type: 'short-answer',
    title: 'Retinitis Pigmentosa Secondary Complications',
    content: 'Enumerate three major ocular complications that can occur secondary to Retinitis Pigmentosa.',
    answer: '1. Complicated cataract (frequently posterior subcapsular type).\n2. Secondary Glaucoma.\n3. Advanced consecutive optic atrophy.',
    isClinical: true,
    topic: 'Retinitis Pigmentosa'
  },

  // ===========================================================================
  // --- CHAPTER 12: NEURO-OPHTHALMOLOGY ---
  // ===========================================================================

  // --- Topic 1: Anatomy & Physiology of the Visual Pathway ---
  {
    id: 'neuro_anatomy_q1',
    chapterId: 12,
    type: 'short-answer',
    title: 'Visual Pathway Gross Anatomy',
    content: 'Describe the gross anatomy of the visual pathway, mentioning the sequential structures involved.',
    answer: 'The visual pathway consists of the following sequential structures:\n1. The Optic Nerve (2nd cranial nerve, ~4 cm long extending from the lamina cribrosa of the sclera to the optic chiasm).\n2. The Optic Chiasm (where nasal fibers cross/decussate to the opposite side, while temporal fibers remain uncrossed).\n3. The Optic Tract (contains temporal fibers of the same side and nasal fibers of the opposite side).\n4. The Lateral Geniculate Body (LGB, the primary synapse point of visual fibers).\n5. The Optic Radiation (extends from the LGB through the posterior limb of the internal capsule to the occipital lobe).\n6. The Visual Cortex (located on the medial aspect and posterior pole of the occipital lobe, primarily Brodmann area 17).',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Visual Pathway'
  },
  {
    id: 'neuro_anatomy_q2',
    chapterId: 12,
    type: 'short-answer',
    title: 'Visual Pathway Orders of Neurons',
    content: 'Explain the physiology of the visual pathway in terms of the three main orders of neurons.',
    answer: 'Excluding the photoreceptors (rods and cones), the visual pathway is composed of three orders of neurons:\n- 1st Order Neurons: The bipolar cells located within the inner nuclear layer of the retina.\n- 2nd Order Neurons: The retinal ganglion cells and their axons, which form the nerve fiber layer, converge to form the optic nerve, pass through the chiasm/tracts, and terminate/synapse in the lateral geniculate body (LGB).\n- 3rd Order Neurons: Extend from the LGB, forming the optic radiations that travel to the visual cortex of the occipital lobe.',
    isClinical: false,
    topic: 'Anatomy & Physiology of the Visual Pathway'
  },
  {
    id: 'neuro_anatomy_q3',
    chapterId: 12,
    type: 'short-answer',
    title: 'Visual Pathway Lesions and Field Defects',
    content: 'Enumerate the characteristic visual field defects according to the site of the lesion in the visual pathway.',
    answer: 'Visual field defects correspond directly to the site of the lesion:\n- Left Optic Nerve: Complete blindness of the left eye.\n- Optic Chiasm (central lesion): Bitemporal hemianopia (loss of both temporal visual fields).\n- Optic Tract / LGB / Optic Radiation: Contralateral homonymous hemianopia.\n- Parietal Lobe (optic radiation): Contralateral inferior homonymous quadrantanopia ("pie in the floor").\n- Temporal Lobe (optic radiation - Meyer\'s loop): Contralateral superior homonymous quadrantanopia ("pie in the sky").\n- Occipital Lobe: Contralateral homonymous hemianopia, often with macular sparing due to collateral blood supply or bilateral representation.',
    isClinical: true,
    topic: 'Anatomy & Physiology of the Visual Pathway'
  },

  // --- Topic 2: Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION) ---
  {
    id: 'neuro_swelling_q1',
    chapterId: 12,
    type: 'short-answer',
    title: 'Optic Disc Swelling Clinical Demographics',
    content: 'Contrast between Optic Neuritis, Papilledema, and Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION) regarding typical age of presentation, gender predilection, and laterality.',
    answer: '1. Optic Neuritis:\n- Typical Age: Younger age group (20-45 years)\n- Gender: Females > Males\n- Laterality: Predominantly Unilateral (10% bilateral)\n\n2. Papilledema:\n- Typical Age: Variable age group (often <35 years)\n- Gender: Females > Males\n- Laterality: Almost always Bilateral\n\n3. NAION:\n- Typical Age: Older age group (typically >50 years)\n- Gender: Equal gender incidence (Females = Males)\n- Laterality: Rarely bilateral and simultaneous (usually unilateral or sequential)',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q2',
    chapterId: 12,
    type: 'short-answer',
    title: 'Optic Disc Swelling Vision & Pupil contrast',
    content: 'Differentiate between the initial visual functions and pupillary findings in recent cases of Optic Neuritis, Papilledema, and NAION.',
    answer: '1. Optic Neuritis:\n- Vision: Variable but typically severe early visual drop (20/25 or worse), dyschromatopsia (abnormal color vision in 90%), and central or nerve fiber layer defects.\n- Pupils: Relative Afferent Pupillary Defect (RAPD) is positive.\n\n2. Papilledema:\n- Vision: Visual acuity is usually completely normal in early cases, with enlarged blind spots and nerve fiber layer defects.\n- Pupils: RAPD is typically absent in bilateral symmetric disease.\n\n3. NAION:\n- Vision: 50% have normal or fair vision (20/40 or better) while 20% are worse than 20/200, with variable nerve fiber layer defects.\n- Pupils: RAPD is positive in the involved eye.',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q3',
    chapterId: 12,
    type: 'short-answer',
    title: 'Optic Disc Swelling Ophthalmoscopic Features',
    content: 'Contrast the clinical ophthalmoscopic appearance of the optic nerve head between Optic Neuritis, Papilledema, and NAION.',
    answer: '1. Optic Neuritis: 67% appear completely normal on funduscopy (Retrobulbar Neuritis); 33% show papillitis or disk hyperemia.\n\n2. Papilledema: Shows bilateral, symmetric optic disc swelling graded from early to chronic elevations based on intracranial pressure.\n\n3. NAION: Shows sector-based or diffuse optic disc edema, accompanied by superficial flame-shaped hemorrhages and disk hyperemia.',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q4',
    chapterId: 12,
    type: 'short-answer',
    title: 'Optic Disc Swelling Symptoms & Systemic Associations',
    content: 'Enumerate the specific associated symptoms and accompanying systemic disorders for Optic Neuritis, Papilledema, and NAION.',
    answer: '1. Optic Neuritis:\n- Symptoms: Associated with pain upon eye movement.\n- Systemic: Accompanied by demyelinating diseases like Multiple Sclerosis (MS) or Neuromyelitis Optica (NMO).\n\n2. Papilledema:\n- Symptoms: Associated with headache, nausea, vomiting, transient obstruction of vision, pulse-synchronous tinnitus, and diplopia.\n- Systemic: Accompanied by Idiopathic Intracranial Hypertension (IIH/PTC), cerebral venous sinus thrombosis, or intracranial space-occupying masses.\n\n3. NAION:\n- Symptoms: Usually has no associated ocular pain.\n- Systemic: Accompanied by systemic cardiovascular diseases, Diabetes Mellitus, Hypertension, or obstructive sleep apnea.',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q5',
    chapterId: 12,
    type: 'short-answer',
    title: 'Optic Neuritis Definition & Classification',
    content: 'Define Optic Neuritis and outline its ophthalmoscopic and etiological classifications.',
    answer: 'Definition: An inflammatory, infective, or demyelinating process affecting the optic nerve fibers.\n\nClassifications:\n1. Ophthalmoscopic Classification:\n   - Papillitis: Primary inflammation of the optic disc (nerve head), showing disc swelling, congestion, and hemorrhages.\n   - Retrobulbar Neuritis: Inflammation behind the eyeball (optic disc appears completely normal, hence "the patient sees nothing and the doctor sees nothing").\n   - Neuro-retinitis: Inflammation of the optic nerve head extending into the surrounding macular area, typically forming a "macular star" of hard exudates.\n\n2. Etiological Classification:\n   - Demyelinating: The most common cause (associated with Multiple Sclerosis [MS] or Devic disease).\n   - Para-infectious: Following viral infections (e.g., measles, mumps, influenza) or vaccinations.\n   - Infectious: Direct spread (meningitis, orbital cellulitis, sinus disease) or systemic infections (syphilis, tuberculosis).\n   - Autoimmune: Associated with systemic conditions (e.g., systemic lupus erythematosus, sarcoidosis).',
    isClinical: false,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q6',
    chapterId: 12,
    type: 'short-answer',
    title: 'Papillitis Presentation & Management',
    content: 'Describe the typical clinical picture (symptoms and signs), fate, and treatment of Papillitis.',
    answer: '1. Clinical Presentation:\n   - Symptoms: Rapidly progressive unilateral visual loss (severe drop, sometimes to perception of light [PL]), and deep retrobulbar aching eyeball pain typically exacerbated by eye movements.\n   - Signs: Elevated and hyperemic optic disc (<3 diopters of elevation) with lost physiological cup, congested retinal veins, splinter hemorrhages near the disc margin, relative afferent pupillary defect (RAPD), and a central or cecocentral scotoma (with severe loss of red/green color vision).\n\n2. Fate (Outcome): Vision usually recovers back to normal or near-normal within 1-4 weeks, but recurrences may occur, or it may transition into secondary optic atrophy.\n\n3. Treatment: Consists of treating the underlying cause, administration of systemic corticosteroids (e.g., intravenous methylprednisolone followed by oral prednisone) to accelerate recovery, and a comprehensive neurological consultation (especially to assess risk for Multiple Sclerosis).',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q7',
    chapterId: 12,
    type: 'short-answer',
    title: 'Retrobulbar Neuritis Clinical Manifestations',
    content: 'Outline the key clinical features, typical patient age group, and normal ocular exam findings of Retrobulbar Neuritis.',
    answer: '- Key Features: Acute unilateral visual loss, ocular/retrobulbar pain exacerbated by eye movements, and a positive Relative Afferent Pupillary Defect (RAPD).\n- Typical Patient Profile: Young adults aged 20–40, with a strong association with demyelinating diseases like Multiple Sclerosis (MS).\n- Ocular Exam Findings: The fundus initially appears completely normal ("the patient sees nothing and the doctor sees nothing") because the inflammatory focus is located posterior to the lamina cribrosa, away from the optic nerve head.',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q8',
    chapterId: 12,
    type: 'short-answer',
    title: 'Papilledema Definition & Etiologies',
    content: 'Define Papilledema and list its three main underlying etiologies.',
    answer: 'Definition: Passive, non-inflammatory edema of the optic disc (almost always bilateral) caused by elevated intracranial pressure (ICP).\n\nMain Etiologies:\n1. Idiopathic Intracranial Hypertension (Pseudotumor cerebri, most common in young, obese females of childbearing age).\n2. Space-Occupying Intracranial Lesions (e.g., brain tumors, abscesses, or hematomas obstructing cerebrospinal fluid pathways).\n3. Cerebral Venous Sinus Thrombosis (obstructing venous outflow from the brain).\n4. Traumatic brain injury / Subarachnoid hemorrhage.',
    isClinical: false,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q9',
    chapterId: 12,
    type: 'short-answer',
    title: 'Papilledema Stages & Symptoms',
    content: 'Describe the typical symptoms of increased intracranial pressure and outline the fundus appearance across the four stages of Papilledema.',
    answer: '1. Symptoms of Raised ICP: Severe headache (worse in the morning), projectile vomiting, projectile nausea, diplopia (due to 6th cranial nerve palsy), and transient visual obscurations (momentary blurring/graying out of vision upon standing up or bending down).\n\n2. Fundus Signs across Stages:\n   - Early Stage: Mild hyperemia of the disc, blurring of the nasal first and then temporal margins, and loss of normal spontaneous venous pulsations (SVPs).\n   - Established Stage: Severe hyperemia, marked elevation of the disc (up to 9D) with "halo" appearance, complete obliteration of the cup, engorged/tortuous retinal veins, flame-shaped hemorrhages, and fluffy white cotton-wool spots.\n   - Long-Standing Stage: Elevation remains but hyperemia/hemorrhages resolve; disc has a pale, dusty, "champagne-cork" appearance with optociliary shunt vessels.\n   - Atrophic Stage: Post-papilledemic optic atrophy characterized by a greyish-white, dirty disc with blurred margins and severely attenuated retinal vessels.',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q10',
    chapterId: 12,
    type: 'short-answer',
    title: 'Papilledema vs Papillitis & Other Swelling Causes',
    content: 'Differentiate between Papilledema and Papillitis, and list other non-neurological causes of optic disc swelling.',
    answer: '1. Differentiation:\n   - Papilledema: Almost always bilateral; early visual acuity is preserved (normal); pupillary reaction is normal; accompanied by prominent symptoms of raised ICP (headache, vomiting); marked elevation up to 9 diopters.\n   - Papillitis: Almost always unilateral; presents with immediate, severe visual drop; central/cecocentral scotoma; positive RAPD; pain upon eye movement; milder disc elevation (<3 diopters).\n\n2. Other Causes of Optic Disc Swelling:\n   - Ocular: Central Retinal Vein Occlusion (CRVO), severe ocular hypotony, or low tension.\n   - Orbital: Orbital tumors, Graves\' orbitopathy, or orbital cellulitis compressing the nerve.\n   - Systemic: Malignant systemic hypertension, diabetic papillopathy, or toxemia of pregnancy.',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },
  {
    id: 'neuro_swelling_q11',
    chapterId: 12,
    type: 'short-answer',
    title: 'Papilledema Management Guidelines',
    content: 'Outline the diagnostic and treatment approach for Papilledema.',
    answer: '1. Diagnostic Approach: Urgent neuroimaging (brain CT or MRI) to rule out an intracranial mass or sinus thrombosis BEFORE performing a lumbar puncture (LP) to measure cerebrospinal fluid opening pressure.\n\n2. Treatment Approach:\n   - Etiological Treatment: Direct medical or surgical intervention targeting the underlying cause (e.g., tumor resection, vascular shunting, or steroid/weight loss therapy for idiopathic intracranial hypertension).\n   - Medical: Carbonic anhydrase inhibitors (e.g., Acetazolamide/Diamox) or diuretics to lower ICP.\n   - Surgical (Visual sparing): Optic nerve sheath fenestration (decompression) to protect visual function from chronic damage if pressure remains high, or lumboperitoneal/ventriculoperitoneal shunt procedures.',
    isClinical: true,
    topic: 'Optic Disc Swelling Differential Diagnosis (Optic Neuritis, Papilledema, NAION)'
  },

  // --- Topic 3: Optic Atrophy Comparison ---
  {
    id: 'neuro_atrophy_q1',
    chapterId: 12,
    type: 'short-answer',
    title: 'Optic Atrophy Definition & Types',
    content: 'Define Optic Atrophy and list its four major clinical types.',
    answer: 'Definition: Death of the optic nerve fibers resulting in loss of visual or pupillary function, caused by a lesion located at any site from the ganglion cells to the lateral geniculate body.\n\nTypes: Primary, Secondary, Consecutive, and Post-Glaucomatous Optic Atrophy.',
    isClinical: false,
    topic: 'Optic Atrophy Comparison'
  },
  {
    id: 'neuro_atrophy_q2',
    chapterId: 12,
    type: 'short-answer',
    title: 'Primary vs Secondary Optic Atrophy',
    content: 'Differentiate between Primary and Secondary Optic Atrophy based on the disc color, disc edge, and state of the retinal vessels.',
    answer: '1. Primary Optic Atrophy:\n- Disc Color: White\n- Disc Edges: Sharply defined\n- Retinal Vessels: Attenuated over a normal surrounding retina\n\n2. Secondary Optic Atrophy:\n- Disc Color: White\n- Disc Edges: Completely blurred and elevated\n- Retinal Vessels: Heavily attenuated with secondary proliferation of the retinal pigment epithelium (RPE).',
    isClinical: true,
    topic: 'Optic Atrophy Comparison'
  },
  {
    id: 'neuro_atrophy_q3',
    chapterId: 12,
    type: 'short-answer',
    title: 'Consecutive vs Post-Glaucomatous Optic Atrophy',
    content: 'Describe the unique fundus features that characterize Consecutive Optic Atrophy versus Post-Glaucomatous Optic Atrophy.',
    answer: '1. Consecutive Optic Atrophy: Disc color has a characteristic waxy yellow hue with blurred edges; the optic cup is filled; retinal blood vessels are severely attenuated, with clear fundus evidence of the primary causative disease (e.g., bone spicules in Retinitis Pigmentosa).\n\n2. Post-Glaucomatous Optic Atrophy: Disc color is white with sharply defined edges; characterized by an extremely deep glaucomatous cup showing a prominent nasal shift of the retinal blood vessels, accompanied by high IOP values.',
    isClinical: true,
    topic: 'Optic Atrophy Comparison'
  },

  // --- Topic 4: Pupillary Reflexes & Anomalies ---
  {
    id: 'neuro_pupil_q1',
    chapterId: 12,
    type: 'short-answer',
    title: 'Pupil Definition, Muscles and Functions',
    content: 'Define the Pupil, name its controlling muscles and their respective autonomic innervation, and state its key physiological functions.',
    answer: '1. Definition: A central, active hole located in the iris diaphragm (usually slightly nasal to the center) measuring 3-4 mm in diameter.\n\n2. Controlling Muscles and Innervation:\n   - Sphincter Pupillae: A circular muscle layer responsible for pupillary constriction (miosis); supplied by parasympathetic fibers traveling on the 3rd cranial nerve (oculomotor).\n   - Dilator Pupillae: A radial muscle muscle layer responsible for pupillary dilatation (mydriasis); supplied by sympathetic nerve fibers from the superior cervical ganglion.\n\n3. Key Functions:\n   - Regulates the amount of light entering the eye to optimize retinal illumination.\n   - Reduces optical aberrations (by cutting off divergent peripheral light rays, allowing only central parallel rays to enter the eye).',
    isClinical: false,
    topic: 'Pupillary Reflexes & Anomalies'
  },
  {
    id: 'neuro_pupil_q2',
    chapterId: 12,
    type: 'short-answer',
    title: 'Pupillary Light Reflex Pathway',
    content: 'Describe the complete anatomical pathway of the pupillary light reflex (Sensory to Motor components).',
    answer: 'The pupillary light reflex pathway consists of:\n1. Receptors: Photoreceptors (rods and cones) and specialized intrinsically photosensitive retinal ganglion cells (ipRGCs) in the retina.\n2. Afferent Pathway: Decussate partly at the optic chiasm. Axons run through the optic nerve and optic tract, bypassing the lateral geniculate body, to terminate in the Pretectal Nucleus of the midbrain.\n3. Interneurons: Fibers travel bilaterally from each pretectal nucleus to both Edinger-Westphal nuclei (the parasympathetic centers of CN III), ensuring a bilateral consensual pupil response.\n4. Efferent Pathway: Parasympathetic preganglionic fibers travel along the Oculomotor (3rd) nerve to the Ciliary Ganglion, where they synapse.\n5. Postganglionic Efferents: Short ciliary nerves travel to the eye to supply the Sphincter Pupillae muscle, causing pupillary constriction (direct and consensual miosis).',
    isClinical: false,
    topic: 'Pupillary Reflexes & Anomalies'
  },
  {
    id: 'neuro_pupil_q3',
    chapterId: 12,
    type: 'short-answer',
    title: 'The Near Response Triad Components',
    content: 'Enumerate the three distinct physiological components of the ocular Near Response (Accommodation Triad) and explain their purpose.',
    answer: 'The near response (synkinesis) is triggered when focusing on a near object, consisting of three co-dependent actions:\n1. Accommodation: Contraction of the ciliary muscle relaxes the zonules, causing the lens to become more globular/powerful to focus divergent rays of near objects clearly on the retina.\n2. Convergence: Simultaneous contraction of both medial recti muscles aligns both eyes toward the near object to prevent binocular diplopia.\n3. Miosis: Constriction of the pupil (sphincter pupillae contraction) blocks peripheral divergent rays, increasing the depth of focus and reducing optical blur.',
    isClinical: false,
    topic: 'Pupillary Reflexes & Anomalies'
  },

  // ===========================================================================
  // --- CHAPTER 13: OCULAR TRAUMA ---
  // ===========================================================================

  // --- Topic 1: Non-Mechanical Injuries (Chemical & Physical Burns) ---
  {
    id: 'trauma_non_mechanical_q1',
    chapterId: 13,
    type: 'short-answer',
    title: 'Acid vs Alkali Ocular Burns',
    content: 'Differentiate between Acid and Alkali ocular burns regarding their mechanism of tissue action and depth of penetration.',
    answer: 'Alkali Burns: Deeply penetrating and extremely dangerous; they liquefy tissue proteins and rapidly penetrate into the deep structures of the globe.\n\nAcid Burns: More localized and less penetrating; they cause immediate coagulative necrosis of surface proteins, which acts as a natural physical barrier preventing deep penetration.',
    isClinical: false,
    topic: 'Non-Mechanical Injuries (Chemical & Physical Burns)'
  },
  {
    id: 'trauma_non_mechanical_q2',
    chapterId: 13,
    type: 'short-answer',
    title: 'Chemical Ocular Injuries Clinical Manifestations',
    content: 'Describe the early clinical manifestations and the late cicatrizing complications of severe Chemical Eye Injuries.',
    answer: 'Early Manifestations: Severe conjunctival hyperemia, intense chemosis, corneal edema, anterior chamber reaction, and in severe cases, acute corneal ulceration and perforation.\n\nLate Cicatrizing Complications: Conjunctival scarring, symblepharon, trichiasis, entropion, corneal scarring, and severe conjunctival/corneal xerosis.',
    isClinical: true,
    topic: 'Non-Mechanical Injuries (Chemical & Physical Burns)'
  },
  {
    id: 'trauma_non_mechanical_q3',
    chapterId: 13,
    type: 'short-answer',
    title: 'Chemical Eye Injury Immediate First-Aid',
    content: 'Outline the immediate First-Aid treatment protocol for an active Chemical Eye Injury.',
    answer: '1. Immediate, copious irrigation of the eyes using running water, saline, or Ringer\'s lactate solution for at least 20 minutes (or using 2.0 liters of fluid).\n2. Complete mechanical removal of any particulate foreign body or chemical matter from the corneal surface, lids, and conjunctival fornices.\n3. Debridement of necrotic surface areas to promote rapid re-epithelialization.\n4. Application of litmus pH paper to check the tissue pH after irrigation until it neutralizes (normal pH is 7.3 – 7.7).',
    isClinical: true,
    topic: 'Non-Mechanical Injuries (Chemical & Physical Burns)'
  },
  {
    id: 'trauma_non_mechanical_q4',
    chapterId: 13,
    type: 'short-answer',
    title: 'Chemical Burn Medical Management',
    content: 'List the medical management lines for a chemical burn patient after the first-aid phase.',
    answer: '1. Topical steroid eye drops, broad-spectrum antibiotics, and cycloplegic drops.\n2. Collagenase inhibitors to reduce corneal ulceration: Tetracycline ointment topically or systemic Doxycycline (100 mg twice daily).\n3. Regular monitoring of IOP; prescribe oral Acetazolamide (Diamox/Cidamex) if pressure rises.',
    isClinical: true,
    topic: 'Non-Mechanical Injuries (Chemical & Physical Burns)'
  },
  {
    id: 'trauma_non_mechanical_q5',
    chapterId: 13,
    type: 'short-answer',
    title: 'Electric vs Radiation Ocular Burns complications',
    content: 'Mention the commonest ocular complication secondary to Electric Burns versus Radiation/Infra-red Burns.',
    answer: 'Electric Burns: Direct electric shock most commonly results in Cataract formation.\n\nRadiation / Infra-Red Burns: Commonly cause physical cataract formation and retinal radiational retinopathy.',
    isClinical: true,
    topic: 'Non-Mechanical Injuries (Chemical & Physical Burns)'
  },

  // --- Topic 2: Mechanical Blunt (Non-Penetrating) Injuries ---
  {
    id: 'trauma_blunt_q1',
    chapterId: 13,
    type: 'short-answer',
    title: 'Traumatic Hyphema Management',
    content: 'Define Traumatic Hyphema and outline its complete medical and general management protocol.',
    answer: 'Definition: Presence of blood inside the anterior chamber cavity following a blunt concussive ocular trauma.\n\nManagement Protocol:\n- General: Strict bed rest in a semi-sitting position (to allow blood to settle down inferiorly); stop any anti-coagulant medications (like aspirin).\n- Medical: Cycloplegic drops, topical corticosteroids to reduce post-traumatic iritis, and anti-glaucoma medications to control pressure elevation.\n- Systemic: Vitamin K injections/tablets to prevent secondary re-bleeding.\n- Surgical: Operative surgical evacuation of blood if IOP remains uncontrollably high or corneal blood staining begins.',
    isClinical: true,
    topic: 'Mechanical Blunt (Non-Penetrating) Injuries'
  },
  {
    id: 'trauma_blunt_q2',
    chapterId: 13,
    type: 'short-answer',
    title: 'Blunt Iris & Ciliary Body Injury clinical signs',
    content: 'Enumerate the clinical signs of blunt trauma to the Iris and Ciliary Body.',
    answer: '1. Traumatic miosis or Traumatic mydriasis.\n2. Post-traumatic iritis.\n3. Iridodialysis (tearing of the iris root from the ciliary body, presenting as a D-shaped pupil).\n4. Traumatic aniridia (complete tearing/loss of the iris).\n5. Spasm of accommodation (temporary myopia) or Paralysis of accommodation (blurring of near vision).\n6. Angle Recession (a tear within the ciliary body faces; predisposes to delayed angle recession glaucoma).\n7. Cyclodialysis (ciliary body is torn from the scleral spur, causing chronic ocular hypotony).',
    isClinical: true,
    topic: 'Mechanical Blunt (Non-Penetrating) Injuries'
  },
  {
    id: 'trauma_blunt_q3',
    chapterId: 13,
    type: 'short-answer',
    title: 'Commotio Retinae & Retinal Dialysis',
    content: 'Define Commotio Retinae (Berlin’s Edema) and Retinal Dialysis as complications of blunt ocular trauma.',
    answer: 'Commotio Retinae: Transient gray-white opacification and edema of the posterior retina (macula) following a concussive force, causing a temporary or permanent drop in vision.\n\nRetinal Dialysis: Traumatic disinsertion or tearing of the peripheral retina from its anatomical attachment at the level of the ora serrata; highly predisposes to retinal detachment.',
    isClinical: true,
    topic: 'Mechanical Blunt (Non-Penetrating) Injuries'
  },
  {
    id: 'trauma_blunt_q4',
    chapterId: 13,
    type: 'short-answer',
    title: 'Blunt Injury Ocular Hypotony vs Secondary Glaucoma',
    content: 'Enumerate the mechanical causes of secondary Ocular Hypotony versus Secondary Glaucoma following a blunt injury.',
    answer: 'Hypotony Causes: Rupture globe (perforation of outer coats) or cyclodialysis (ciliary body detachment from the scleral spur).\n\nSecondary Glaucoma Causes: Trabecular blockage by a massive hyphema, lens subluxation/dislocation, angle recession scarring, or pupillary block by liberated lens particles.',
    isClinical: true,
    topic: 'Mechanical Blunt (Non-Penetrating) Injuries'
  },

  // --- Topic 3: Penetrating Injuries & Sympathetic Ophthalmitis ---
  {
    id: 'trauma_penetrating_q1',
    chapterId: 13,
    type: 'short-answer',
    title: 'Sympathetic Ophthalmitis Pathogenesis',
    content: 'Define Sympathetic Ophthalmitis and list its primary predisposing causes and underlying etiology.',
    answer: 'Definition: An acute, bilateral diffuse plastic/granulomatous uveitis affecting a completely healthy uninjured eye (Sympathizing eye) following a penetrating trauma to the other eye (Exciting eye).\n\nPredisposing Causes: Accidental sharp penetrating trauma or a retained intraocular foreign body (IOFB), particularly when involving the ciliary body zone.\n\nEtiology: An autoimmune allergic reaction against the patient\'s own uveal tissue, triggered by endogenously circulating uveal pigment liberated into the blood from the injured exciting eye.',
    isClinical: false,
    topic: 'Penetrating Injuries & Sympathetic Ophthalmitis'
  },
  {
    id: 'trauma_penetrating_q2',
    chapterId: 13,
    type: 'short-answer',
    title: 'Sympathetic Ophthalmitis Exciting vs Sympathizing Eye features',
    content: 'Describe the clinical picture (symptoms and signs) found in the Exciting eye versus the Sympathizing eye.',
    answer: 'Exciting Eye: History and visible evidence of ocular penetrating trauma or a retained IOFB, accompanied by constant signs of irritation like chronic ciliary injection.\n\nSympathizing Eye: Marked photophobia (the earliest diagnostic sign), accompanied by lacrimation, blepharospasm, and all the acute symptoms and signs of severe iridocyclitis (KPs, flare, miosis).',
    isClinical: true,
    topic: 'Penetrating Injuries & Sympathetic Ophthalmitis'
  },
  {
    id: 'trauma_penetrating_q3',
    chapterId: 13,
    type: 'short-answer',
    title: 'Sympathetic Ophthalmitis Diagnostic & Treatment Protocol',
    content: 'List the diagnostic investigations and the prophylactic/curative treatment protocol for Sympathetic Ophthalmitis.',
    answer: 'Investigations: Slit-lamp exam showing active iridocyclitis, blood test showing large mononuclear cells and eosinophilia, and a positive intradermal sensitivity test to uveal pigment.\n\nProphylactic Treatment: Immediate surgical removal of any retained IOFB, primary closure of wounds, and prompt surgical excision (enucleation) of the injured exciting eye if it is completely disorganized and blind before inflammation triggers the fellow eye.\n\nCurative Treatment:\n- Exciting Eye: Immediate excision/enucleation at the very first appearance of early signs in the sympathizing eye.\n- Sympathizing Eye: Aggressive, long-term treatment of the iridocyclitis using intensive local and systemic corticosteroids.',
    isClinical: true,
    topic: 'Penetrating Injuries & Sympathetic Ophthalmitis'
  }
];
