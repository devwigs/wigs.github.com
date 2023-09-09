let chem = {title:"Unit A: Chemistry", id:"chem", menu:[
    {title:"Part 1: Matter", id:"matter", menu:[
        {title:"WHMIS / Lab Safety", id:"whmis"},
        {title:"Experiment Design", id:"expDes"},
        {title:"Classifying Matter", id:"classify"},
        {title:"Atomic Theory", id:"atomic"},
        {title:"Isotopes & Ions", id:"isotope"},
        {title:"Bohr Model (Energy Levels)", id:"bohr"},
        {title:"Periodic Table & Dot Diagrams", id:"dot"},
    ]},
    {title:"Part 2: Compounds", show: "2024.7", id:"compound", menu:[
        {title:"Binary Ionic Compounds", id:"ionic"},
        {title:"Molecular Compounds", id:"molec"},
        {title:"Polyatomic Ions & Solubility", id:"poly"},
        {title:"Acids & Bases", id:"acid"},
        {title:"Properties of Water", id:"water"},
        {title:"Compounds Review", id:"comp_rev"},
    ]},
    {title:"Part 3: Reactions", show: "2024.7", id:"reaction", menu:[
        {title:"Chemical Reactions", id:"rxn"},
        {title:"Formation & Decomposition", id:"rxn_fd"},
        {title:"Single & Double Replacement", id:"rxn_sd"},
        {title:"Hydrocarbon Combustion", id:"rxn_c"},
        {title:"Scientific Notation", id:"sciNot"},
        {title:"Molar Mass", id:"mole"},
    ]},
    {title:"Unit Review", show: "2024.7", id:"chem_rev"}
]};

lesson.chap = "chem";

layout.chem_rev = [{icons:[
    {icon:"gdrv", text:"Assignment", url:"1L7QCik7ThRSG7uBUSi7Z42MwsiUyd9Z7"},
    {icon:"gdrv", text:"Answer Key", show:"2023.12", url:"1IaRKpczT_-sy76rFqBEOcIwyQ3AORxxYAEzJGKJpY7w"},
]}, {img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gas_stove_burner_flame.jpg/800px-Gas_stove_burner_flame.jpg", style:"width:540px;height:405px;object-fit:cover"}}, 1];

// Part 1: Matter

tmp = lesson("whmis", "17DaINWtf22bwSrii_l01QX-fmbB_Lg6j", {img:{src:"https://sbt.blob.core.windows.net/storyboards/oliversmith/lab-safety.png", width:"697"}});
tmp[0].icons.splice(0, 0,
    {icon:"science", text:"WHMIS 2015", url:"https://www.ccohs.ca/oshanswers/chemicals/whmis_ghs/pictograms.html#wb-auto-5"},
    {icon:"science", text:"WHMIS 1988", url:"https://www.ccohs.ca/oshanswers/legisl/msds_lab.html#wb-auto-15"}
);

tmp = lesson("expDes", "1Y3W6O9TbV3M52IMwg70mWxe_XYU5V1Il", {vid:"x2606GQmDqY"});
tmp[0].icons[1].text = "Lab Handout";
tmp[0].icons.pop(); // No key!

lesson("classify", "1xYskBOt8A1NIAYspKoHdovtU5phXunku", {img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Water_drop_001.jpg/320px-Water_drop_001.jpg", width:"608"}});
lesson("atomic", "16k_XKz0D82qcqxp56G-VGaO3P9-ryXMz", {vid:"ogPNZ_MXksM", aspect:"4/3"});
lesson("isotope", "1UMLKousPPjfdkZTgUV_Tb_pGIkKg9F-Z", {img:{src:"https://static.simpsonswiki.com/images/thumb/c/cd/I%27m_Just_a_Girl_Who_Can%27t_Say_D%27oh_billboard_gag.png/790px-I%27m_Just_a_Girl_Who_Can%27t_Say_D%27oh_billboard_gag.png", width:"533"}});
lesson("bohr", "1eJ-Nv6oVnU4Bord038KUUS05xk-vJVwB", {vid:"Vd5duzNtBuI"});
lesson("dot", "1YADHLjIhU0EQKZ1mwhV7rYfCs_COJ-nd", {img:{src:"chem/img/pt.png", width:"724"}})[0].icons.push(
    {icon:"gdrv", text:"Lab Handout", url:"1K4FiSK9MsO7s98JpwtivtrMz_41N_BFL"}
);

// Part 2: Compounds
// Revisions for September 2023 done up to here!!

lesson("ionic", "", {vid:"#PLpVmtCaB-lynZX8Pn3MyzoBCoGjUyNRUi"})[0].icons.push(
    {icon:"gdrv", text:"Lab Handout", url:"1N1WuK6aBg2ywDqSBuEvNoBFoIDLY0ULM"}    
);
lesson("molec", "1zBGawUGNqHVnDipMt72pLBbxjzykblDz", {vid:"#PLpVmtCaB-lymbqbJT3eh6yoIccoR1wAAm"});
lesson("poly", "1O1PJIPG7dVkcLP7BwHhZbla2GUTnqhNO", {vid:"#PLpVmtCaB-lymw8n95Vk-jxco6DuI0TqC_"});
lesson("acid", "1aCWr_vgqf_S9HTu3pRKUsVd6oBqqh3r9", {img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Citrus_x_limon%2C_lemon_on_tree%2C_Co%C3%ADn%2C_Spain.jpg/640px-Citrus_x_limon%2C_lemon_on_tree%2C_Co%C3%ADn%2C_Spain.jpg", width:540}})[0].icons.push(
    {icon:"gdrv", text:"Lab Handout", url:"181mzsLvBms8hrKoLVFEZ_C0aA4fSYgjD"}
);
lesson("water", "1Wqy3DvoCYWjc0PPFKPgRBqAP3lDz3Nq_", {vid:"HVT3Y3_gHGg"});

layout.comp_rev = [{icons:[
    {icon:"gdrv", text:"Compounds Review", url:"1er-RIbhabNosb6_ZH9HZv7ekNGwspIBD"},
    {icon:"gdrv", text:"Answer Key", url:"1Ue7Q5rct2HmJfJB-GAY4Rwp2BLNBtyTI"},
]}, 0, 1];

// Part 3: Reactions

lesson("rxn", "15Xa_SKGBfi7B8MK7Yu9y77KdjlwAcB9m", {vid:"eNsVaUCzvLA"})[0].icons.push(
    {icon:"gdrv", text:"Lab Handout", url:"1uT5hoiboL7d7_AKExX-9qpYuZXXsGZBJ"}    
);
lesson("rxn_fd", "1cLM_ohdfG7wQFTSyqVOhoLtFq4cm1phu", {img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ford_Taurus_Rust.jpg/640px-Ford_Taurus_Rust.jpg", width:540}});
lesson("rxn_sd", "1Pwfjh6e8CmT7LymBABlpL4Rd0B_1IhNe", {img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Precipitate_of_HAuCl4_%2B_NaOH.jpg/524px-Precipitate_of_HAuCl4_%2B_NaOH.jpg", width:442}});
lesson("rxn_c", "1m0haYxXS3wrYfznQWD10557Ds46wDBl9", {img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gas_stove_burner_flame.jpg/800px-Gas_stove_burner_flame.jpg", style:"width:540px;height:405px;object-fit:cover"}});
lesson("sciNot", "1PMCcqP2ioyC_HYrGxAXDtCubwkLo4asq", {img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Andromeeda1.jpg/640px-Andromeeda1.jpg", width:604}});
lesson("mole", "10hs-zakljzCXkFoFu0Tmiuo_J7UvnJWZ", {img:{src:"chem/img/balance.jpg", width:461}});
