// 大阿爾卡納牌數據（22張）
const majorArcana = [
    {
        id: 0,
        name: "愚者",
        english_name: "The Fool",
        image: "images/cards/fool.jpg",
        meaning: "新的開始，冒險，自發性，潛力，自由精神，天真，不顧一切的行動。愚者代表著一段新旅程的開始，鼓勵你敞開心扜接受新的可能性，不要害怕冒險。",
        english_meaning: "New beginnings, adventure, spontaneity, potential, free spirit, innocence, reckless action. The Fool represents the start of a new journey, encouraging you to open your heart to new possibilities and not be afraid to take risks.",
        reversed_name: "愚者（逆位）",
        reversed_english_name: "The Fool (Reversed)",
        reversed_meaning: "魯莽，過度冒險，不負責任，猶豫不決，停滯不前。逆位愚者警告你不要做出不明智的決定，或者提醒你需要更加謹慎地評估風險。也可能表示你害怕踏出第一步，陷入猶豫不決的狀態。",
        reversed_english_meaning: "Recklessness, excessive risk-taking, irresponsibility, hesitation, stagnation. The reversed Fool warns against making unwise decisions or reminds you to assess risks more carefully. It may also indicate fear of taking the first step, leaving you in a state of indecision."
    },
    {
        id: 1,
        name: "魔術師",
        english_name: "The Magician",
        image: "images/cards/magician.jpg",  // 添加.jpg后缀
        meaning: "創造力，技能，意志力，自信，操控，靈巧。魔術師象徵著將想法轉化為現實的能力，提醒你擁有實現目標所需的一切資源和技能。",
        english_meaning: "Creativity, skill, willpower, confidence, manipulation, dexterity. The Magician symbolizes the ability to transform ideas into reality, reminding you that you have all the resources and skills needed to achieve your goals.",
        reversed_name: "魔術師（逆位）",
        reversed_english_name: "The Magician (Reversed)",
        reversed_meaning: "欺騙，操縱，資源浪費，未開發的才能，缺乏計劃。逆位魔術師可能表示你沒有充分利用自己的才能，或者在追求目標時缺乏明確的方向。也可能警告你不要被他人的欺騙或操縱所影響。",
        reversed_english_meaning: "Deception, manipulation, wasted resources, untapped talents, lack of planning. The reversed Magician may indicate that you're not fully utilizing your talents or lack clear direction in pursuing your goals. It may also warn against being influenced by others' deception or manipulation."
    },
    {
        id: 2,
        name: "女祭司",
        english_name: "The High Priestess",
        image: "images/cards/high-priestess.jpg",
        meaning: "直覺，潛意識，神聖女性，內在聲音，洞察力。女祭司鼓勵你信任自己的直覺，傾聽內心的聲音，並探索更深層次的智慧。",
        english_meaning: "Intuition, subconscious, divine feminine, inner voice, insight. The High Priestess encourages you to trust your intuition, listen to your inner voice, and explore deeper levels of wisdom.",
        reversed_name: "女祭司（逆位）",
        reversed_english_name: "The High Priestess (Reversed)",
        reversed_meaning: "隱藏的信息，忽視直覺， surface knowledge，過度理性，內在混亂。逆位女祭司可能表示你忽視了自己的直覺或內在智慧，過於依賴邏輯和理性。也可能意味著你需要更深入地探索自己的潛意識，以發現被隱藏的真相。",
        reversed_english_meaning: "Hidden information, ignored intuition, surface knowledge, excessive rationality, inner confusion. The reversed High Priestess may indicate that you're ignoring your intuition or inner wisdom, relying too much on logic and rationality. It may also suggest a need to explore your subconscious more deeply to discover hidden truths."
    },
    {
        id: 3,
        name: "皇后",
        english_name: "The Empress",
        image: "images/cards/empress.jpg",
        meaning: "豐饒，母性，創造力，熱情，感官享受，自然。皇后代表著創造和滋養的能量，提醒你關注生活的豐盛和美麗。",
        english_meaning: "Abundance, motherhood, creativity, passion, sensual pleasure, nature. The Empress represents creative and nurturing energy, reminding you to pay attention to the abundance and beauty in life.",
        reversed_name: "皇后（逆位）",
        reversed_english_name: "The Empress (Reversed)",
        reversed_meaning: "創造力阻滯，依賴，過度保護，自我忽視，不安全感。逆位皇后可能表示你的創造力受到阻礙，或者在照顧他人的同時ignore了自己的需求。也可能意味著你需要重新連接自然和身體的智慧，找回內在的豐盛感。",
        reversed_english_meaning: "Creative blocks, dependency, overprotection, self-neglect, insecurity. The reversed Empress may indicate blocked creativity or neglecting your own needs while caring for others. It may also suggest a need to reconnect with nature and bodily wisdom to regain a sense of inner abundance."
    },
    {
        id: 4,
        name: "皇帝",
        english_name: "The Emperor",
        image: "images/cards/emperor.jpg",
        meaning: "權威，結構，控制，父愛，保護，領導力。皇帝象徵著穩定和秩序，提醒你建立明確的界限和結構，以實現長期目標。",
        english_meaning: "Authority, structure, control, fatherhood, protection, leadership. The Emperor symbolizes stability and order, reminding you to establish clear boundaries and structures to achieve long-term goals.",
        reversed_name: "皇帝（逆位）",
        reversed_english_name: "The Emperor (Reversed)",
        reversed_meaning: "專制，僵化，過度控制，優柔寡斷，權力濫用。逆位皇帝可能表示你過於嚴格或控制，缺乏靈活性。也可能意味著你在面對需要果斷決策的情況時猶豫不決，或者在你的жи life 中缺乏必要的結構和秩序。",
        reversed_english_meaning: "Domination, rigidity, excessive control, indecision, abuse of power. The reversed Emperor may indicate being too rigid or controlling, lacking flexibility. It may also suggest indecisiveness when faced with situations requiring firm decisions, or a lack of necessary structure and order in your life."
    },
    {
        id: 5,
        name: "教皇",
        english_name: "The Hierophant",
        image: "images/cards/hierophant.jpg",
        meaning: "傳統，精神指導，遵守規則，信仰，教育，群體認同。教皇代表著傳統智慧和精神教導，鼓勵你尋求指導或遵循既定的路徑。",
        english_meaning: "Tradition, spiritual guidance, conformity, belief systems, education, group identity. The Hierophant represents traditional wisdom and spiritual teaching, encouraging you to seek guidance or follow established paths.",
        reversed_name: "教皇（逆位）",
        reversed_english_name: "The Hierophant (Reversed)",
        reversed_meaning: "挑戰權威，非傳統選擇，個人信仰，獨立思考，反叛。逆位教皇可能表示你正在質疑傳統信仰或社會規範，尋找更個人化的精神道路。也可能意味著你需要打破常規，以更獨立和創新的方式思考問題。",
        reversed_english_meaning: "Challenging authority, unconventional choices, personal beliefs, independent thinking, rebellion. The reversed Hierophant may indicate questioning traditional beliefs or social norms, seeking a more personalized spiritual path. It may also suggest a need to break from convention and think about issues in a more independent and innovative way."
    },
    {
        id: 6,
        name: "戀人",
        english_name: "The Lovers",
        image: "images/cards/lovers.jpg",
        meaning: "愛情，和諧，關係，價值觀，選擇，結合。戀人牌象徵著重要的選擇和關係，提醒你關注心靈的渴望和真實的連結。",
        english_meaning: "Love, harmony, relationships, values, choices, union. The Lovers card symbolizes important choices and relationships, reminding you to pay attention to your heart's desires and authentic connections.",
        reversed_name: "戀人（逆位）",
        reversed_english_name: "The Lovers (Reversed)",
        reversed_meaning: "不和諧，價值觀衝突，不平衡的關係，壞的選擇，自我懷疑。逆位戀人可能表示關係中的不和諧或溝通問題，或者在面對重要選擇時的猶豫不決。也可能意味著你需要重新評估自己的價值觀和優先事項，以做出更符合真實自我的決定。",
        reversed_english_meaning: "Disharmony, value conflicts, imbalanced relationships, poor choices, self-doubt. The reversed Lovers may indicate disharmony or communication issues in relationships, or indecision when facing important choices. It may also suggest a need to reassess your values and priorities to make decisions more aligned with your authentic self."
    },
    {
        id: 7,
        name: "戰車",
        english_name: "The Chariot",
        image: "images/cards/chariot.jpg",
        meaning: "決心，意志力，勝利，自信，控制，行動。戰車代表著通過意志力和決心克服障礙，鼓勵你保持專注並堅持不懈地追求目標。",
        english_meaning: "Determination, willpower, victory, confidence, control, action. The Chariot represents overcoming obstacles through willpower and determination, encouraging you to stay focused and persistently pursue your goals.",
        reversed_name: "戰車（逆位）",
        reversed_english_name: "The Chariot (Reversed)",
        reversed_meaning: "缺乏方向，挫折，攻擊性，失控，障礙。逆位戰車可能表示你在追求目標時遇到阻礙或缺乏明確方向。也可能意味著你過於強勢或魯莽，需要重新評估自己的策略和方法，找到更平衡的前進方式。",
        reversed_english_meaning: "Lack of direction, frustration, aggression, loss of control, obstacles. The reversed Chariot may indicate obstacles in pursuing your goals or a lack of clear direction. It may also suggest being too forceful or reckless, needing to reassess your strategies and approaches to find a more balanced way forward."
    },
    {
        id: 8,
        name: "力量",
        english_name: "Strength",
        image: "images/cards/strength.jpg",
        meaning: "勇氣，說服力，影響，耐心，柔和的控制，內在力量。力量牌提醒你，真正的力量來自內心的勇氣和耐心，而非外在的強制。",
        english_meaning: "Courage, persuasion, influence, patience, gentle control, inner strength. The Strength card reminds you that true strength comes from inner courage and patience, not external force.",
        reversed_name: "力量（逆位）",
        reversed_english_name: "Strength (Reversed)",
        reversed_meaning: "自我懷疑，弱點，缺乏信心，濫用權力，易怒。逆位力量可能表示你缺乏自信或內在力量，在面對挑戰時感到脆弱。也可能意味著你過於強勢或脾氣暴躁，需要學習更溫和耐心的方式來處理困難情況。",
        reversed_english_meaning: "Self-doubt, weakness, lack of confidence, abuse of power, irritability. The reversed Strength may indicate a lack of confidence or inner strength, feeling vulnerable when facing challenges. It may also suggest being too forceful or short-tempered, needing to learn gentler and more patient ways to handle difficult situations."
    },
    {
        id: 9,
        name: "隱者",
        english_name: "The Hermit",
        image: "images/cards/hermit.jpg",
        meaning: "內省，尋找內在真相，獨處，指導，智慧。隱者鼓勵你花時間獨處，反思生活，尋找內心的智慧和真相。",
        english_meaning: "Introspection, seeking inner truth, solitude, guidance, wisdom. The Hermit encourages you to spend time alone, reflect on life, and find inner wisdom and truth.",
        reversed_name: "隱者（逆位）",
        reversed_english_name: "The Hermit (Reversed)",
        reversed_meaning: "孤獨，社交退縮，過度孤立，拒絕建議，不成熟。逆位隱者可能表示你過度孤立自己，或者在需要與他人連結時過於退縮。也可能意味著你忽視了內在的智慧之聲，需要重新平衡獨處和社交互動的時間。",
        reversed_english_meaning: "Loneliness, social withdrawal, excessive isolation, rejection of advice, immaturity. The reversed Hermit may indicate isolating yourself too much or withdrawing when you need connection with others. It may also suggest ignoring your inner voice of wisdom, needing to rebalance time alone and social interaction."
    },
    {
        id: 10,
        name: "命運之輪",
        english_name: "Wheel of Fortune",
        image: "images/cards/wheel-of-fortune.jpg",
        meaning: "命運，轉折點，機會，變化，循環。命運之輪提醒你生活的變化是不可避免的，鼓勵你適應並owned抱這些變化。",
        english_meaning: "Fate, turning points, opportunity, change, cycles. The Wheel of Fortune reminds you that change in life is inevitable, encouraging you to adapt and embrace these changes.",
        reversed_name: "命運之輪（逆位）",
        reversed_english_name: "Wheel of Fortune (Reversed)",
        reversed_meaning: "不幸，阻力，打破循環，外部控制，缺乏控制。逆位命運之輪可能表示你正經歷一段不順利的時期，或者感到被外部力量所控制。也可能意味著你需要打破負面的循環模式，主動創造自己的命運，而不是被動地接受現狀。",
        reversed_english_meaning: "Bad luck, resistance, breaking cycles, external control, lack of control. The reversed Wheel of Fortune may indicate experiencing a period of misfortune or feeling controlled by external forces. It may also suggest a need to break negative cyclical patterns and actively create your own destiny rather than passively accepting circumstances."
    },
    {
        id: 11,
        name: "正義",
        english_name: "Justice",
        image: "images/cards/justice.jpg",
        meaning: "公正，真相，清晰，因果，法律。正義牌象徵著平衡和公正，提醒你為自己的行為負責，並seekseek真相和公平。",
        english_meaning: "Fairness, truth, clarity, cause and effect, law. The Justice card symbolizes balance and fairness, reminding you to take responsibility for your actions and seek truth and fairness.",
        reversed_name: "正義（逆位）",
        reversed_english_name: "Justice (Reversed)",
        reversed_meaning: "不公正，不平衡，偏見，否認，法律問題。逆位正義可能表示你正經歷或造成不公正的情況，或者逃避對自己行為的責任。也可能意味著你需要更客觀地查看情況，尋找更平衡和公正的解決方案。",
        reversed_english_meaning: "Injustice, imbalance, bias, denial, legal issues. The reversed Justice may indicate experiencing or causing unfair situations, or avoiding responsibility for your actions. It may also suggest a need to view situations more objectively and seek more balanced and fair solutions."
    },
    {
        id: 12,
        name: "倒吊人",
        english_name: "The Hanged Man",
        image: "images/cards/hanged-man.jpg",
        meaning: "暫停，放棄，新視角，犧牲。吊人鼓勵你暫停並從不同角度查看情況，有時候放手反而能獲得新的洞見。",
        english_meaning: "Suspension, letting go, new perspectives, sacrifice. The Hanged Man encourages you to pause and view situations from different angles; sometimes letting go can bring new insights.",
        reversed_name:"倒吊人（逆位）",
        reversed_english_name: "The Hanged Man (Reversed)",
        reversed_meaning: "拖延，抵抗，無用的犧牲，執著，停滯。逆位吊人可能表示你不願意放手或改變視角，過於執著於某種想法或方法。也可能意味著你在做出不必要的犧牲，或者在需要行動的時候過度猶豫和拖延。",
        reversed_english_meaning: "Procrastination, resistance, useless sacrifice, attachment, stagnation. The reversed Hanged Man may indicate unwillingness to let go or change perspective, being too attached to certain ideas or approaches. It may also suggest making unnecessary sacrifices or excessive hesitation and delay when action is needed."
    },
    {
        id: 13,
        name: "死神",
        english_name: "Death",
        image: "images/cards/death.jpg",
        meaning: "結束，變化，轉變，過渡。死神代表著一個階段的結束和新階段的開始，提醒你放下過去才能迎接新的開始。",
        english_meaning: "Endings, change, transformation, transition. Death represents the end of one phase and the beginning of a new one, reminding you to let go of the past to welcome new beginnings.",
        reversed_name: "死神（逆位）",
        reversed_english_name: "Death (Reversed)",
        reversed_meaning: "抗拒變化，停滯，無法放手，恐懼轉變，延遲的轉變。逆位死神可能表示你拒絕必要的變化或結束，無法放下過去的人事物。也可能意味著轉變正在發生，但過程緩慢或困難，需要你更積極地接受和適應這些變化。",
        reversed_english_meaning: "Resistance to change, stagnation, inability to let go, fear of transformation, delayed transition. The reversed Death may indicate resisting necessary changes or endings, unable to release past attachments. It may also suggest that transformation is happening but the process is slow or difficult, requiring you to more actively accept and adapt to these changes."
    },
    {
        id: 14,
        name: "節制",
        english_name: "Temperance",
        image: "images/cards/temperance.jpg",
        meaning: "平衡，適度，耐心，調和，目的。節制牌鼓勵你尋找生活的平衡，並以耐心和溫和的方式處理事情。",
        english_meaning: "Balance, moderation, patience, harmony, purpose. The Temperance card encourages you to find balance in life and handle things with patience and gentleness.",
        reversed_name: "節制（逆位）",
        reversed_english_name: "Temperance (Reversed)",
        reversed_meaning: "不平衡，過度，衝突，缺乏耐心，不協調。逆位節制可能表示你的生活失去平衡，或者在某些方面表現得過度或極端。也可能意味著你缺乏耐心或和諧感，需要重新調整生活的各個方面，找回內在的平靜和平衡。",
        reversed_english_meaning: "Imbalance, excess, conflict, impatience, disharmony. The reversed Temperance may indicate your life being out of balance, or showing excess or extremes in certain areas. It may also suggest a lack of patience or harmony, needing to readjust various aspects of life to regain inner peace and balance."
    },
    {
        id: 15,
        name: "惡魔",
        english_name: "The Devil",
        image: "images/cards/devil.jpg",
        meaning: "束縛，物質主義，沉迷，負面思想，限制。惡魔牌提醒你注意那些限制你的模式和依附，鼓勵你尋找自由。",
        english_meaning: "Bondage, materialism, addiction, negative thoughts, restrictions. The Devil card reminds you to be aware of patterns and attachments that limit you, encouraging you to seek freedom.",
        reversed_name: "惡魔（逆位）",
        reversed_english_name: "The Devil (Reversed)",
        reversed_meaning: "釋放，擺脫束縛，重獲自由，克服誘惑，覺醒。逆位惡魔可能表示你正在擺脫限制性的模式、關係或belief，重新獲得自由和控制權。也可能意味著你開始recognize自己的負面行為或依附，並採取積極步驟來改變這些模式。",
        reversed_english_meaning: "Release, breaking free, regaining freedom, overcoming temptation, awakening. The reversed Devil may indicate breaking free from restrictive patterns, relationships, or beliefs, regaining freedom and control. It may also suggest becoming aware of your negative behaviors or attachments and taking positive steps to change these patterns."
    },
    {
        id: 16,
        name: "高塔",
        english_name: "The Tower",
        image: "images/cards/tower.jpg",
        meaning: "突然變化，混亂，啟示，覺醒，真相。高塔象徵著意想不到的變化和舊有結構的崩塌，雖然可能令人不安，但最終會帶來新的視角。",
        english_meaning: "Sudden change, chaos, revelation, awakening, truth. The Tower symbolizes sudden changes and the collapse of old structures; although it may be unsettling, it ultimately brings new perspectives.",
        reversed_name: "高塔（逆位）",
        reversed_english_name: "The Tower (Reversed)",
        reversed_meaning: "避免災難，延遲的變化，恐懼變化，內在動盪。逆位高塔可能表示你正在避免必要的破壞或變化，或者變化的過程較為緩慢和漸進。也可能意味著你正經歷內在而非外在的動盪，需要重新評估自己的belief和思維結構。",
        reversed_english_meaning: "Avoiding disaster, delayed change, fear of change, inner turmoil. The reversed Tower may indicate avoiding necessary disruption or change, or the process of change being slower and more gradual. It may also suggest experiencing turmoil internally rather than externally, needing to reassess your beliefs and mental structures."
    },
    {
        id: 17,
        name: "星星",
        english_name: "The Star",
        image: "images/cards/star.jpg",
        meaning: "希望，信念，目的，更新，靈感。星星牌帶來希望和信心，提醒你即使在黑暗時刻也要保持樂觀和信念。",
        english_meaning: "Hope, faith, purpose, renewal, inspiration. The Star brings hope and confidence, reminding you to maintain optimism and faith even in dark times.",
        reversed_name: "星星（逆位）",
        reversed_english_name: "The Star (Reversed)",
        reversed_meaning: "失望，悲觀，缺乏信念，靈感枯竭，失去希望。逆位星星可能表示你感到失望或對未來缺乏希望，失去了信心和樂觀態度。也可能意味著你需要重新連接自己的靈感源泉，找回內在的希望和信念。",
        reversed_english_meaning: "Disappointment, pessimism, lack of faith, creative blocks, hopelessness. The reversed Star may indicate feeling disappointed or lacking hope for the future, having lost faith and optimism. It may also suggest a need to reconnect with your sources of inspiration and creativity, rediscovering inner hope and faith."
    },
    {
        id: 18,
        name: "月亮",
        english_name: "The Moon",
        image: "images/cards/moon.jpg",
        meaning: "幻覺，恐懼，焦慮，潛意識，直覺。月亮代表著面對恐懼和不確定性，鼓勵你信任直覺並探索潛意識。",
        english_meaning: "Illusion, fear, anxiety, subconscious, intuition. The Moon represents facing fears and uncertainties, encouraging you to trust your intuition and explore your subconscious.",
        reversed_name: "月亮（逆位）",
        reversed_english_name: "The Moon (Reversed)",
        reversed_meaning: "釋放恐懼，克服幻覺，隱藏的敵人，混亂減輕，真相顯現。逆位月亮可能表示你正在擺脫恐懼和幻覺，開始看清事物的真相。也可能意味著混亂和不確定性正在減輕，但仍需警惕潛在的欺騙或隱藏的問題。",
        reversed_english_meaning: "Release of fear, overcoming illusion, hidden enemies, confusion diminishing, truth emerging. The reversed Moon may indicate breaking free from fears and illusions, beginning to see things more clearly. It may also suggest confusion and uncertainty diminishing, though caution regarding potential deception or hidden issues is still advised."
    },
    {
        id: 19,
        name: "太陽",
        english_name: "The Sun",
        image: "images/cards/sun.jpg",
        meaning: "快樂，活力，成功，真相，清晰。太陽牌象徵著積極的能量和成功，提醒你享受生活並慶祝成就。",
        english_meaning: "Happiness, vitality, success, truth, clarity. The Sun card symbolizes positive energy and success, reminding you to enjoy life and celebrate achievements.",
        reversed_name: "太陽（逆位）",
        reversed_english_name: "The Sun (Reversed)",
        reversed_meaning: "暫時的不快樂，過度樂觀，不切實際，被遮蔽的真相，延遲的成功。逆位太陽可能表示你正經歷暫時的挫折或不快樂，或者對某事過於樂觀而忽視了現實。也可能意味著成功和快樂即將到來，但可能會有些延遲或障礙需要克服。",
        reversed_english_meaning: "Temporary unhappiness, excessive optimism, unrealistic expectations, obscured truth, delayed success. The reversed Sun may indicate experiencing temporary setbacks or unhappiness, or being overly optimistic about something while ignoring reality. It may also suggest that success and happiness are coming but may be delayed or have obstacles to overcome."
    },
{
    id: 20,
    name: "審判",
    english_name: "Judgement",
    image: "images/cards/judgement.jpg",
    meaning: "重生，內在呼喚，反思，赦免，喚醒。審判牌鼓勵你反思過去，接受真相，並為新的開始做好準備。",
    english_meaning: "Rebirth, inner calling, reflection, forgiveness, awakening. The Judgement card encourages you to reflect on the past, accept the truth, and prepare for a new beginning.",
    reversed_name: "審判（逆位）",
    reversed_english_name: "Judgement (Reversed)",
    reversed_meaning: "自我懷疑，拒絕反思，拒絕改變，後悔，錯失機會。逆位審判可能表示你拒絕面對過去的錯誤或拒絕接受真相，阻礙了個人成長和轉變的機會。也可能意味著你對過去的決定感到後悔，但尚未找到寬恕自己或他人的方法。",
    reversed_english_meaning: "Self-doubt, refusal to reflect, resistance to change, regret, missed opportunities. The reversed Judgement may indicate refusing to face past mistakes or accept the truth, hindering opportunities for personal growth and transformation. It may also suggest feeling regret about past decisions without yet finding ways to forgive yourself or others."
},
{
    id: 21,
    name: "世界",
    english_name: "The World",
    image: "images/cards/world.jpg",
    meaning: "完成，整合，成就，旅行，和諧。世界牌代表著一個週期的完成和成就感，提醒你慶祝成功並準備新的旅程。",
    english_meaning: "Completion, integration, accomplishment, travel, harmony. The World card represents the completion of a cycle and a sense of achievement, reminding you to celebrate success and prepare for a new journey.",
},
{
    id: 22,
    name: "ACE權杖",
    english_name: "Ace of Wands",
    image: "images/cards/Wands01.jpg",
    meaning: "創造力的火花，靈感，新的開始，潛力，熱情，動力。權杖王牌代表著新的創意或項目的開始，充滿了可能性和熱情。",
    english_meaning: "Spark of creativity, inspiration, new beginnings, potential, enthusiasm, drive. The Ace of Wands represents the start of a new creative venture or project, full of possibilities and passion.",
    reversed_name: "權杖王牌（逆位）",
    reversed_english_name: "Ace of Wands (Reversed)",
    reversed_meaning: "創意阻滯，延遲的開始，缺乏熱情，動機不足，能量分散。逆位權杖王牌可能表示你的創意或項目遇到了阻礙，或者你缺乏推動它前進的熱情和動力。",
    reversed_english_meaning: "Creative blocks, delayed start, lack of enthusiasm, insufficient motivation, scattered energy. The reversed Ace of Wands may indicate that your creative venture or project is facing obstacles, or you lack the passion and drive to move it forward.",
},
{
    id: 23,
    name: "權杖二",
    english_name: "Two of Wands",
    image: "images/cards/Wands02.jpg",
    meaning: "計劃，決策，未來展望，進步，個人力量。權杖二代表著規劃未來和做出決策的時刻，你站在十字路口，需要選擇前進的方向。",
    english_meaning: "Planning, decisions, future vision, progress, personal power. The Two of Wands represents a moment of planning for the future and making decisions; you stand at a crossroads, needing to choose your direction forward.",
    reversed_name: "權杖二（逆位）",
    reversed_english_name: "Two of Wands (Reversed)",
    reversed_meaning: "猶豫不決，缺乏計劃，恐懼未知，受限的選擇，個人力量減弱。逆位權杖二可能表示你在做決定時感到猶豫或害怕，或者你的計劃缺乏明確的方向和目標。",
    reversed_english_meaning: "Creative blocks, delayed start, lack of enthusiasm, insufficient motivation, scattered energy. The reversed Ace of Wands may indicate that your creative venture or project is facing obstacles, or you lack the passion and drive to move it forward.",
},
{
    id: 24,
    name: "權杖三",
    english_name: "Three of Wands",
    image: "images/cards/Wands03.jpg",
    meaning: "遠見，擴展，領導，成就，探索。權杖三代表著展望未來並擴展視野，你已經邁出了第一步，現在正在等待努力的成果。",
    english_meaning: "Foresight, expansion, leadership, achievement, exploration. The Three of Wands represents looking to the future and expanding your horizons; you've taken the first steps and are now waiting for your efforts to bear fruit.",
    reversed_name: "權杖三（逆位）",
    reversed_english_name: "Three of Wands (Reversed)",
    reversed_meaning: "延遲，失望，缺乏遠見，阻礙，有限的成功。逆位權杖三可能表示你的計劃遇到了阻礙或延遲，或者你缺乏長遠的視野和規劃。也可能意味著你需要重新評估自己的目標和期望。",
    reversed_english_meaning: "Delays, disappointment, lack of foresight, obstacles, limited success. The reversed Three of Wands may indicate that your plans are facing obstacles or delays, or you lack long-term vision and planning. It may also suggest a need to reassess your goals and expectations.",
  
},
{
    id: 25,
    name: "權杖四",
    english_name: "Four of Wands",
    image: "images/cards/Wands04.jpg",
    meaning: "慶祝，和諧，婚姻，家庭，社區，成就感。權杖四代表著慶祝成就和重要里程碑，提醒你欣賞生活中的和諧與穩定。",
    english_meaning: "Celebration, harmony, marriage, home, community, sense of achievement. The Four of Wands represents celebrating achievements and important milestones, reminding you to appreciate the harmony and stability in your life.",
    reversed_name: "權杖四（逆位）",
    reversed_english_name: "Four of Wands (Reversed)",
    reversed_meaning: "不穩定，過渡，家庭緊張，慶祝延遲，不和諧。逆位權杖四可能表示家庭或社區中的不和諧，或者你正處於不穩定的過渡期。也可能意味著慶祝活動被延遲或不如預期。",
    reversed_english_meaning: "Instability, transition, family tensions, delayed celebration, disharmony. The reversed Four of Wands may indicate disharmony in the home or community, or that you're in an unstable period of transition. It may also suggest that celebrations are delayed or not as expected.",
   
},
{
    id: 26,
    name: "權杖五",
    english_name: "Five of Wands",
    image: "images/cards/Wands05.jpg",
    meaning: "競爭，衝突，爭論，緊張，多樣性。權杖五代表著面對挑戰和競爭，提醒你這些衝突可能是成長和進步的催化劑。",
    english_meaning: "Competition, conflict, disagreements, tension, diversity. The Five of Wands represents facing challenges and competition, reminding you that these conflicts can be catalysts for growth and progress.",
    reversed_name: "權杖五（逆位）",
    reversed_english_name: "Five of Wands (Reversed)",
    reversed_meaning: "避免衝突，和解，協議，內在衝突，緊張緩解。逆位權杖五可能表示衝突正在緩解或你正在尋求和解。也可能意味著你在避免必要的衝突，或者將外在衝突內化為內在掙扎。",
    reversed_english_meaning: "Avoiding conflict, resolution, agreement, inner conflict, tension release. The reversed Five of Wands may indicate that conflicts are easing or you're seeking resolution. It may also suggest that you're avoiding necessary confrontation, or internalizing external conflicts as inner struggles.",
   
},
{
    id: 27,
    name: "權杖六",
    english_name: "Six of Wands",
    image: "images/cards/Wands06.jpg",
    meaning: "勝利，成功，公開認可，自信，進步。權杖六代表著成功和獲得認可，你的努力得到了回報和讚賞。",
    english_meaning: "Victory, success, public recognition, confidence, progress. The Six of Wands represents success and receiving recognition; your efforts have been rewarded and appreciated.",
    reversed_name: "權杖六（逆位）",
    reversed_english_name: "Six of Wands (Reversed)",
    reversed_meaning: "自負，失寵，失敗，過度自信，延遲的成功。逆位權杖六可能表示你的成功受到阻礙，或者你因自負而面臨挫折。也可能意味著你需要更謙虛地看待自己的成就，或者重新評估你的期望。",
    reversed_english_meaning: "Egotism, fall from grace, failure, overconfidence, delayed success. The reversed Six of Wands may indicate that your success is being hindered, or you're facing setbacks due to egotism. It may also suggest a need to be more humble about your achievements or reassess your expectations.",
   
},
{
    id: 28,
    name: "權杖七",
    english_name: "Seven of Wands",
    image: "images/cards/Wands07.jpg",
    meaning: "挑戰，競爭，堅持，防禦，毅力。權杖七代表著面對挑戰並堅守立場，提醒你保持堅定並捍衛自己的信念和成就。",
    english_meaning: "Challenge, competition, perseverance, defensiveness, determination. The Seven of Wands represents facing challenges and standing your ground, reminding you to stay firm and defend your beliefs and achievements.",
    reversed_name: "權杖七（逆位）",
    reversed_english_name: "Seven of Wands (Reversed)",
    reversed_meaning: "屈服，壓倒性，猶豫不決，缺乏信心，被挑戰。逆位權杖七可能表示你感到被挑戰或壓力所壓倒，或者在面對困難時缺乏信心。也可能意味著你需要重新評估哪些戰鬥值得你去打，哪些應該放棄。",
    reversed_english_meaning: "Giving in, overwhelmed, indecision, lack of confidence, being challenged. The reversed Seven of Wands may indicate feeling overwhelmed by challenges or pressure, or lacking confidence when facing difficulties. It may also suggest a need to reassess which battles are worth fighting and which should be abandoned.",
    
},
{
    id: 29,
    name: "權杖八",
    english_name: "Eight of Wands",
    image: "images/cards/Wands08.jpg",
    meaning: "速度，行動，旅行，進展，快速發展。權杖八代表著事情快速發展和進展，提醒你抓住機會並保持靈活。",
    english_meaning: "Speed, action, travel, progress, rapid developments. The Eight of Wands represents things moving quickly and making progress, reminding you to seize opportunities and stay flexible.",
    reversed_name: "權杖八（逆位）",
    reversed_english_name: "Eight of Wands (Reversed)",
    reversed_meaning: "延遲，挫折，內在衝突，匆忙的決定，減速。逆位權杖八可能表示進展受阻或延遲，或者你在做決定時過於匆忙。也可能意味著你需要放慢腳步，更仔細地考慮你的選擇和行動。",
    reversed_english_meaning: "Delays, frustration, inner conflict, hasty decisions, slowing down. The reversed Eight of Wands may indicate hindered progress or delays, or that you're being too hasty in your decisions. It may also suggest a need to slow down and consider your choices and actions more carefully.",
   
},
{
    id: 30,
    name: "權杖九",
    english_name: "Nine of Wands",
    image: "images/cards/Wands09.jpg",
    meaning: "堅持，毅力，最後的努力，警惕，準備。權杖九代表著面對最後的挑戰並堅持到底，提醒你不要在即將成功時放棄。",
    english_meaning: "Persistence, resilience, last stand, vigilance, preparation. The Nine of Wands represents facing final challenges and persevering, reminding you not to give up when success is within reach.",
    reversed_name: "權杖九（逆位）",
    reversed_english_name: "Nine of Wands (Reversed)",
    reversed_meaning: "精疲力竭，放棄，偏執，防禦性，缺乏耐力。逆位權杖九可能表示你感到精疲力竭或準備放棄，或者你過於防禦和偏執。也可能意味著你需要重新評估自己的能力和限制，找到更可持續的前進方式。",
    reversed_english_meaning: "Exhaustion, giving up, paranoia, defensiveness, lack of stamina. The reversed Nine of Wands may indicate feeling exhausted or ready to give up, or being overly defensive and paranoid. It may also suggest a need to reassess your capabilities and limitations, finding a more sustainable way forward.",
   
},
{
    id: 31,
    name: "權杖十",
    english_name: "Ten of Wands",
    image: "images/cards/Wands10.jpg",
    meaning: "負擔，責任，壓力，堅持，成就。權杖十代表著承擔過多責任和壓力，提醒你需要評估哪些負擔是必要的，哪些可以放下。",
    english_meaning: "Burden, responsibility, pressure, perseverance, accomplishment. The Ten of Wands represents carrying too many responsibilities and pressures, reminding you to assess which burdens are necessary and which can be set down.",
    reversed_name: "權杖十（逆位）",
    reversed_english_name: "Ten of Wands (Reversed)",
    reversed_meaning: "放下負擔，委派，壓力緩解，逃避責任，精疲力竭。逆位權杖十可能表示你正在放下一些負擔或學會委派任務，減輕壓力。也可能意味著你完全逃避責任，或者已經達到了精疲力竭的極限。",
    reversed_english_meaning: "Laying down burdens, delegation, stress relief, avoiding responsibility, burnout. The reversed Ten of Wands may indicate that you're setting down some burdens or learning to delegate, easing pressure. It may also suggest completely avoiding responsibilities, or having reached a breaking point of burnout.",
   
},
{
    id: 32,
    name: "權杖侍者",
    english_name: "Page of Wands",
    image: "images/cards/Wands11.jpg",
    meaning: "熱情，探索，發現，可能性，自由精神。權杖侍者代表著新的創意和機會的開始，鼓勵你保持好奇心和冒險精神。",
    english_meaning: "Enthusiasm, exploration, discovery, possibilities, free spirit. The Page of Wands represents the beginning of new creative ideas and opportunities, encouraging you to maintain curiosity and a sense of adventure.",
    reversed_name: "權杖侍者（逆位）",
    reversed_english_name: "Page of Wands (Reversed)",
    reversed_meaning: "缺乏方向，拖延，不穩定，壞消息，熱情減退。逆位權杖侍者可能表示你的創意或計劃缺乏方向，或者你在拖延重要的開始。也可能意味著你的熱情正在減退，需要重新點燃你的激情和好奇心。",
    reversed_english_meaning: "Lack of direction, procrastination, instability, bad news, diminished enthusiasm. The reversed Page of Wands may indicate that your creative ideas or plans lack direction, or you're procrastinating on important beginnings. It may also suggest that your enthusiasm is waning, needing to reignite your passion and curiosity.",
 
},
{
    id: 33,
    name: "權杖騎士",
    english_name: "Knight of Wands",
    image: "images/cards/Wands12.jpg",
    meaning: "行動，冒險，衝動，熱情，魅力。權杖騎士代表著充滿熱情和能量地追求目標，鼓勵你勇敢前進並抓住機會。",
    english_meaning: "Action, adventure, impulsiveness, passion, charm. The Knight of Wands represents pursuing goals with passion and energy, encouraging you to move forward boldly and seize opportunities.",
    reversed_name: "權杖騎士（逆位）",
    reversed_english_name: "Knight of Wands (Reversed)",
    reversed_meaning: "魯莽，衝動，挫折，延遲，不耐煩。逆位權杖騎士可能表示你的行動過於魯莽或衝動，缺乏必要的計劃和考慮。也可能意味著你感到受阻或不耐煩，需要更有耐心和策略地追求目標。",
    reversed_english_meaning: "Recklessness, impulsivity, frustration, delays, impatience. The reversed Knight of Wands may indicate that your actions are too reckless or impulsive, lacking necessary planning and consideration. It may also suggest feeling blocked or impatient, needing to pursue goals with more patience and strategy.",

},
{
    id: 34,
    name: "權杖王后",
    english_name: "Queen of Wands",
    image: "images/cards/Wands13.jpg",
    meaning: "熱情，自信，社交能力，決斷，魅力。權杖王后代表著充滿熱情和自信地追求目標，鼓勵你展現領導力和魅力。",
    english_meaning: "Passion, confidence, social ability, determination, charm. The Queen of Wands represents pursuing goals with passion and confidence, encouraging you to demonstrate leadership and charisma.",
    reversed_name: "權杖王后（逆位）",
    reversed_english_name: "Queen of Wands (Reversed)",
    reversed_meaning: "要求，專橫，不安全感，嫉妒，脾氣暴躁。逆位權杖王后可能表示你表現得過於專橫或要求過高，或者內心感到不安全和嫉妒。也可能意味著你需要重新平衡自己的熱情和脾氣，找到更和諧的表達方式。",
    reversed_english_meaning: "Demanding, domineering, insecurity, jealousy, temperamental. The reversed Queen of Wands may indicate that you're being too domineering or demanding, or feeling insecure and jealous inside. It may also suggest a need to rebalance your passion and temper, finding more harmonious ways of expression.",
    
},
{
    id: 35,
    name: "權杖國王",
    english_name: "King of Wands",
    image: "images/cards/Wands14.jpg",
    meaning: "領導力，遠見，誠實，創造力，魅力。權杖國王代表著充滿自信和遠見地領導他人，鼓勵你展現權威和創造性思維。",
    english_meaning: "Leadership, vision, honesty, creativity, charm. The King of Wands represents leading others with confidence and vision, encouraging you to demonstrate authority and creative thinking.",
    reversed_name: "權杖國王（逆位）",
    reversed_english_name: "King of Wands (Reversed)",
    reversed_meaning: "專制，自負，無情，魯莽，不寬容。逆位權杖國王可能表示你的領導方式過於專制或自負，缺乏必要的同理心和寬容。也可能意味著你需要更平衡地運用權力和影響力，避免過度控制或操縱他人。",
    reversed_english_meaning: "Tyrannical, arrogant, ruthless, impulsive, intolerant. The reversed King of Wands may indicate that your leadership style is too authoritarian or arrogant, lacking necessary empathy and tolerance. It may also suggest a need to use power and influence more balanced, avoiding excessive control or manipulation of others.",
},
{
    id: 36,
    name: "ACE聖杯",
    english_name: "Ace of Cups",
    image: "images/cards/Cups01.jpg",
    meaning: "情感的新開始，愛，直覺，創造力，精神滿足。聖杯王牌代表著情感或關係的新開始，充滿了愛、喜悅和精神上的滿足。",
    english_meaning: "Emotional new beginning, love, intuition, creativity, spiritual fulfillment. The Ace of Cups represents a new emotional beginning or relationship, filled with love, joy, and spiritual satisfaction.",
    reversed_name: "聖杯王牌（逆位）",
    reversed_english_name: "Ace of Cups (Reversed)",
    reversed_meaning: "情感阻滯，愛的損失，創造力枯竭，精神空虛，錯過的機會。逆位聖杯王牌可能表示你的情感或創造力受到阻礙，或者你錯過了一個情感連接的機會。也可能意味著你需要重新連接自己的情感和直覺，找回內在的滿足感。",
    reversed_english_meaning: "Emotional blockage, loss of love, creative drought, spiritual emptiness, missed opportunity. The reversed Ace of Cups may indicate that your emotions or creativity are blocked, or you've missed an opportunity for emotional connection. It may also suggest a need to reconnect with your emotions and intuition to regain a sense of inner fulfillment.",
},
{
    id: 37,
    name: "聖杯二",
    english_name: "Two of Cups",
    image: "images/cards/Cups02.jpg",
    meaning: "伙伴關係，愛情，吸引力，平衡，和諧。聖杯二代表著兩個人之間的和諧連結，可能是浪漫關係、友誼或業務伙伴關係，基於相互respect和平衡。",
    english_meaning: "Partnership, love, attraction, balance, harmony. The Two of Cups represents a harmonious connection between two people, possibly a romantic relationship, friendship, or business partnership, based on mutual respect and balance.",
    reversed_name: "聖杯二（逆位）",
    reversed_english_name: "Two of Cups (Reversed)",
    reversed_meaning: "關係緊張，溝通不良，不平衡的付出，分離，失去吸引力。逆位聖杯二可能表示關係中的不和諧或溝通問題，可能是不平衡的付出或情感連結的減弱。",
    reversed_english_meaning: "Relationship tension, poor communication, imbalanced giving, separation, loss of attraction. The reversed Two of Cups may indicate disharmony or communication issues in a relationship, possibly imbalanced giving or weakening emotional connection.",
},
{
    id: 38,
    name: "聖杯三",
    english_name: "Three of Cups",
    image: "images/cards/Cups03.jpg",
    meaning: "慶祝，友誼，社交，團體活動，歡樂。聖杯三代表著與朋友或親人共度歡樂時光，慶祝成就或重要事件，享受社交活動和團體支持。",
    english_meaning: "Celebration, friendship, socializing, group activities, joy. The Three of Cups represents enjoying happy times with friends or loved ones, celebrating achievements or significant events, enjoying social activities and group support.",
    reversed_name: "聖杯三（逆位）",
    reversed_english_name: "Three of Cups (Reversed)",
    reversed_meaning: "過度放縱，群體排斥，孤獨，慶祝結束，三角關係。逆位聖杯三可能表示社交活動的過度或放縱，或者感到被群體排斥或孤立。也可能意味著慶祝活動的結束，或者涉及複雜的三角關係。",
    reversed_english_meaning: "Overindulgence, group exclusion, loneliness, end of celebration, third-party involvement. The reversed Three of Cups may indicate excess or overindulgence in social activities, or feeling excluded or isolated from a group. It may also suggest the end of celebrations, or involvement in complicated triangular relationships.",
    
},
{
    id: 39,
    name: "聖杯四",
    english_name: "Four of Cups",
    image: "images/cards/Cups04.jpg",
    meaning: "沉思，冥想，不滿足，重新評估，厭倦。聖杯四代表著情感上的停滯或不滿足，可能對現有的選擇感到厭倦，需要內省和重新評估。",
    english_meaning: "Contemplation, meditation, dissatisfaction, reevaluation, apathy. The Four of Cups represents emotional stagnation or dissatisfaction, possibly feeling bored with existing options, needing introspection and reevaluation.",
    reversed_name: "聖杯四（逆位）",
    reversed_english_name: "Four of Cups (Reversed)",
    reversed_meaning: "新機會，行動，接受，情感開放，重新激發興趣。逆位聖杯四可能表示你開始注意到新的機會或可能性，從情感停滯中走出來，重新對生活產生興趣和熱情。",
    reversed_english_meaning: "New opportunities, action, acceptance, emotional openness, renewed interest. The reversed Four of Cups may indicate noticing new opportunities or possibilities, moving out of emotional stagnation, regaining interest and enthusiasm for life.",
},
{
    id: 40,
    name: "聖杯五",
    english_name: "Five of Cups",
    image: "images/cards/Cups05.jpg",
    meaning: "失落，悲傷，遺憾，失望，悲觀。聖杯五代表著經歷情感上的損失或失望，專注於已經失去的東西，而忽視仍然擁有的。",
    english_meaning: "Loss, grief, regret, disappointment, pessimism. The Five of Cups represents experiencing emotional loss or disappointment, focusing on what has been lost while overlooking what still remains.",
    reversed_name: "聖杯五（逆位）",
    reversed_english_name: "Five of Cups (Reversed)",
    reversed_meaning: "接受，前進，新希望，恢復，寬恕。逆位聖杯五可能表示你正在從失落或悲傷中恢復，開始接受過去並向前看，找到新的希望和可能性。",
    reversed_english_meaning: "Acceptance, moving on, new hope, recovery, forgiveness. The reversed Five of Cups may indicate recovering from loss or grief, beginning to accept the past and look forward, finding new hope and possibilities.",
},
{
    id: 41,
    name: "聖杯六",
    english_name: "Six of Cups",
    image: "images/cards/Cups06.jpg",
    meaning: "懷舊，童年回憶，純真，喜悅，禮物，舊友重聚。聖杯六代表著對過去美好時光的回憶，提醒你珍惜純真和簡單的快樂。",
    english_meaning: "Nostalgia, childhood memories, innocence, joy, gifts, reunion with old friends. The Six of Cups represents remembering good times from the past, reminding you to cherish innocence and simple pleasures.",
    reversed_name: "聖杯六（逆位）",
    reversed_english_name: "Six of Cups (Reversed)",
    reversed_meaning: "沉溺過去，不切實際的回憶，成長，向前看，擺脫舊模式。逆位聖杯六可能表示你過於沉溺於過去，無法向前邁進，或者你需要放下童年的負面經歷，接受成長和變化。",
    reversed_english_meaning: "Living in the past, unrealistic memories, moving forward, letting go of old patterns, growth. The reversed Six of Cups may indicate being too caught up in the past, unable to move forward, or needing to release negative childhood experiences and embrace growth and change.",
    
},
{
    id: 42,
    name: "聖杯七",
    english_name: "Seven of Cups",
    image: "images/cards/Cups07.jpg",
    meaning: "選擇，幻想，幻覺，誘惑，願望。聖杯七代表著面對多種可能性和選擇時的困惑，提醒你區分真實與幻想，做出明智的決定。",
    english_meaning: "Choices, fantasy, illusion, temptation, wishful thinking. The Seven of Cups represents confusion when faced with multiple possibilities and choices, reminding you to distinguish between reality and fantasy to make wise decisions.",
    reversed_name: "聖杯七（逆位）",
    reversed_english_name: "Seven of Cups (Reversed)",
    reversed_meaning: "清晰的選擇，決心，意志力，克服誘惑，現實主義。逆位聖杯七可能表示你開始看清現實，擺脫幻想，能夠做出更明智和實際的選擇。也可能意味著你正在集中注意力，確定自己真正想要的是什麼。",
    reversed_english_meaning: "Clarity of choice, determination, willpower, overcoming temptation, realism. The reversed Seven of Cups may indicate beginning to see reality clearly, moving away from fantasies, and making wiser and more practical choices. It may also suggest focusing your attention and determining what you truly want.",
    
},
{
    id: 43,
    name: "聖杯八",
    english_name: "Eight of Cups",
    image: "images/cards/Cups08.jpg",
    meaning: "放棄，前進，尋找更深層次的意義，離開舒適區。聖杯八代表著離開熟悉的環境或關係，尋求更有意義的體驗和更深層次的滿足。",
    english_meaning: "Abandonment, moving on, seeking deeper meaning, leaving comfort zone. The Eight of Cups represents leaving familiar environments or relationships to seek more meaningful experiences and deeper fulfillment.",
    reversed_name: "聖杯八（逆位）",
    reversed_english_name: "Eight of Cups (Reversed)",
    reversed_meaning: "猶豫不決，害怕改變，停滯，回歸，繼續嘗試。逆位聖杯八可能表示你不願離開不再服務於你的情況，或者你在是否應該堅持還是放棄之間猶豫不決。也可能意味著你在重新評估自己的選擇，或者回到之前離開的情況。",
    reversed_english_meaning: "Indecision, fear of change, stagnation, returning, trying again. The reversed Eight of Cups may indicate unwillingness to leave situations that no longer serve you, or hesitation between persisting and giving up. It may also suggest reevaluating your choices or returning to situations you previously left.",
    
},
{
    id: 44,
    name: "聖杯九",
    english_name: "Nine of Cups",
    image: "images/cards/Cups09.jpg",
    meaning: "滿足，願望實現，豐盛，幸福，情感滿足。聖杯九被稱為「願望牌」，代表著願望的實現和情感上的滿足，提醒你感恩和享受生活的豐盛。",
    english_meaning: "Satisfaction, wish fulfillment, abundance, happiness, emotional fulfillment. The Nine of Cups is known as the 'wish card,' representing the fulfillment of wishes and emotional contentment, reminding you to be grateful and enjoy life's abundance.",
    reversed_name: "聖杯九（逆位）",
    reversed_english_name: "Nine of Cups (Reversed)",
    reversed_meaning: "物質主義，膚淺的滿足，過度放縱，不滿足，內在空虛。逆位聖杯九可能表示表面的滿足掩蓋著更深層次的不滿或空虛，或者你的願望實現後並不如預期那樣令人滿意。也可能意味著你需要尋找更持久和真實的滿足來源。",
    reversed_english_meaning: "Materialism, superficial satisfaction, overindulgence, dissatisfaction, inner emptiness. The reversed Nine of Cups may indicate surface contentment masking deeper dissatisfaction or emptiness, or wishes being fulfilled but not being as satisfying as expected. It may also suggest a need to find more lasting and authentic sources of fulfillment.",
   
},
{
    id: 45,
    name: "聖杯十",
    english_name: "Ten of Cups",
    image: "images/cards/Cups10.jpg",
    meaning: "家庭和諧，完美的愛，和平，持久的幸福，情感安全。聖杯十代表著情感上的圓滿和家庭幸福，象徵著和諧、愛與支持的理想狀態。",
    english_meaning: "Family harmony, perfect love, peace, lasting happiness, emotional security. The Ten of Cups represents emotional fulfillment and family happiness, symbolizing an ideal state of harmony, love, and support.",
    reversed_name: "聖杯十（逆位）",
    reversed_english_name: "Ten of Cups (Reversed)",
    reversed_meaning: "家庭不和，破碎的夢想，表面和諧，價值觀衝突，失去連結。逆位聖杯十可能表示家庭或關係中的不和諧，或者表面的幸福掩蓋著更深層次的問題。也可能意味著你需要重新評估什麼才是真正的幸福，以及如何在關係中創造更真實的連結。",
    reversed_english_meaning: "Family discord, broken dreams, surface harmony, value conflicts, disconnection. The reversed Ten of Cups may indicate disharmony in family or relationships, or surface happiness masking deeper issues. It may also suggest a need to reassess what true happiness means and how to create more authentic connections in relationships.",
    
},
{
    id: 46,
    name: "聖杯侍者",
    english_name: "Page of Cups",
    image: "images/cards/Cups11.jpg",
    meaning: "創意靈感，直覺訊息，好奇心，情感開放，新的感情。聖杯侍者代表著情感上的新開始和創意靈感，鼓勵你保持好奇心和開放的心態。",
    english_meaning: "Creative inspiration, intuitive messages, curiosity, emotional openness, new feelings. The Page of Cups represents emotional new beginnings and creative inspiration, encouraging curiosity and an open heart.",
    reversed_name: "聖杯侍者（逆位）",
    reversed_english_name: "Page of Cups (Reversed)",
    reversed_meaning: "情感不成熟，創意阻滯，壓抑的感受，情感混亂，壞消息。逆位聖杯侍者可能表示情感上的不成熟或困惑，或者你壓抑了自己的創造力和感受。也可能意味著你需要更深入地探索自己的情感世界，學習更健康的表達方式。",
    reversed_english_meaning: "Emotional immaturity, creative blocks, repressed feelings, emotional confusion, bad news. The reversed Page of Cups may indicate emotional immaturity or confusion, or suppressing your creativity and feelings. It may also suggest a need to explore your emotional world more deeply and learn healthier ways of expression.",
    
},
{
    id: 47,
    name: "聖杯騎士",
    english_name: "Knight of Cups",
    image: "images/cards/Cups12.jpg",
    meaning: "浪漫，魅力，想像力，情感提議，追求理想。聖杯騎士代表著浪漫的追求者和夢想家，象徵著帶著熱情和理想主義追求情感目標。",
    english_meaning: "Romance, charm, imagination, emotional proposals, pursuit of ideals. The Knight of Cups represents a romantic pursuer and dreamer, symbolizing the pursuit of emotional goals with passion and idealism.",
    reversed_name: "聖杯騎士（逆位）",
    reversed_english_name: "Knight of Cups (Reversed)",
    reversed_meaning: "情感操縱，不切實際，情緒化，失望，欺騙。逆位聖杯騎士可能表示過度情緒化或不切實際的浪漫幻想，或者在感情中缺乏真誠和承諾。也可能意味著你需要更務實地看待感情，平衡理想與現實。",
    reversed_english_meaning: "Emotional manipulation, unrealistic, moody, disappointment, deception. The reversed Knight of Cups may indicate being overly emotional or having unrealistic romantic fantasies, or lacking sincerity and commitment in relationships. It may also suggest a need to view relationships more practically, balancing idealism with reality.",
    
},
{
    id: 48,
    name: "聖杯皇后",
    english_name: "Queen of Cups",
    image: "images/cards/Cups13.jpg",
    meaning: "情感智慧，同理心，直覺，關愛，情感支持。聖杯皇后代表著情感上的成熟和智慧，象徵著深刻的同理心、直覺和關愛他人的能力。",
    english_meaning: "Emotional wisdom, empathy, intuition, compassion, emotional support. The Queen of Cups represents emotional maturity and wisdom, symbolizing deep empathy, intuition, and the ability to care for others.",
    reversed_name: "聖杯皇后（逆位）",
    reversed_english_name: "Queen of Cups (Reversed)",
    reversed_meaning: "情感依賴，情緒化，直覺混亂，情感操縱，自我忽視。逆位聖杯皇后可能表示情感上的不平衡或過度依賴，或者你在照顧他人的同時忽視了自己的需求。也可能意味著你需要設立健康的情感界限，學習自我關愛。",
    reversed_english_meaning: "Emotional dependency, moodiness, confused intuition, emotional manipulation, self-neglect. The reversed Queen of Cups may indicate emotional imbalance or overdependence, or neglecting your own needs while caring for others. It may also suggest a need to establish healthy emotional boundaries and practice self-care.",
  
},
{
    id: 49,
    name: "聖杯國王",
    english_name: "King of Cups",
    image: "images/cards/Cups14.jpg",
    meaning: "情感控制，同情心，平衡，智慧，情感支持。聖杯國王代表著情感上的成熟和平衡，象徵著能夠理解和控制自己情感的能力，同時保持對他人的同情和支持。",
    english_meaning: "Emotional control, compassion, balance, wisdom, emotional support. The King of Cups represents emotional maturity and balance, symbolizing the ability to understand and control one's emotions while maintaining compassion and support for others.",
    reversed_name: "聖杯國王（逆位）",
    reversed_english_name: "King of Cups (Reversed)",
    reversed_meaning: "情感操縱，情緒不穩定，冷漠，情感壓抑，缺乏同情心。逆位聖杯國王可能表示情感上的不穩定或操縱，或者你壓抑了自己的情感，表現得冷漠或疏離。也可能意味著你需要找到更健康的方式來表達和處理情感。",
    reversed_english_meaning: "Emotional manipulation, mood swings, coldness, emotional repression, lack of compassion. The reversed King of Cups may indicate emotional instability or manipulation, or repressing your emotions, appearing cold or distant. It may also suggest a need to find healthier ways to express and process emotions.",
   
},
{
    id: 50,
    name:"ACE寶劍",
    english_name: "Ace of Swords",
    image: "images/cards/Swords01.jpg",
    meaning: "清晰的思想，真相，突破，新的想法，正義。寶劍王牌代表著思想的清晰和真相的揭示，帶來新的見解和理解。",
    english_meaning: "Mental clarity, truth, breakthrough, new ideas, justice. The Ace of Swords represents clarity of thought and revelation of truth, bringing new insights and understanding.",
    reversed_name: "寶劍王牌（逆位）",
    reversed_english_name: "Ace of Swords (Reversed)",
    reversed_meaning: "混亂的思想，真相扭曲，溝通障礙，失敗的計劃，不公正。逆位寶劍王牌可能表示你的思想混亂或真相被扭曲，溝通出現了障礙或計劃失敗。也可能意味著你需要重新評估自己的想法和信念，尋找更清晰的思路。",
    reversed_english_meaning: "Confused thinking, distorted truth, communication barriers, failed plans, injustice. The reversed Ace of Swords may indicate that your thoughts are confused or truth is distorted, communication has barriers, or plans have failed. It may also suggest a need to reassess your ideas and beliefs to find clearer thinking.",
  
},
{
    id: 51,
    name: "寶劍二",
    english_name: "Two of Swords",
    image: "images/cards/Swords02.jpg",
    meaning: "決策，平衡，僵局，拒絕看到真相，和平的思想。寶劍二代表著面臨困難選擇時的猶豫和平衡，提醒你需要做出決定，即使這意味著要面對不舒服的真相。",
    english_meaning: "Decision-making, balance, stalemate, refusing to see the truth, peace of mind. The Two of Swords represents hesitation and balance when facing difficult choices, reminding you that a decision needs to be made, even if it means facing uncomfortable truths.",
    reversed_name: "寶劍二（逆位）",
    reversed_english_name: "Two of Swords (Reversed)",
    reversed_meaning: "優柔寡斷，混亂，面對真相，釋放緊張，做出選擇。逆位寶劍二可能表示你無法做出決定，陷入混亂或過度分析的狀態。也可能意味著你終於準備好面對真相，打破僵局，向前邁進。",
    reversed_english_meaning: "Indecision, confusion, facing the truth, releasing tension, making a choice. The reversed Two of Swords may indicate inability to make decisions, being in a state of confusion or over-analysis. It may also suggest finally being ready to face the truth, break the stalemate, and move forward.",
},
{
    id: 52,
    name: "寶劍三",
    english_name: "Three of Swords",
    image: "images/cards/Swords03.jpg",
    meaning: "心碎，悲傷，痛苦，失望，創傷。寶劍三代表著情感上的痛苦和失望，提醒你允許自己感受和處理這些情緒，以便最終能夠療愈和成長。",
    english_meaning: "Heartbreak, sorrow, grief, disappointment, trauma. The Three of Swords represents emotional pain and disappointment, reminding you to allow yourself to feel and process these emotions in order to eventually heal and grow.",
    reversed_name: "寶劍三（逆位）",
    reversed_english_name: "Three of Swords (Reversed)",
    reversed_meaning: "恢復，寬恕，釋放痛苦，學習教訓，移情。逆位寶劍三可能表示你正在從心碎或創傷中恢復，開始放下痛苦和怨恨。也可能意味著你需要面對和處理被壓抑的情感，以便真正地療愈和前進。",
    reversed_english_meaning: "Recovery, forgiveness, releasing pain, learning from experience, moving on. The reversed Three of Swords may indicate recovering from heartbreak or trauma, beginning to release pain and resentment. It may also suggest a need to face and process repressed emotions in order to truly heal and move forward.",

},
{
    id: 53,
    name: "寶劍四",
    english_name: "Four of Swords",
    image: "images/cards/Swords04.jpg",
    meaning: "休息，恢復，冥想，撤退，準備。寶劍四代表著從壓力和衝突中暫時撤退，提醒你給自己時間休息和恢復，以便重新獲得力量和清晰度。",
    english_meaning: "Rest, recovery, meditation, retreat, preparation. The Four of Swords represents temporary withdrawal from stress and conflict, reminding you to give yourself time to rest and recover in order to regain strength and clarity.",
    reversed_name: "寶劍四（逆位）",
    reversed_english_name: "Four of Swords (Reversed)",
    reversed_meaning: "重返活動，恢復能量，焦慮，休息不足，準備不足。逆位寶劍四可能表示你休息不足或過早地重返活動，導致精力不足或準備不足。也可能意味著你終於準備好結束隱居期，重新參與生活和挑戰。",
    reversed_english_meaning: "Returning to activity, renewed energy, anxiety, insufficient rest, lack of preparation. The reversed Four of Swords may indicate insufficient rest or returning to activity too soon, resulting in depleted energy or lack of preparation. It may also suggest finally being ready to end a period of retreat and re-engage with life and its challenges.",

},
{
    id: 54,
    name: "寶劍五",
    english_name: "Five of Swords",
    image: "images/cards/Swords05.jpg",
    meaning: "衝突，失敗，羞辱，贏了戰鬥卻輸了戰爭，自私。寶劍五代表著衝突和失敗的感覺，提醒你考慮勝利的代價，以及是否值得犧牲關係或原則來獲勝。",
    english_meaning: "Conflict, defeat, humiliation, winning the battle but losing the war, selfishness. The Five of Swords represents conflict and feelings of defeat, reminding you to consider the cost of victory and whether it's worth sacrificing relationships or principles to win.",
    reversed_name: "寶劍五（逆位）",
    reversed_english_name: "Five of Swords (Reversed)",
    reversed_meaning: "和解，願意妥協，寬恕，釋放怨恨，重新開始。逆位寶劍五可能表示你準備放下衝突和怨恨，尋求和解或妥協。也可能意味著你正在從過去的失敗或羞辱中恢復，學習寶貴的教訓。",
    reversed_english_meaning: "Reconciliation, willingness to compromise, forgiveness, releasing resentment, starting over. The reversed Five of Swords may indicate readiness to let go of conflict and resentment, seeking reconciliation or compromise. It may also suggest recovering from past defeats or humiliations, learning valuable lessons.",
},
{
    id: 55,
    name: "寶劍六",
    english_name: "Six of Swords",
    image: "images/cards/Swords06.jpg",
    meaning: "過渡，離開困難，旅行，漸進的改變，療愈。寶劍六代表著從困難或動盪時期向更平靜狀態的過渡，提醒你雖然改變可能困難，但它帶來必要的療愈和進步。",
    english_meaning: "Transition, leaving difficulties behind, travel, gradual change, healing. The Six of Swords represents transition from difficult or turbulent times to calmer states, reminding you that while change may be difficult, it brings necessary healing and progress.",
    reversed_name: "寶劍六（逆位）",
    reversed_english_name: "Six of Swords (Reversed)",
    reversed_meaning: "阻礙，無法前進，回到問題，行李，抗拒變化。逆位寶劍六可能表示你在過渡或改變中遇到阻礙，或者無法完全放下過去的問題和困難。也可能意味著你需要面對未解決的問題，才能真正地向前邁進。",
    reversed_english_meaning: "Obstacles, inability to move on, returning to problems, baggage, resistance to change. The reversed Six of Swords may indicate obstacles in transition or change, or inability to fully leave past issues and difficulties behind. It may also suggest a need to face unresolved issues before truly moving forward.",
},
{
    id: 56,
    name: "寶劍七",
    english_name: "Seven of Swords",
    image: "images/cards/Swords07.jpg",
    meaning: "欺騙，策略，隱藏的動機，逃避責任，偷竊。寶劍七代表著欺騙或策略性行為，提醒你注意他人的隱藏動機，或者反思自己是否在某些情況下不夠誠實或負責。",
    english_meaning: "Deception, strategy, hidden motives, avoiding responsibility, theft. The Seven of Swords represents deceptive or strategic behavior, reminding you to be aware of others' hidden motives or to reflect on whether you're being fully honest or responsible in certain situations.",
    reversed_name: "寶劍七（逆位）",
    reversed_english_name: "Seven of Swords (Reversed)",
    reversed_meaning: "坦白，誠實，面對後果，接受責任，被發現。逆位寶劍七可能表示隱藏的真相被揭露，或者你準備誠實面對情況並承擔責任。也可能意味著你正在重新評估自己的行為和動機，尋求更誠實和正直的方式前進。",
    reversed_english_meaning: "Confession, honesty, facing consequences, accepting responsibility, being found out. The reversed Seven of Swords may indicate hidden truths being revealed, or readiness to honestly face situations and take responsibility. It may also suggest reevaluating your actions and motives, seeking more honest and honorable ways forward.",
},
{
    id: 57,
    name: "寶劍八",
    english_name: "Eight of Swords",
    image: "images/cards/Swords08.jpg",
    meaning: "限制，受困，自我施加的障礙，受害者心態，無助。寶劍八代表著感到被困或受限，提醒你這些限制通常是自我施加的，你有能力改變你的思維方式並找到解脫。",
    english_meaning: "Restriction, imprisonment, self-imposed obstacles, victim mentality, helplessness. The Eight of Swords represents feeling trapped or restricted, reminding you that these limitations are often self-imposed and you have the power to change your mindset and find liberation.",
    reversed_name: "寶劍八（逆位）",
    reversed_english_name: "Eight of Swords (Reversed)",
    reversed_meaning: "釋放，自由，自我接納，新視角，克服恐懼。逆位寶劍八可能表示你開始擺脫限制性的思維模式和信念，重獲自由和控制權。也可能意味著你正在學習接受自己的力量和能力，不再將自己視為受害者。",
    reversed_english_meaning: "Release, freedom, self-acceptance, new perspective, overcoming fears. The reversed Eight of Swords may indicate breaking free from restrictive thought patterns and beliefs, regaining freedom and control. It may also suggest learning to embrace your power and capabilities, no longer seeing yourself as a victim.",
 
},
{
    id: 58,
    name: "寶劍九",
    english_name: "Nine of Swords",
    image: "images/cards/Swords09.jpg",
    meaning: "焦慮，噩夢，恐懼，憂慮，壓力。寶劍九代表著內心的恐懼和焦慮，提醒你這些負面情緒往往比實際情況更糟糕。",
    english_meaning: "Anxiety, nightmares, fear, worry, stress. The Nine of Swords represents inner fears and anxieties, reminding you that these negative emotions are often worse than the actual situation.",
    reversed_name: "寶劍九（逆位）",
    reversed_english_name: "Nine of Swords (Reversed)",
    reversed_meaning: "希望，釋放恐懼，面對焦慮，康復，尋求幫助。逆位寶劍九可能表示你正在克服恐懼和焦慮，開始看到希望的曙光。也可能意味著你需要尋求幫助或支持，不要獨自面對困難。",
    reversed_english_meaning: "Hope, releasing fears, facing anxiety, recovery, seeking help. The reversed Nine of Swords may indicate that you're overcoming fears and anxieties, beginning to see a glimmer of hope. It may also suggest a need to seek help or support rather than facing difficulties alone.",
},
{
    id: 59,
    name: "寶劍十",
    english_name: "Ten of Swords",
    image: "images/cards/Swords10.jpg",
    meaning: "結束，失敗，背叛，痛苦，釋放。寶劍十代表著一個痛苦情況的結束，雖然當下感到絕望，但這也是新開始的前奏。",
    english_meaning: "Ending, failure, betrayal, pain, release. The Ten of Swords represents the end of a painful situation; although it feels devastating in the moment, it's also a prelude to a new beginning.",
    reversed_name: "寶劍十（逆位）",
    reversed_english_name: "Ten of Swords (Reversed)",
    reversed_meaning: "復原，緩慢恢復，抵抗變化，持續的痛苦，創傷後成長。逆位寶劍十可能表示你正在從痛苦或背叛中緩慢恢復，開始看到希望。也可能意味著你在抵抗必要的結束，延長了痛苦的過程。",
    reversed_english_meaning: "Recovery, slow healing, resistance to change, lingering pain, post-traumatic growth. The reversed Ten of Swords may indicate that you're slowly recovering from pain or betrayal, beginning to see hope. It may also suggest that you're resisting necessary endings, prolonging the painful process.",
   
},
{
    id: 60,
    name: "寶劍侍者",
    english_name: "Page of Swords",
    image: "images/cards/Swords11.jpg",
    meaning: "好奇心，新想法，探索，警覺，誠實。寶劍侍者代表著對知識和真相的渴望，鼓勵你保持好奇心並勇於表達自己的想法。",
    english_meaning: "Curiosity, new ideas, exploration, vigilance, honesty. The Page of Swords represents a desire for knowledge and truth, encouraging you to maintain curiosity and express your thoughts bravely.",
    reversed_name: "寶劍侍者（逆位）",
    reversed_english_name: "Page of Swords (Reversed)",
    reversed_meaning: "謊言，八卦，欺騙，延遲，不成熟的溝通。逆位寶劍侍者可能表示溝通中的不誠實或操縱，或者你在傳播未經證實的信息。也可能意味著你需要更謹慎地表達自己，避免不必要的衝突。",
    reversed_english_meaning: "Lies, gossip, deception, delays, immature communication. The reversed Page of Swords may indicate dishonesty or manipulation in communication, or that you're spreading unverified information. It may also suggest a need to express yourself more carefully, avoiding unnecessary conflicts.",
  
},
{
    id: 61,
    name: "寶劍騎士",
    english_name: "Knight of Swords",
    image: "images/cards/Swords12.jpg",
    meaning: "行動，勇氣，決心，直接，智力。寶劍騎士代表著快速而堅定地追求真相和正義，鼓勵你勇敢面對挑戰並堅持自己的信念。",
    english_meaning: "Action, courage, determination, directness, intellect. The Knight of Swords represents pursuing truth and justice quickly and firmly, encouraging you to face challenges bravely and stand by your convictions.",
    reversed_name: "寶劍騎士（逆位）",
    reversed_english_name: "Knight of Swords (Reversed)",
    reversed_meaning: "魯莽，衝動，攻擊性，混亂，不切實際。逆位寶劍騎士可能表示你的行動過於魯莽或衝動，缺乏必要的思考和計劃。也可能意味著你需要更平衡地表達自己的想法，避免過於咄咄逼人。",
    reversed_english_meaning: "Recklessness, impulsivity, aggression, chaos, unrealistic. The reversed Knight of Swords may indicate that your actions are too reckless or impulsive, lacking necessary thought and planning. It may also suggest a need to express your ideas more balanced, avoiding being too aggressive.",
  
},
{
    id: 62,
    name: "寶劍王后",
    english_name: "Queen of Swords",
    image: "images/cards/Swords13.jpg",
    meaning: "獨立，清晰，洞察力，直接，智慧。寶劍王后代表著清晰的思考和直接的溝通，鼓勵你保持獨立判斷並勇於表達真相。",
    english_meaning: "Independence, clarity, insight, directness, wisdom. The Queen of Swords represents clear thinking and direct communication, encouraging you to maintain independent judgment and express truth bravely.",
    reversed_name: "寶劍王后（逆位）",
    reversed_english_name: "Queen of Swords (Reversed)",
    reversed_meaning: "刻薄，冷酷，情緒化，欺騙，悲傷。逆位寶劍王后可能表示你的言語過於刻薄或冷酷，或者你在情感上感到孤立。也可能意味著你需要更平衡地整合理性和情感，避免過於極端的表達方式。",
    reversed_english_meaning: "Bitterness, coldness, emotional, deception, grief. The reversed Queen of Swords may indicate that your words are too harsh or cold, or that you're feeling emotionally isolated. It may also suggest a need to better integrate rationality and emotion, avoiding extreme forms of expression.",
   
},
{
    id: 63,
    name: "寶劍國王",
    english_name: "King of Swords",
    image: "images/cards/Swords14.jpg",
    meaning: "理性，權威，真相，清晰，公正。寶劍國王代表著理性和公正的領導，鼓勵你運用智慧和邏輯來解決問題並做出決策。",
    english_meaning: "Rationality, authority, truth, clarity, fairness. The King of Swords represents rational and fair leadership, encouraging you to use wisdom and logic to solve problems and make decisions.",
    reversed_name: "寶劍國王（逆位）",
    reversed_english_name: "King of Swords (Reversed)",
    reversed_meaning: "殘忍，濫用權力，操縱，不公正，暴政。逆位寶劍國王可能表示你濫用智力或權力來操縱他人，或者你的判斷被個人偏見所扭曲。也可能意味著你需要更平衡地運用權威，避免過於嚴厲或不公正。",
    reversed_english_meaning: "Cruelty, abuse of power, manipulation, unfairness, tyranny. The reversed King of Swords may indicate that you're using intellect or power to manipulate others, or that your judgment is distorted by personal bias. It may also suggest a need to use authority more balanced, avoiding being too harsh or unfair.",
  
},
{
    id: 64,
    name: "ACE金幣",
    english_name: "Ace of Pentacles",
    image: "images/cards/Pents01.jpg",
    meaning: "物質的新開始，繁榮，豐富，實際機會，安全感。金幣王牌代表著物質世界的新開始，如新工作、投資或財務機會。",
    english_meaning: "Material new beginning, prosperity, abundance, practical opportunity, security. The Ace of Pentacles represents a new beginning in the material world, such as a new job, investment, or financial opportunity.",
    reversed_name: "金幣王牌（逆位）",
    reversed_english_name: "Ace of Pentacles (Reversed)",
    reversed_meaning: "錯失的機會，物質損失，貪婪，不切實際的期望，不安全感。逆位金幣王牌可能表示你錯過了一個物質機會，或者你對財務或物質方面有不切實際的期望。也可能意味著你需要重新評估自己的物質目標和價值觀。",
    reversed_english_meaning: "Missed opportunity, material loss, greed, unrealistic expectations, insecurity. The reversed Ace of Pentacles may indicate that you've missed a material opportunity, or you have unrealistic expectations regarding finances or material aspects. It may also suggest a need to reassess your material goals and values.",
  
},
{
    id: 65,
    name: "金幣二",
    english_name: "Two of Pentacles",
    image: "images/cards/Pents02.jpg",
    meaning: "平衡，優先順序，適應性，時間管理，靈活性。金幣二代表著在多種責任或資源之間取得平衡，鼓勵你保持靈活並明智地管理時間和資源。",
    english_meaning: "Balance, prioritization, adaptability, time management, flexibility. The Two of Pentacles represents finding balance between multiple responsibilities or resources, encouraging you to stay flexible and manage time and resources wisely.",
    reversed_name: "金幣二（逆位）",
    reversed_english_name: "Two of Pentacles (Reversed)",
    reversed_meaning: "失衡，過度承諾，優先順序混亂，財務壓力，不靈活。逆位金幣二可能表示你在處理多項任務或責任時感到不堪重負，或者你的財務狀況失去平衡。也可能意味著你需要簡化生活，設定更明確的優先順序。",
    reversed_english_meaning: "Imbalance, overcommitment, disorganized priorities, financial stress, inflexibility. The reversed Two of Pentacles may indicate feeling overwhelmed when handling multiple tasks or responsibilities, or your financial situation being out of balance. It may also suggest a need to simplify life and set clearer priorities.",
   
},
{
    id: 66,
    name: "金幣三",
    english_name: "Three of Pentacles",
    image: "images/cards/Pents03.jpg",
    meaning: "團隊合作，技能，認可，學習，成長。金幣三代表著通過合作和專業技能取得成功，鼓勵你重視團隊合作並不斷提升自己的能力。",
    english_meaning: "Teamwork, skill, recognition, learning, growth. The Three of Pentacles represents success through collaboration and professional skills, encouraging you to value teamwork and continuously improve your abilities.",
    reversed_name: "金幣三（逆位）",
    reversed_english_name: "Three of Pentacles (Reversed)",
    reversed_meaning: "缺乏團隊合作，低質量工作，缺乏認可，學習障礙，自我批評。逆位金幣三可能表示團隊合作中的困難或工作質量下降，或者你的努力沒有得到應有的認可。也可能意味著你需要更開放地接受他人的建議和合作。",
    reversed_english_meaning: "Lack of teamwork, poor quality work, lack of recognition, learning difficulties, self-criticism. The reversed Three of Pentacles may indicate difficulties in teamwork or declining work quality, or your efforts not receiving deserved recognition. It may also suggest a need to be more open to others' suggestions and collaboration.",
   
},
{
    id: 67,
    name: "金幣四",
    english_name: "Four of Pentacles",
    image: "images/cards/Pents04.jpg",
    meaning: "安全感，控制，節儉，穩定，保守。金幣四代表著對物質和財務的保守態度，提醒你在追求安全的同時不要過於吝嗇或控制。",
    english_meaning: "Security, control, frugality, stability, conservatism. The Four of Pentacles represents a conservative attitude toward material and financial matters, reminding you not to be too miserly or controlling while seeking security.",
    reversed_name: "金幣四（逆位）",
    reversed_english_name: "Four of Pentacles (Reversed)",
    reversed_meaning: "放手，過度消費，不安全感，慷慨，物質損失。逆位金幣四可能表示你正在學習放手或變得更慷慨，或者你在財務上過於鬆散或不負責任。也可能意味著你需要找到在安全和慷慨之間的平衡。",
    reversed_english_meaning: "Letting go, overspending, insecurity, generosity, material loss. The reversed Four of Pentacles may indicate that you're learning to let go or becoming more generous, or that you're being too loose or irresponsible with finances. It may also suggest a need to find balance between security and generosity.",
   
},
{
    id: 68,
    name: "金幣五",
    english_name: "Five of Pentacles",
    image: "images/cards/Pents05.jpg",
    meaning: "困難，貧困，孤立，擔憂，健康問題。金幣五代表著物質或健康方面的困難時期，提醒你尋求幫助並保持希望，因為這種情況是暫時的。",
    english_meaning: "Hardship, poverty, isolation, worry, health issues. The Five of Pentacles represents a difficult period in material or health matters, reminding you to seek help and maintain hope, as this situation is temporary.",
    reversed_name: "金幣五（逆位）",
    reversed_english_name: "Five of Pentacles (Reversed)",
    reversed_meaning: "復原，財務改善，尋求幫助，精神成長，希望。逆位金幣五可能表示你正在從財務或健康困難中恢復，開始看到情況的改善。也可能意味著你正在學習尋求幫助並接受支持，不再孤立自己。",
    reversed_english_meaning: "Recovery, financial improvement, seeking help, spiritual growth, hope. The reversed Five of Pentacles may indicate that you're recovering from financial or health difficulties, beginning to see improvement in your situation. It may also suggest that you're learning to seek help and accept support, no longer isolating yourself.",
  
},
{
    id: 69,
    name: "金幣六",
    english_name: "Six of Pentacles",
    image: "images/cards/Pents06.jpg",
    meaning: "慷慨，分享，接受，慈善，平衡。金幣六代表著物質資源的給予和接受，鼓勵你慷慨分享並在需要時接受他人的幫助。",
    english_meaning: "Generosity, sharing, receiving, charity, balance. The Six of Pentacles represents giving and receiving of material resources, encouraging you to be generous in sharing and to accept help from others when needed.",
    reversed_name: "金幣六（逆位）",
    reversed_english_name: "Six of Pentacles (Reversed)",
    reversed_meaning: "自私，債務，不平等，依賴，權力濫用。逆位金幣六可能表示給予或接受中的不平衡，如自私、操縱或過度依賴。也可能意味著你需要重新評估自己的給予和接受模式，確保它們是健康和平衡的。",
    reversed_english_meaning: "Selfishness, debt, inequality, dependency, abuse of power. The reversed Six of Pentacles may indicate imbalance in giving or receiving, such as selfishness, manipulation, or over-dependency. It may also suggest a need to reassess your patterns of giving and receiving, ensuring they are healthy and balanced.",
   
},
{
    id: 70,
    name: "金幣七",
    english_name: "Seven of Pentacles",
    image: "images/cards/Pents07.jpg",
    meaning: "耐心，評估，投資，成長，收穫。金幣七代表著等待努力成果的時期，鼓勵你耐心等待並評估自己的進展和投資。",
    english_meaning: "Patience, assessment, investment, growth, harvest. The Seven of Pentacles represents a period of waiting for the fruits of your efforts, encouraging you to be patient and assess your progress and investments.",
    reversed_name: "金幣七（逆位）",
    reversed_english_name: "Seven of Pentacles (Reversed)",
    reversed_meaning: "失敗的投資，工作焦慮，缺乏長期規劃，不耐煩，匆忙的決定。逆位金幣七可能表示你對投資或努力的回報感到失望，或者你在做決定時過於匆忙或不耐煩。也可能意味著你需要重新評估自己的長期目標和策略。",
    reversed_english_meaning: "Failed investments, work anxiety, lack of long-term planning, impatience, hasty decisions. The reversed Seven of Pentacles may indicate feeling disappointed with the returns on your investments or efforts, or being too hasty or impatient in making decisions. It may also suggest a need to reassess your long-term goals and strategies.",
  
},
{
    id: 71,
    name: "金幣八",
    english_name: "Eight of Pentacles",
    image: "images/cards/Pents08.jpg",
    meaning: "技能發展，專注，品質，學徒，勤奮。金幣八代表著通過勤奮工作和專注提升技能，鼓勵你投入時間和精力來掌握自己的技藝。",
    english_meaning: "Skill development, focus, quality, apprenticeship, diligence. The Eight of Pentacles represents improving skills through diligent work and focus, encouraging you to invest time and energy in mastering your craft.",
    reversed_name: "金幣八（逆位）",
    reversed_english_name: "Eight of Pentacles (Reversed)",
    reversed_meaning: "低質量工作，缺乏動力，分心，完美主義，無聊。逆位金幣八可能表示你在工作中缺乏專注或動力，或者你對細節過於苛求而忽視了整體目標。也可能意味著你需要重新點燃對工作的熱情和投入。",
    reversed_english_meaning: "Poor quality work, lack of motivation, distraction, perfectionism, boredom. The reversed Eight of Pentacles may indicate a lack of focus or motivation in your work, or being too nitpicky about details while losing sight of overall goals. It may also suggest a need to reignite passion and engagement in your work.",
  
},
{
    id: 72,
    name: "金幣九",
    english_name: "Nine of Pentacles",
    image: "images/cards/Pents09.jpg",
    meaning: "獨立，豐富，自律，優雅，享受。金幣九代表著通過自律和努力實現物質成功和獨立，鼓勵你享受自己努力的成果。",
    english_meaning: "Independence, abundance, self-discipline, refinement, enjoyment. The Nine of Pentacles represents achieving material success and independence through self-discipline and effort, encouraging you to enjoy the fruits of your labor.",
    reversed_name: "金幣九（逆位）",
    reversed_english_name: "Nine of Pentacles (Reversed)",
    reversed_meaning: "財務依賴，物質損失，過度工作，不安全感，炫耀。逆位金幣九可能表示你在財務上過於依賴他人，或者你為了維持某種生活方式而過度工作。也可能意味著你需要重新評估自己的物質目標和價值觀，找到更平衡的生活方式。",
    reversed_english_meaning: "Financial dependence, material loss, overworking, insecurity, showing off. The reversed Nine of Pentacles may indicate being too financially dependent on others, or overworking to maintain a certain lifestyle. It may also suggest a need to reassess your material goals and values, finding a more balanced way of life.",

},
{
    id: 73,
    name: "金幣十",
    english_name: "Ten of Pentacles",
    image: "images/cards/Pents10.jpg",
    meaning: "財富，家庭，傳統，安全，遺產。金幣十代表著長期的財務安全和家族繁榮，提醒你關注可持續的財富和家庭價值。",
    english_meaning: "Wealth, family, tradition, security, legacy. The Ten of Pentacles represents long-term financial security and family prosperity, reminding you to focus on sustainable wealth and family values.",
    reversed_name: "金幣十（逆位）",
    reversed_english_name: "Ten of Pentacles (Reversed)",
    reversed_meaning: "家庭衝突，財務損失，不穩定，短視，破碎的傳統。逆位金幣十可能表示家庭關係或財務狀況的不穩定，或者你過於關注短期利益而忽視長期安全。也可能意味著你需要重新評估家庭價值觀和財務目標。",
    reversed_english_meaning: "Family conflicts, financial loss, instability, short-sightedness, broken traditions. The reversed Ten of Pentacles may indicate instability in family relationships or financial situations, or focusing too much on short-term gains while neglecting long-term security. It may also suggest a need to reassess family values and financial goals.",

},
{
    id: 74,
    name: "金幣侍者",
    english_name: "Page of Pentacles",
    image: "images/cards/Pents11.jpg",
    meaning: "學習，勤奮，實用性，新機會，成長。金幣侍者代表著對物質和實際知識的學習和探索，鼓勵你保持好奇心並投資於自己的技能發展。",
    english_meaning: "Learning, diligence, practicality, new opportunity, growth. The Page of Pentacles represents learning and exploration of material and practical knowledge, encouraging you to maintain curiosity and invest in your skill development.",
    reversed_name: "金幣侍者（逆位）",
    reversed_english_name: "Page of Pentacles (Reversed)",
    reversed_meaning: "缺乏焦點，拖延，不切實際，浪費，學習障礙。逆位金幣侍者可能表示你在學習或工作中缺乏專注或動力，或者你的目標不切實際或方向不明確。也可能意味著你需要重新評估自己的學習方法和實際目標。",
    reversed_english_meaning: "Lack of focus, procrastination, unrealistic, wasteful, learning blocks. The reversed Page of Pentacles may indicate a lack of focus or motivation in learning or work, or having unrealistic goals or unclear direction. It may also suggest a need to reassess your learning methods and practical objectives.",
    
},
{
    id: 75,
    name: "金幣騎士",
    english_name: "Knight of Pentacles",
    image: "images/cards/Pents12.jpg",
    meaning: "勤奮，責任，可靠，耐心，保守。金幣騎士代表著通過穩定和持續的努力實現目標，鼓勵你保持耐心並踏實工作。",
    english_meaning: "Diligence, responsibility, reliability, patience, conservatism. The Knight of Pentacles represents achieving goals through steady and persistent effort, encouraging you to maintain patience and work methodically.",
    reversed_name: "金幣騎士（逆位）",
    reversed_english_name: "Knight of Pentacles (Reversed)",
    reversed_meaning: "懶惰，停滯，固執，無聊，過度謹慎。逆位金幣騎士可能表示你在工作或項目中缺乏進展或動力，或者你過於固執或謹慎而錯過了機會。也可能意味著你需要找到在穩定和冒險之間的平衡。",
    reversed_english_meaning: "Laziness, stagnation, stubbornness, boredom, over-caution. The reversed Knight of Pentacles may indicate a lack of progress or motivation in work or projects, or being too stubborn or cautious to seize opportunities. It may also suggest a need to find balance between stability and risk-taking.",
    
},
{
    id: 76,
    name: "金幣王后",
    english_name: "Queen of Pentacles",
    image: "images/cards/Pents13.jpg",
    meaning: "滋養，實用性，豐富，安全感，慷慨。金幣王后代表著通過實際和滋養的方式創造豐富和安全，鼓勵你關注物質和情感的平衡。",
    english_meaning: "Nurturing, practicality, abundance, security, generosity. The Queen of Pentacles represents creating abundance and security through practical and nurturing ways, encouraging you to focus on balance between material and emotional aspects.",
    reversed_name: "金幣王后（逆位）",
    reversed_english_name: "Queen of Pentacles (Reversed)",
    reversed_meaning: "自我忽視，物質主義，嫉妒，不安全感，依賴。逆位金幣王后可能表示你過於關注物質層面而忽視了情感需求，或者在追求安全感時變得過度依賴或物質主義。也可能意味著你需要重新平衡生活中的給予和接受。",
    reversed_english_meaning: "Self-neglect, materialism, jealousy, insecurity, dependency. The reversed Queen of Pentacles may indicate focusing too much on material aspects while neglecting emotional needs, or becoming overly dependent or materialistic in pursuit of security. It may also suggest a need to rebalance giving and receiving in your life.",
  
},
{
    id: 77,
    name: "金幣國王",
    english_name: "King of Pentacles",
    image: "images/cards/Pents14.jpg",
    meaning: "富足，實用性，可靠，安全，商業頭腦。金幣國王代表著通過穩健和務實的方法建立物質安全和繁榮，象徵著財務智慧和可靠的領導能力。",
    english_meaning: "Abundance, practicality, reliability, security, business acumen. The King of Pentacles represents building material security and prosperity through steady and practical approaches, symbolizing financial wisdom and reliable leadership.",
    reversed_name: "金幣國王（逆位）",
    reversed_english_name: "King of Pentacles (Reversed)",
    reversed_meaning: "貪婪，物質主義，固執，濫用權力，財務問題。逆位金幣國王可能表示對物質和權力的過度執著，或者在財務決策上的不負責任和短視。也可能意味著你需要重新平衡物質追求和精神價值。",
    reversed_english_meaning: "Greed, materialism, stubbornness, abuse of power, financial issues. The reversed King of Pentacles may indicate excessive attachment to material possessions and power, or irresponsibility and short-sightedness in financial decisions. It may also suggest a need to rebalance material pursuits with spiritual values.",

}];

// 小阿爾卡納牌數據（56張）
const minorArcana = majorArcana.filter(card => card.id > 21);

// 保持原有的tarotCards變量，包含所有塔羅牌
const tarotCards = [...majorArcana, ...minorArcana];

// 為三牌占卜頁面提供所有塔羅牌
const allTarotCards = tarotCards;

// 隨機抽取塔羅牌
function drawRandomCard(readingType = 'all') {
    // 根據占卜類型選擇牌組
    let cardDeck;
    if (readingType === 'major') {
        cardDeck = majorArcana;
    } else if (readingType === 'minor') {
        cardDeck = minorArcana;
    } else {
        cardDeck = tarotCards; // 使用所有牌
    }
    
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    const card = {...cardDeck[randomIndex]}; // 創建卡片對象的副本
    
    // 隨機決定是否為逆位（50%的概率）
    const isReversed = Math.random() < 0.5;
    card.isReversed = isReversed;
    
    // 如果是逆位，生成逆位圖片路徑
    if (isReversed) {
        // 假設逆位圖片命名規則是在原圖片名後添加'r'
        const imagePath = card.image;
        const lastDotIndex = imagePath.lastIndexOf('.');
        card.reversed_image = imagePath.substring(0, lastDotIndex) + 'r' + imagePath.substring(lastDotIndex);
    }
    
    return card;
}

// 抽取多張不重複的牌
function drawMultipleCards(count, readingType = 'all') {
    // 根據占卜類型選擇牌組
    let cardDeck;
    if (readingType === 'major') {
        cardDeck = majorArcana;
    } else if (readingType === 'minor') {
        cardDeck = minorArcana;
    } else {
        cardDeck = tarotCards; // 使用所有牌
    }
    
    const cards = [...cardDeck]; // 創建牌組副本
    const drawnCards = [];
    
    for (let i = 0; i < count; i++) {
        if (cards.length === 0) break;
        
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = {...cards[randomIndex]}; // 創建卡片對象的副本
        
        // 隨機決定是否為逆位（50%的概率）
        const isReversed = Math.random() < 0.5;
        card.isReversed = isReversed;
        
        // 如果是逆位，生成逆位圖片路徑
        if (isReversed) {
            const imagePath = card.image;
            const lastDotIndex = imagePath.lastIndexOf('.');
            card.reversed_image = imagePath.substring(0, lastDotIndex) + 'r' + imagePath.substring(lastDotIndex);
        }
        
        drawnCards.push(card);
        cards.splice(randomIndex, 1); // 從牌組中移除已抽取的牌
    }
    
    return drawnCards;
}

// 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 檢查當前頁面
    const currentPage = window.location.pathname.split('/').pop();
    
    // 單牌占卜頁面 - 使用所有塔羅牌
    if (currentPage === 'single-card.html') {
        const drawButton = document.getElementById('draw-button');
        const cardContainer = document.querySelector('.card-container');
        const cardMeaning = document.querySelector('.card-meaning');
        
        drawButton.addEventListener('click', function() {
            // 禁用按鈕，防止重複點擊
            drawButton.disabled = true;
            
            // 清空之前的卡片和解釋
            cardContainer.innerHTML = '';
            cardMeaning.style.display = 'none';
            cardMeaning.innerHTML = '';
            
            // 抽一張牌（使用所有塔羅牌，而不僅僅是大阿爾卡納）
            const drawnCard = drawRandomCard('all');
            
            // 創建單張卡片元素
            const cardElement = document.createElement('div');
            cardElement.className = 'tarot-card card-appear';
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front" style="background-image: url('images/tarotcardback.png'); background-size: cover; background-position: center;"></div>
                    <div class="card-back">
                        <div class="card-image" style="background-image: url('${drawnCard.isReversed ? drawnCard.reversed_image : drawnCard.image}')"></div>
                    </div>
                </div>
            `;
            
            cardContainer.appendChild(cardElement);
            
            // 移除卡片上升动画，直接添加翻转动画
            setTimeout(() => {
                cardElement.classList.add('flipped');
            
                // 卡片翻轉的同時立即顯示解釋
                let meaningHTML = `
                    <h2>塔羅牌解讀</h2>
                    <div class="card-reading">
                        <h3>${drawnCard.isReversed ? drawnCard.reversed_name : drawnCard.name} (${drawnCard.isReversed ? drawnCard.reversed_english_name : drawnCard.english_name})</h3>
                        <p>${drawnCard.isReversed ? drawnCard.reversed_meaning : drawnCard.meaning}</p>
                        <p class="english-meaning">${drawnCard.isReversed ? drawnCard.reversed_english_meaning : drawnCard.english_meaning}</p>
                    </div>
                `;
                
                cardMeaning.innerHTML = meaningHTML;
                
                // 顯示卡片含義區域
                cardMeaning.style.display = 'block';
                cardMeaning.classList.add('card-appear');
                
                // 重新啟用按鈕
                drawButton.disabled = false;
            }, 500); // 使用与今日指引相同的延迟时间
        });
    }
    
    // 三牌占卜頁面 - 使用所有78張塔羅牌
    else if (currentPage === 'three-cards.html') {
        const drawButton = document.getElementById('draw-button');
        const cardContainer = document.querySelector('.card-container');
        const cardMeaning = document.querySelector('.card-meaning');
        
        drawButton.addEventListener('click', function() {
            // 禁用按鈕，防止重複點擊
            drawButton.disabled = true;
            
            // 清空之前的卡片和解釋
            cardContainer.innerHTML = '';
            cardMeaning.style.display = 'none';
            cardMeaning.innerHTML = '';
            
            // 抽三張不重複的牌（使用所有塔羅牌）
            const drawnCards = drawMultipleCards(3, 'all');
            
            // 創建三張卡片元素
            const positions = ['過去', '現在', '未來'];
            
            drawnCards.forEach((card, index) => {
                // 創建卡片容器
                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'tarot-card-wrapper';
                
                // 添加位置標題
                const positionTitle = document.createElement('h3');
                positionTitle.className = 'position-title';
                positionTitle.textContent = positions[index];
                cardWrapper.appendChild(positionTitle);
                
                // 創建卡片元素
                const cardElement = document.createElement('div');
                cardElement.className = 'tarot-card card-appear';
                cardElement.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front" style="background-image: url('images/tarotcardback.png'); background-size: cover; background-position: center;"></div>
                        <div class="card-back">
                            <div class="card-image" style="background-image: url('${card.isReversed ? card.reversed_image : card.image}')"></div>
                        </div>
                    </div>
                `;
                
                cardWrapper.appendChild(cardElement);
                cardContainer.appendChild(cardWrapper);
                
                // 依次延遲翻轉卡片，移除上升动画
                setTimeout(() => {
                    cardElement.classList.add('flipped');
                    
                    // 最後一張卡片翻轉的同時立即顯示解釋
                    if (index === drawnCards.length - 1) {
                        let meaningHTML = '<h2>塔羅牌解讀</h2>';
                        
                        drawnCards.forEach((card, i) => {
                            meaningHTML += `
                                <div class="card-position">
                                    <h3>${positions[i]}</h3>
                                    <h2>${card.isReversed ? card.reversed_name : card.name} (${card.isReversed ? card.reversed_english_name : card.english_name})</h2>
                                    <p>${card.isReversed ? card.reversed_meaning : card.meaning}</p>
                                    <p class="english-meaning">${card.isReversed ? card.reversed_english_meaning : card.english_meaning}</p>
                                </div>
                            `;
                        });
                        
                        // 生成並添加整合結語
                        const conclusion = generateThreeCardConclusion(drawnCards);
                        meaningHTML += `
                            <div class="card-conclusion">
                                <h3>整體解讀</h3>
                                <p>${conclusion}</p>
                            </div>
                        `;
                        
                        cardMeaning.innerHTML = meaningHTML;
                        cardMeaning.style.display = 'block';
                        cardMeaning.classList.add('card-appear');
                        drawButton.disabled = false;
                    }
                }, 500 + index * 300); // 保持卡片依次翻转的延迟
            });
        });
    }
    
// ... existing code ...

// 感应占卜页面 - 使用所有塔罗牌
else if (currentPage === 'intuitive-reading.html') {
    const shuffleButton = document.getElementById('shuffle-button');
    const numberContainer = document.getElementById('number-container');
    const cardContainer = document.querySelector('.card-container');
    const cardMeaning = document.querySelector('.card-meaning');
    
    let shuffledCards = [];
    let selectedNumbers = [];
    const maxSelections = 3;
    
    shuffleButton.addEventListener('click', function() {
        // 禁用按钮，防止重复点击
        shuffleButton.disabled = true;
        
        // 清空之前的卡片和解释
        cardContainer.innerHTML = '';
        cardMeaning.style.display = 'none';
        cardMeaning.innerHTML = '';
        
        // 清空之前的数字选择
        numberContainer.innerHTML = '';
        selectedNumbers = [];
        
        // 洗牌 - 创建包含所有78张塔罗牌的数组并随机排序
        shuffledCards = [...tarotCards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
            
            // 随机决定是否为逆位（50%的概率）
            const isReversed = Math.random() < 0.5;
            shuffledCards[i].isReversed = isReversed;
            
            // 如果是逆位，生成逆位图片路径
            if (isReversed) {
                const imagePath = shuffledCards[i].image;
                const lastDotIndex = imagePath.lastIndexOf('.');
                shuffledCards[i].reversed_image = imagePath.substring(0, lastDotIndex) + 'r' + imagePath.substring(lastDotIndex);
            }
        }
        
        // 创建78个数字按钮
        for (let i = 1; i <= 78; i++) {
            const numberButton = document.createElement('button');
            numberButton.className = 'number-button';
            numberButton.textContent = i;
            numberButton.dataset.index = i - 1; // 存储对应的卡片索引
            
            numberButton.addEventListener('click', function() {
                if (this.classList.contains('disabled')) return;
                
                // 如果已经选择了三个数字，则不允许再选择
                if (selectedNumbers.length >= maxSelections && !this.classList.contains('selected')) return;
                
                // 切换选择状态
                if (this.classList.contains('selected')) {
                    // 取消选择
                    this.classList.remove('selected');
                    const index = selectedNumbers.indexOf(parseInt(this.dataset.index));
                    if (index > -1) {
                        selectedNumbers.splice(index, 1);
                    }
                } else {
                    // 选择
                    this.classList.add('selected');
                    selectedNumbers.push(parseInt(this.dataset.index));
                    
                    // 如果已经选择了三个数字，显示卡片
                    if (selectedNumbers.length === maxSelections) {
                        // 禁用所有未选择的按钮
                        document.querySelectorAll('.number-button:not(.selected)').forEach(btn => {
                            btn.classList.add('disabled');
                        });
                        
                        // 显示选中的卡片
                        displaySelectedCards();
                    }
                }
            });
            
            numberContainer.appendChild(numberButton);
        }
        
        // 显示数字容器
        numberContainer.style.display = 'flex';
    });
    
    // 显示选中的卡片
    function displaySelectedCards() {
        // 清空卡片容器
        cardContainer.innerHTML = '';
        
        // 为每个选中的数字创建卡片
        selectedNumbers.forEach((cardIndex, index) => {
            const card = shuffledCards[cardIndex];
            
            // 创建卡片包装器
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'intuitive-card-wrapper';
            
            // 添加数字标题
            const numberTitle = document.createElement('div');
            numberTitle.className = 'intuitive-card-number';
            numberTitle.textContent = `選擇 ${cardIndex + 1}`;
            cardWrapper.appendChild(numberTitle);
            
            // 创建卡片元素
            const cardElement = document.createElement('div');
            cardElement.className = 'tarot-card card-appear';
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front" style="background-image: url('images/tarotcardback.png'); background-size: cover; background-position: center;"></div>
                    <div class="card-back">
                        <div class="card-image" style="background-image: url('${card.isReversed ? card.reversed_image : card.image}')"></div>
                    </div>
                </div>
            `;
            
            cardWrapper.appendChild(cardElement);
            cardContainer.appendChild(cardWrapper);
            
            // 依次延迟翻转卡片
            setTimeout(() => {
                cardElement.classList.add('flipped');
                
                // 最后一张卡片翻转的同时立即显示解释
                if (index === selectedNumbers.length - 1) {
                    let meaningHTML = '<h2>塔羅牌解讀</h2>';
                    
                    selectedNumbers.forEach((cardIdx, i) => {
                        const selectedCard = shuffledCards[cardIdx];
                        meaningHTML += `
                            <div class="card-position">
                                <h3>選擇 ${cardIdx + 1}</h3>
                                <h2>${selectedCard.isReversed ? selectedCard.reversed_name : selectedCard.name} (${selectedCard.isReversed ? selectedCard.reversed_english_name : selectedCard.english_name})</h2>
                                <p>${selectedCard.isReversed ? selectedCard.reversed_meaning : selectedCard.meaning}</p>
                                <p class="english-meaning">${selectedCard.isReversed ? selectedCard.reversed_english_meaning : selectedCard.english_meaning}</p>
                            </div>
                        `;
                    });
                    
                    // 生成并添加整合结语
                    const conclusion = generateIntuitiveConclusion(selectedNumbers.map(idx => shuffledCards[idx]));
                    meaningHTML += `
                        <div class="card-conclusion">
                            <h3>整體解讀</h3>
                            <p>${conclusion}</p>
                        </div>
                    `;
                    
                    cardMeaning.innerHTML = meaningHTML;
                    cardMeaning.style.display = 'block';
                    cardMeaning.classList.add('card-appear');
                    
                    // 重新启用洗牌按钮
                    shuffleButton.disabled = false;
                }
            }, 500 + index * 300);
        });
    }
    
    // 生成感应占卜的整合结语
    function generateIntuitiveConclusion(cards) {
    // 獲取卡片的基本信息
    const cardNames = cards.map(card => card.isReversed ? card.reversed_name : card.name);
    const cardMeanings = cards.map(card => card.isReversed ? card.reversed_meaning : card.meaning);
    
    // 開始整體解讀
    let conclusion = '';
    
// 分析牌面組合的整體意義
conclusion += `${cardNames[0]}代表了你當前的核心能量或問題的根源，`;
conclusion += `與${cardNames[1]}所顯示的外部影響或挑戰相互作用，`;
conclusion += `最終指向${cardNames[2]}所暗示的可能結果或解決方向。`;


// 分析第二張牌與第一張牌的關係
conclusion += `\n\n${cardNames[1]}的出現表明，`;
if (cards[1].isReversed) {
    conclusion += `你可能正在面對一些阻礙或內在衝突，這需要你調整策略或改變視角。`;
} else {
    conclusion += `有支持性的能量正在幫助你前進，把握這股力量可以幫助你克服困難。`;
}

// 分析第三張牌作為結果
conclusion += `\n\n最終，${cardNames[2]}指引你走向一個方向：`;
if (cards[2].isReversed) {
    conclusion += `這可能需要你重新評估目標或期望，接受一個不同於預期的結果，但這同樣包含寶貴的學習。`;
} else {
    conclusion += `如果你能整合前兩張牌的能量和教訓，你很可能會達到一個令人滿意的結果或突破。`;
}
    
    // 檢查是否有大阿爾卡納牌
    const majorArcanaCards = cards.filter(card => card.id >= 0 && card.id <= 21);
    if (majorArcanaCards.length > 0) {
        conclusion += `\n\n值得注意的是，大阿爾卡納牌在你的選擇中佔據重要位置（${majorArcanaCards.length}張），這表明當前的情況與你的人生旅程和重要轉變密切相關。這些牌提醒你關注更大的生命主題和靈性成長。`;
    }
    
    // 檢查是否有逆位牌
    const reversedCards = cards.filter(card => card.isReversed);
    if (reversedCards.length > 0) {
        conclusion += `\n\n有${reversedCards.length}張逆位牌出現，提示你需要關注內在的阻礙或尚未解決的問題。這些逆位能量邀請你進行深入的自我反思，找出潛在的盲點或抵抗。`;
    } else {
        conclusion += `\n\n所有牌都是正位，這表明能量流動相對順暢，你可能正處於一個有利於前進的時期。`;
    }
    
    // 根據牌的花色分析
    const suits = cards.map(card => {
        if (card.id >= 0 && card.id <= 21) return 'major';
        if (card.id >= 22 && card.id <= 35) return 'wands';
        if (card.id >= 36 && card.id <= 49) return 'cups';
        if (card.id >= 50 && card.id <= 63) return 'swords';
        if (card.id >= 64 && card.id <= 77) return 'pentacles';
        return 'unknown';
    });
    
    // 分析花色分布
    const suitCounts = {
        major: suits.filter(s => s === 'major').length,
        wands: suits.filter(s => s === 'wands').length,
        cups: suits.filter(s => s === 'cups').length,
        swords: suits.filter(s => s === 'swords').length,
        pentacles: suits.filter(s => s === 'pentacles').length
    };
    
    // 根據主要花色提供額外洞見
    let dominantSuit = Object.keys(suitCounts).reduce((a, b) => suitCounts[a] > suitCounts[b] ? a : b);
    if (dominantSuit !== 'major' && suitCounts[dominantSuit] > 1) {
        conclusion += `\n\n${suitCounts[dominantSuit]}張牌屬於`;
        
        if (dominantSuit === 'wands') {
            conclusion += `權杖牌，這強調了創造力、熱情和行動的重要性。你的情況可能與職業抱負、創新項目或個人激情有關。建議你保持熱情並採取主動行動。`;
        } else if (dominantSuit === 'cups') {
            conclusion += `聖杯牌，這突顯了情感、關係和直覺的重要性。你的情況可能與人際關係、情感健康或創造表達有關。建議你傾聽內心的聲音，關注情感需求。`;
        } else if (dominantSuit === 'swords') {
            conclusion += `寶劍牌，這強調了思考、溝通和挑戰的重要性。你的情況可能與決策、衝突或思想清晰度有關。建議你保持理性分析，同時注意溝通方式。`;
        } else if (dominantSuit === 'pentacles') {
            conclusion += `錢幣牌，這突顯了物質世界、財務和實用性的重要性。你的情況可能與職業、財務或健康有關。建議你採取實際步驟，關注長期穩定性。`;
        }
    }
    
    // 提供整合性建議
    conclusion += `\n\n綜合這三張牌的信息，對你的建議是：`;
    conclusion += `\n1. 認識到${cardNames[0]}所代表的核心能量，接受它作為你當前旅程的起點。`;
    conclusion += `\n2. 面對${cardNames[1]}所顯示的挑戰或機會，調整你的策略和視角。`;
    conclusion += `\n3. 朝著${cardNames[2]}所指引的方向前進，保持開放和適應性。`;
    conclusion += `\n\n記住，塔羅牌提供的是可能性和洞見，最終的選擇和行動仍在你手中。`;
    
    return conclusion;
}
}

    // 今日指引頁面 - 修改為使用所有塔羅牌
    else if (currentPage === 'daily-guidance.html') {
        const drawButton = document.getElementById('draw-button');
        const cardContainer = document.querySelector('.card-container');
        const cardMeaning = document.querySelector('.card-meaning');
        
        drawButton.addEventListener('click', function() {
            // 禁用按鈕，防止重複點擊
            drawButton.disabled = true;
            
            // 清空之前的卡片和解釋
            cardContainer.innerHTML = '';
            cardMeaning.style.display = 'none';
            cardMeaning.innerHTML = '';
            
            // 抽一張牌作為今日指引（使用所有塔羅牌，而不僅僅是大阿爾卡納）
            const dailyCard = drawRandomCard('all');
            
            // 創建卡片元素容器
            const cardDeck = document.createElement('div');
            cardDeck.className = 'daily-card-spread';
            cardContainer.appendChild(cardDeck);
            
            // 創建並顯示卡片
            const cardElement = document.createElement('div');
            cardElement.className = 'tarot-card card-appear';
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front" style="background-image: url('images/tarotcardback.png'); background-size: cover; background-position: center;"></div>
                    <div class="card-back">
                        <div class="card-image" style="background-image: url('${dailyCard.isReversed ? dailyCard.reversed_image : dailyCard.image}')"></div>
                        <div class="card-position"></div>
                    </div>
                </div>
            `;
            
            cardDeck.appendChild(cardElement);
            
            // 延遲翻轉卡片
            setTimeout(() => {
                cardElement.classList.add('flipped');
                
                // 卡片翻轉的同時立即顯示解釋（移除原來的延遲800毫秒）
                // setTimeout(() => {
                // 顯示卡片含義
                let meaningHTML = '<h2></h2>';
                meaningHTML += `
                    <div class="card-reading">
                        <h3>${dailyCard.isReversed ? dailyCard.reversed_name : dailyCard.name} (${dailyCard.isReversed ? dailyCard.reversed_english_name : dailyCard.english_name})</h3>
                        <p>${dailyCard.isReversed ? dailyCard.reversed_meaning : dailyCard.meaning}</p>
                        <p class="english-meaning">${dailyCard.isReversed ? dailyCard.reversed_english_meaning : dailyCard.english_meaning}</p>
                    </div>
                `;
                
                cardMeaning.innerHTML = meaningHTML;
                
                // 顯示卡片含義區域
                cardMeaning.style.display = 'block';
                cardMeaning.classList.add('card-appear');
                
                // 重新啟用按鈕
                drawButton.disabled = false;
                // }, 800);
            }, 500);
        });
    }
});

// 鼠标跟随星星效果
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let followStar = null;
    
    // 创建跟随星星
    function createFollowStar() {
        // 如果已经存在星星，则不再创建
        if (followStar) return;
        
        followStar = document.createElement('div');
        followStar.className = 'follow-star';
        body.appendChild(followStar);
    }
    
    // 初始化创建星星
    createFollowStar();
    
    // 监听鼠标移动
    document.addEventListener('mousemove', function(e) {
        // 确保星星已创建
        if (!followStar) createFollowStar();
        
        // 更新星星位置
        followStar.style.left = e.clientX + 'px';
        followStar.style.top = e.clientY + 'px';
    });
    
    // 鼠标离开页面时隐藏星星
    document.addEventListener('mouseleave', function() {
        if (followStar) followStar.style.opacity = '0';
    });
    
    // 鼠标进入页面时显示星星
    document.addEventListener('mouseenter', function() {
        if (followStar) followStar.style.opacity = '1';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有菜單卡片和中間卡片
    const menuCards = document.querySelectorAll('.menu-card');
    const centerCard = document.getElementById('menu-daily');
    
    // 保存中間卡片的原始樣式
    const centerOriginalStyles = {
        width: '300px',
        height: '350px',
        background: 'rgba(60, 20, 100, 0.7)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 194, 255, 0.3)',
        zIndex: '5'
    };
    
    // 中間卡片縮小後的樣式
    const centerShrinkStyles = {
        width: '220px',
        height: '280px',
        background: 'rgba(40, 10, 80, 0.6)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        zIndex: '1',
        transform: 'translateY(0) scale(1)'
    };
    
    // 中間卡片圖標的原始樣式
    const centerIconOriginalStyles = {
        fontSize: '3.5rem',
        marginBottom: '1.2rem'
    };
    
    // 中間卡片圖標縮小後的樣式
    const centerIconShrinkStyles = {
        fontSize: '2.5rem',
        marginBottom: '1rem'
    };
    
    // 中間卡片標題的原始樣式
    const centerTitleOriginalStyles = {
        fontSize: '2rem',
        marginBottom: '1rem'
    };
    
    // 中間卡片標題縮小後的樣式
    const centerTitleShrinkStyles = {
        fontSize: '1.5rem',
        marginBottom: '0.8rem'
    };
    
    // 中間卡片描述的原始樣式
    const centerDescOriginalStyles = {
        fontSize: '1.1rem'
    };
    
    // 中間卡片描述縮小後的樣式
    const centerDescShrinkStyles = {
        fontSize: '0.9rem'
    };
    
    // 為每個菜單卡片添加滑鼠事件
    menuCards.forEach(card => {
        if (card.id !== 'menu-daily') {
            // 滑鼠懸停在其他卡片上時，縮小中間卡片
            card.addEventListener('mouseenter', function() {
                // 縮小中間卡片
                Object.assign(centerCard.style, centerShrinkStyles);
                
                // 縮小中間卡片的圖標
                const centerIcon = centerCard.querySelector('.menu-icon');
                Object.assign(centerIcon.style, centerIconShrinkStyles);
                
                // 縮小中間卡片的標題
                const centerTitle = centerCard.querySelector('h2');
                Object.assign(centerTitle.style, centerTitleShrinkStyles);
                
                // 縮小中間卡片的描述
                const centerDesc = centerCard.querySelector('p');
                Object.assign(centerDesc.style, centerDescShrinkStyles);
            });
            
            // 滑鼠離開其他卡片時，恢復中間卡片
            card.addEventListener('mouseleave', function() {
                // 檢查是否有其他卡片處於懸停狀態
                const isAnyHovered = Array.from(menuCards).some(c => 
                    c !== centerCard && c !== this && c.matches(':hover')
                );
                
                // 如果沒有其他卡片處於懸停狀態，恢復中間卡片
                if (!isAnyHovered) {
                    // 恢復中間卡片
                    Object.assign(centerCard.style, centerOriginalStyles);
                    
                    // 恢復中間卡片的圖標
                    const centerIcon = centerCard.querySelector('.menu-icon');
                    Object.assign(centerIcon.style, centerIconOriginalStyles);
                    
                    // 恢復中間卡片的標題
                    const centerTitle = centerCard.querySelector('h2');
                    Object.assign(centerTitle.style, centerTitleOriginalStyles);
                    
                    // 恢復中間卡片的描述
                    const centerDesc = centerCard.querySelector('p');
                    Object.assign(centerDesc.style, centerDescOriginalStyles);
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 創建樣式元素
    const styleElement = document.createElement('style');
    
    // 添加CSS規則，覆蓋原有的字型和圖標大小變化
    styleElement.textContent = `
        /* 固定字型和圖標大小 */
        .menu-card:hover .menu-icon {
            font-size: inherit !important;
            margin-bottom: inherit !important;
        }
        
        .menu-card:hover .menu-item h2 {
            font-size: inherit !important;
            margin-bottom: inherit !important;
        }
        
        .menu-card:hover .menu-item p {
            font-size: inherit !important;
        }
        
        #menu-single:hover ~ #menu-daily .menu-icon,
        #menu-three:hover ~ #menu-daily .menu-icon,
        #menu-consultation:hover ~ #menu-daily .menu-icon,
        #menu-meditation:hover ~ #menu-daily .menu-icon {
            font-size: inherit !important;
            margin-bottom: inherit !important;
        }
        
        #menu-single:hover ~ #menu-daily .menu-item h2,
        #menu-three:hover ~ #menu-daily .menu-item h2,
        #menu-consultation:hover ~ #menu-daily .menu-item h2,
        #menu-meditation:hover ~ #menu-daily .menu-item h2 {
            font-size: inherit !important;
            margin-bottom: inherit !important;
        }
        
        #menu-single:hover ~ #menu-daily .menu-item p,
        #menu-three:hover ~ #menu-daily .menu-item p,
        #menu-consultation:hover ~ #menu-daily .menu-item p,
        #menu-meditation:hover ~ #menu-daily .menu-item p {
            font-size: inherit !important;
        }
    `;
    
    // 將樣式添加到頁面
    document.head.appendChild(styleElement);
});

// 添加這個新函數：生成三牌占卜的整合結語
function generateThreeCardConclusion(cards) {
    // 提取三張牌的關鍵信息
    const past = cards[0];
    const present = cards[1];
    const future = cards[2];
    
    // 獲取每張牌的名稱和含義
    const pastName = past.isReversed ? past.reversed_name : past.name;
    const pastMeaning = past.isReversed ? past.reversed_meaning : past.meaning;
    
    const presentName = present.isReversed ? present.reversed_name : present.name;
    const presentMeaning = present.isReversed ? present.reversed_meaning : present.meaning;
    
    const futureName = future.isReversed ? future.reversed_name : future.name;
    const futureMeaning = future.isReversed ? future.reversed_meaning : future.meaning;
    
    // 提取每張牌含義中的關鍵詞（簡單實現，可以根據需要優化）
    const pastKeywords = extractKeywords(pastMeaning);
    const presentKeywords = extractKeywords(presentMeaning);
    const futureKeywords = extractKeywords(futureMeaning);
    
    // 生成結語
    let conclusion = `您的塔羅旅程從「${pastName}」開始，顯示您過去經歷了${pastKeywords.join('、')}。`;
    conclusion += `目前，「${presentName}」的能量圍繞著您，意味著您正在經歷${presentKeywords.join('、')}。`;
    conclusion += `展望未來，「${futureName}」預示著${futureKeywords.join('、')}的可能性。`;
    
    // 根據牌的組合添加額外的解讀
    conclusion += generateCombinationInsight(cards);
    
    // 添加建議和鼓勵
    conclusion += `\n\n這三張牌共同描繪了一個從${pastKeywords[0]}，經由${presentKeywords[0]}，最終走向${futureKeywords[0]}的旅程。`;
    conclusion += `請記住，塔羅牌揭示的是可能性，而非命定。您擁有改變未來的力量，透過覺察和行動，創造屬於自己的命運。`;
    
    return conclusion;
}

// 從牌義中提取關鍵詞
function extractKeywords(meaning) {
    // 簡單實現：取第一句話中的前三個關鍵詞
    // 實際應用中可以使用更複雜的NLP技術
    const firstSentence = meaning.split('。')[0];
    const words = firstSentence.split('，');
    const keywords = [];
    
    // 提取前三個有意義的詞
    for (let word of words) {
        // 清理詞語，去除標點和空格
        word = word.trim().replace(/[，。、；：「」『』（）()]/g, '');
        if (word.length >= 2 && keywords.length < 3) {
            keywords.push(word);
        }
    }
    
    // 如果提取不到三個關鍵詞，添加一些通用詞
    while (keywords.length < 3) {
        const genericKeywords = ['轉變', '挑戰', '機會', '成長', '反思', '行動'];
        const randomIndex = Math.floor(Math.random() * genericKeywords.length);
        const keyword = genericKeywords[randomIndex];
        if (!keywords.includes(keyword)) {
            keywords.push(keyword);
        }
    }
    
    return keywords;
}

// 根據牌的組合生成額外的解讀
function generateCombinationInsight(cards) {
    // 檢查是否有特定的牌組合
    const cardNames = cards.map(card => card.isReversed ? card.reversed_name : card.name);
    
    // 檢查是否有主要阿爾卡納牌
    const majorArcanaCount = cards.filter(card => card.id !== undefined && card.id >= 0 && card.id <= 21).length;
    
    // 檢查是否有逆位牌
    const reversedCount = cards.filter(card => card.isReversed).length;
    
    let insight = '\n\n';
    
    // 根據主要阿爾卡納牌的數量添加解讀
    if (majorArcanaCount === 3) {
        insight += '三張牌全為大阿爾卡納，表明您正處於人生的重要轉折點，這段經歷將對您的未來產生深遠影響。';
    } else if (majorArcanaCount === 0) {
        insight += '三張牌全為小阿爾卡納，表明您目前關注的是日常生活中的具體事務，這些細節將共同塑造您的整體體驗。';
    }
    
    // 根據逆位牌的數量添加解讀
    if (reversedCount === 3) {
        insight += '三張牌全為逆位，暗示您可能正面臨一系列挑戰，需要調整視角或改變方法來克服困難。';
    } else if (reversedCount === 0) {
        insight += '三張牌全為正位，顯示您的能量流動順暢，目前的道路相對清晰明朗。';
    }
    
    // 檢查是否有特定元素（如數字牌、宮廷牌等）的組合
    // 這部分可以根據需要擴展
    
    return insight;
}

// 訪問計數器功能
document.addEventListener('DOMContentLoaded', function() {
    // 檢查是否在主頁
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        updateVisitorCount();
    }
});

function updateVisitorCount() {
    // 獲取訪問計數元素
    const visitorCountElement = document.getElementById('visitor-count');
    if (!visitorCountElement) return;
    
    // 從localStorage獲取當前計數
    let count = localStorage.getItem('visitorCount');
    
    // 如果是首次訪問或計數不存在
    if (!count) {
        count = 1;
    } else {
        // 檢查上次訪問時間
        const lastVisit = localStorage.getItem('lastVisit');
        const now = new Date().getTime();
        
        // 如果是新的會話（超過30分鐘沒有訪問）或首次訪問，增加計數
        if (!lastVisit || (now - lastVisit > 30 * 60 * 1000)) {
            count = parseInt(count) + 1;
        }
    }
    
    // 更新localStorage
    localStorage.setItem('visitorCount', count);
    localStorage.setItem('lastVisit', new Date().getTime());
    
    // 更新顯示
    visitorCountElement.textContent = count;
    
    // 每分鐘檢查一次更新（模擬實時更新）
    setInterval(function() {
        const currentCount = localStorage.getItem('visitorCount');
        if (currentCount && currentCount !== visitorCountElement.textContent) {
            visitorCountElement.textContent = currentCount;
        }
    }, 60000);
}

// 音樂播放控制 - 增強版解決頁面切換問題
document.addEventListener('DOMContentLoaded', function() {
    // 檢查是否已經初始化過音樂控制，避免重複初始化
    if (window.musicControlInitialized) return;
    window.musicControlInitialized = true;
    
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    
    if (!musicToggle || !backgroundMusic) return;
    
    let isMusicPlaying = false;

    // 檢查用戶之前的音樂設置（使用本地存儲）
    const musicState = localStorage.getItem('musicState');
    const musicTime = localStorage.getItem('musicTime');

    // 如果有保存的播放時間，設置音樂從該時間點開始播放
    if (musicTime) {
        backgroundMusic.currentTime = parseFloat(musicTime);
    }

    // 如果之前是播放狀態，則自動播放
    if (musicState === 'playing') {
        // 使用自動播放策略
        autoPlayStrategy();
    }

    // 點擊按鈕切換音樂播放狀態
    musicToggle.addEventListener('click', function() {
        if (isMusicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // 定期保存當前播放時間（每2秒）
    const saveInterval = setInterval(function() {
        if (isMusicPlaying && !backgroundMusic.paused) {
            localStorage.setItem('musicTime', backgroundMusic.currentTime);
        }
    }, 2000);

    // 頁面卸載前保存當前播放時間和狀態
    window.addEventListener('beforeunload', function() {
        if (isMusicPlaying && !backgroundMusic.paused) {
            localStorage.setItem('musicTime', backgroundMusic.currentTime);
            localStorage.setItem('musicState', 'playing');
        }
    });

    // 頁面可見性變化時處理音樂播放
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible' && musicState === 'playing') {
            autoPlayStrategy();
        }
    });

    // 自動播放策略 - 處理瀏覽器的自動播放限制
    function autoPlayStrategy() {
        // 嘗試播放
        const playPromise = backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // 播放成功
                musicToggle.classList.add('playing');
                isMusicPlaying = true;
                updateMusicState('playing');
            }).catch(error => {
                // 播放失敗 - 可能是瀏覽器限制自動播放
                console.log('自動播放失敗:', error);
                
                // 添加一次性點擊事件來解鎖音頻
                const unlockAudio = function() {
                    // 嘗試播放
                    backgroundMusic.play().then(_ => {
                        musicToggle.classList.add('playing');
                        isMusicPlaying = true;
                        updateMusicState('playing');
                    }).catch(e => console.error('播放失敗:', e));
                    
                    // 移除事件監聽器
                    document.removeEventListener('click', unlockAudio, true);
                };
                
                // 添加捕獲階段的事件監聽器，確保它在其他點擊事件之前觸發
                document.addEventListener('click', unlockAudio, true);
            });
        }
    }

    // 播放音樂函數
    function playMusic() {
        let playPromise = backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                musicToggle.classList.add('playing');
                isMusicPlaying = true;
                updateMusicState('playing');
            }).catch(error => {
                console.error('播放失敗:', error);
            });
        } else {
            musicToggle.classList.add('playing');
            isMusicPlaying = true;
            updateMusicState('playing');
        }
    }

    // 暫停音樂函數
    function pauseMusic() {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
        updateMusicState('paused');
    }

    // 更新音樂狀態並保存到localStorage
    function updateMusicState(state) {
        localStorage.setItem('musicState', state);
        if (state === 'playing') {
            localStorage.setItem('musicTime', backgroundMusic.currentTime);
        }
    }

    // 更新按鈕狀態以反映當前音樂狀態
    function updateButtonState() {
        if (isMusicPlaying) {
            musicToggle.classList.add('playing');
        } else {
            musicToggle.classList.remove('playing');
        }
    }

    // 初始更新按鈕狀態
    updateButtonState();

    // 監聽系統音量變化（如果瀏覽器支持）
    if (navigator.mediaSession) {
        navigator.mediaSession.setActionHandler('seekbackward', null);
        navigator.mediaSession.setActionHandler('seekforward', null);
        navigator.mediaSession.setActionHandler('previoustrack', null);
        navigator.mediaSession.setActionHandler('nexttrack', null);
        
        // 設置媒體會話元數據
        navigator.mediaSession.metadata = new MediaMetadata({
            title: '神秘塔羅背景音樂',
            artist: '塔羅占卜',
            album: '冥想音樂',
            artwork: [
                { src: 'images/tarotcardback.png', sizes: '96x96', type: 'image/png' },
                { src: 'images/tarotcardback.png', sizes: '128x128', type: 'image/png' },
                { src: 'images/tarotcardback.png', sizes: '192x192', type: 'image/png' },
                { src: 'images/tarotcardback.png', sizes: '256x256', type: 'image/png' },
                { src: 'images/tarotcardback.png', sizes: '384x384', type: 'image/png' },
                { src: 'images/tarotcardback.png', sizes: '512x512', type: 'image/png' },
            ]
        });
    }
});