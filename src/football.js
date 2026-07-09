const slots = ["GK", "LB", "CB1", "CB2", "RB", "DM", "CM", "AM", "LW", "ST", "RW"];
const slotLabels = {
  GK: "门将",
  LB: "左后卫",
  CB1: "中卫",
  CB2: "中卫",
  RB: "右后卫",
  DM: "后腰",
  CM: "中场",
  AM: "前腰",
  LW: "左边锋",
  ST: "中锋",
  RW: "右边锋"
};
const slotGroups = {
  GK: "GK",
  LB: "DEF",
  CB1: "DEF",
  CB2: "DEF",
  RB: "DEF",
  DM: "MID",
  CM: "MID",
  AM: "MID",
  LW: "FWD",
  ST: "FWD",
  RW: "FWD"
};
const filters = [
  ["ALL", "全部"],
  ["GK", "门将"],
  ["DEF", "后卫"],
  ["MID", "中场"],
  ["FWD", "前锋"]
];
const countries = ["巴西", "阿根廷", "法国", "德国", "意大利", "西班牙", "荷兰", "英格兰", "葡萄牙", "克罗地亚", "乌拉圭", "比利时", "墨西哥", "哥伦比亚", "丹麦", "日本"];
const eras = ["1950s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"];
const formations = [
  { id: "433", name: "4-3-3", profile: "wing" },
  { id: "4231", name: "4-2-3-1", profile: "balance" },
  { id: "352", name: "3-5-2", profile: "control" },
  { id: "442", name: "4-4-2", profile: "direct" },
  { id: "4312", name: "4-3-1-2", profile: "diamond" }
];
const dreamIds = ["messi_arg", "ronaldo_por", "neymar_bra", "baggio_ita", "cruyff_ned", "beckham_eng", "ibra_swe", "modric_cro", "kane_eng", "mbappe_fra", "james_col", "laudrup_den", "nakata_jpn"];

const players = [
  p("pele", "贝利", "巴西", "1970s", ["ST", "AM"], 99, 99, 97, 94, 62, 86, 91, 98, 90, 88),
  p("jairzinho", "雅伊尔津霍", "巴西", "1970s", ["RW", "ST"], 92, 91, 90, 84, 58, 78, 88, 92, 82, 82),
  p("rivelino", "里维利诺", "巴西", "1970s", ["AM", "LW"], 91, 88, 88, 94, 58, 76, 80, 88, 78, 80),
  p("carlos_alberto", "卡洛斯阿尔贝托", "巴西", "1970s", ["RB", "CB2"], 90, 74, 82, 86, 90, 84, 82, 90, 84, 84),
  p("zico", "济科", "巴西", "1980s", ["AM", "CM"], 94, 93, 91, 95, 55, 77, 78, 91, 78, 78),
  p("socrates", "苏格拉底", "巴西", "1980s", ["CM", "AM"], 91, 86, 84, 94, 62, 82, 72, 87, 80, 76),
  p("romario", "罗马里奥", "巴西", "1990s", ["ST"], 95, 98, 93, 82, 48, 78, 83, 96, 70, 76),
  p("bebeto", "贝贝托", "巴西", "1990s", ["ST", "RW"], 89, 91, 87, 80, 50, 72, 82, 88, 76, 78),
  p("r9_bra", "罗纳尔多", "巴西", "2000s", ["ST"], 98, 99, 98, 80, 50, 90, 96, 98, 78, 70),
  p("rivaldo", "里瓦尔多", "巴西", "2000s", ["AM", "LW"], 94, 94, 91, 92, 58, 80, 80, 92, 78, 76),
  p("ronaldinho", "罗纳尔迪尼奥", "巴西", "2000s", ["LW", "AM"], 96, 91, 99, 96, 45, 72, 86, 92, 74, 68),
  p("kaka_bra", "卡卡", "巴西", "2000s", ["AM", "CM"], 92, 90, 91, 90, 58, 82, 88, 89, 80, 76),
  p("cafu", "卡福", "巴西", "2000s", ["RB"], 91, 72, 82, 84, 92, 90, 88, 90, 94, 86),
  p("roberto_carlos", "罗伯托卡洛斯", "巴西", "2000s", ["LB"], 92, 78, 88, 84, 88, 88, 94, 90, 90, 84),
  p("neymar_bra", "内马尔", "巴西", "2010s", ["LW", "AM"], 95, 92, 98, 92, 42, 72, 88, 90, 72, 60, true),
  p("thiago_silva", "蒂亚戈席尔瓦", "巴西", "2010s", ["CB1", "CB2"], 91, 58, 70, 78, 95, 88, 74, 88, 88, 86),
  p("vinicius_bra", "维尼修斯", "巴西", "2020s", ["LW"], 92, 88, 94, 82, 38, 76, 98, 86, 82, 78),
  p("casemiro_bra", "卡塞米罗", "巴西", "2020s", ["DM", "CM"], 89, 72, 76, 82, 94, 90, 70, 88, 86, 82),
  p("taffarel", "塔法雷尔", "巴西", "1990s", ["GK"], 88, 34, 46, 56, 88, 78, 50, 92, 80, 84),

  p("maradona", "马拉多纳", "阿根廷", "1980s", ["AM", "ST"], 99, 97, 100, 96, 48, 82, 90, 99, 78, 76),
  p("passarella", "帕萨雷拉", "阿根廷", "1970s", ["CB1", "CB2"], 90, 70, 72, 78, 94, 88, 70, 90, 84, 82),
  p("batistuta", "巴蒂斯图塔", "阿根廷", "1990s", ["ST"], 93, 96, 84, 72, 50, 88, 78, 91, 78, 78),
  p("zanetti", "萨内蒂", "阿根廷", "2000s", ["RB", "LB", "DM"], 91, 72, 82, 86, 92, 88, 86, 90, 94, 90),
  p("riquelme", "里克尔梅", "阿根廷", "2000s", ["AM", "CM"], 91, 84, 88, 96, 50, 72, 64, 88, 70, 70),
  p("messi_arg", "梅西", "阿根廷", "2020s", ["RW", "AM", "ST"], 99, 97, 100, 98, 42, 72, 84, 99, 74, 82, true),
  p("di_maria", "迪马利亚", "阿根廷", "2020s", ["RW", "LW", "AM"], 91, 86, 90, 88, 62, 74, 86, 93, 78, 74),
  p("lautaro", "劳塔罗", "阿根廷", "2020s", ["ST"], 88, 90, 82, 72, 60, 82, 78, 86, 82, 82),
  p("emi_martinez", "马丁内斯", "阿根廷", "2020s", ["GK"], 89, 45, 54, 62, 88, 88, 58, 95, 82, 88),
  p("mascherano", "马斯切拉诺", "阿根廷", "2010s", ["DM", "CB1", "CB2"], 88, 50, 66, 76, 94, 82, 72, 92, 86, 82),
  p("romero_arg", "罗梅罗", "阿根廷", "2020s", ["CB1", "CB2"], 86, 42, 58, 68, 90, 88, 70, 86, 82, 82),
  p("sorin", "索林", "阿根廷", "2000s", ["LB"], 84, 66, 78, 80, 82, 76, 80, 86, 90, 82),
  p("molina_arg", "莫利纳", "阿根廷", "2020s", ["RB"], 82, 62, 74, 76, 82, 76, 82, 84, 84, 80),
  p("redondo", "雷东多", "阿根廷", "1990s", ["DM", "CM"], 89, 72, 86, 90, 84, 78, 72, 88, 80, 86),

  p("platini", "普拉蒂尼", "法国", "1980s", ["AM", "CM"], 95, 93, 88, 97, 58, 76, 74, 94, 78, 82),
  p("zidane", "齐达内", "法国", "1990s", ["AM", "CM"], 97, 91, 96, 98, 66, 88, 72, 98, 80, 82),
  p("deschamps", "德尚", "法国", "1990s", ["DM", "CM"], 88, 60, 70, 82, 92, 86, 70, 92, 86, 88),
  p("thuram", "图拉姆", "法国", "1990s", ["RB", "CB1", "CB2"], 91, 58, 72, 78, 96, 92, 82, 92, 88, 86),
  p("henry", "亨利", "法国", "2000s", ["ST", "LW"], 96, 96, 93, 84, 48, 82, 96, 91, 82, 76),
  p("vieira", "维埃拉", "法国", "2000s", ["CM", "DM"], 92, 78, 82, 86, 92, 94, 82, 90, 88, 82),
  p("griezmann", "格列兹曼", "法国", "2010s", ["AM", "ST", "RW"], 91, 90, 88, 88, 74, 76, 82, 92, 88, 86),
  p("mbappe_fra", "姆巴佩", "法国", "2020s", ["ST", "LW", "RW"], 97, 97, 94, 82, 46, 82, 100, 95, 84, 82, true),
  p("kante", "坎特", "法国", "2010s", ["DM", "CM"], 91, 68, 80, 82, 98, 86, 84, 92, 96, 88),
  p("lloris", "洛里", "法国", "2010s", ["GK"], 87, 40, 56, 62, 86, 76, 70, 88, 82, 82),
  p("lucas_fra", "卢卡斯埃尔南德斯", "法国", "2020s", ["LB", "CB1", "CB2"], 85, 54, 70, 74, 88, 84, 78, 84, 82, 80),
  p("varane", "瓦拉内", "法国", "2010s", ["CB1", "CB2"], 88, 46, 64, 70, 92, 88, 82, 90, 84, 86),
  p("lizarazu", "利扎拉祖", "法国", "1990s", ["LB"], 86, 62, 76, 80, 88, 72, 84, 88, 88, 84),
  p("pavard", "帕瓦尔", "法国", "2010s", ["RB", "CB2"], 84, 60, 70, 76, 86, 78, 74, 86, 84, 82),

  p("beckenbauer", "贝肯鲍尔", "德国", "1970s", ["CB1", "CB2", "DM"], 97, 80, 86, 94, 98, 88, 76, 98, 88, 90),
  p("gerd_muller", "盖德穆勒", "德国", "1970s", ["ST"], 96, 99, 84, 70, 48, 82, 76, 98, 78, 84),
  p("matthaus", "马特乌斯", "德国", "1990s", ["CM", "DM"], 95, 88, 88, 90, 94, 90, 86, 96, 92, 90),
  p("klinsmann", "克林斯曼", "德国", "1990s", ["ST"], 91, 92, 82, 76, 52, 86, 86, 90, 82, 82),
  p("kahn", "卡恩", "德国", "2000s", ["GK"], 93, 35, 48, 58, 92, 92, 54, 96, 84, 90),
  p("ballack", "巴拉克", "德国", "2000s", ["CM", "AM", "DM"], 91, 88, 82, 86, 86, 90, 76, 92, 84, 82),
  p("neuer", "诺伊尔", "德国", "2010s", ["GK"], 94, 42, 70, 72, 92, 84, 70, 94, 90, 92),
  p("kroos", "克罗斯", "德国", "2010s", ["CM", "DM"], 93, 82, 84, 98, 76, 78, 62, 92, 86, 90),
  p("muller", "托马斯穆勒", "德国", "2010s", ["AM", "RW", "ST"], 91, 90, 82, 86, 70, 74, 78, 96, 88, 88),
  p("lahm", "拉姆", "德国", "2010s", ["RB", "LB", "DM"], 92, 70, 82, 90, 94, 76, 82, 92, 90, 92),
  p("klose", "克洛泽", "德国", "2010s", ["ST"], 90, 94, 78, 74, 58, 84, 74, 96, 86, 84),
  p("hummels", "胡梅尔斯", "德国", "2010s", ["CB1", "CB2"], 88, 54, 70, 82, 90, 84, 66, 88, 82, 88),
  p("brehme", "布雷默", "德国", "1990s", ["LB", "RB"], 87, 74, 78, 84, 86, 78, 76, 90, 84, 84),
  p("ozil", "厄齐尔", "德国", "2010s", ["AM", "RW"], 90, 80, 90, 96, 48, 58, 70, 86, 70, 76),

  p("dino_zoff", "佐夫", "意大利", "1980s", ["GK"], 92, 35, 46, 58, 90, 82, 48, 96, 78, 92),
  p("baggio_ita", "巴乔", "意大利", "1990s", ["AM", "ST"], 94, 93, 94, 90, 44, 72, 78, 88, 72, 68, true),
  p("maldini", "马尔蒂尼", "意大利", "1990s", ["LB", "CB1", "CB2"], 96, 62, 78, 84, 99, 86, 82, 96, 90, 94),
  p("baret_si", "巴雷西", "意大利", "1990s", ["CB1", "CB2"], 95, 52, 72, 82, 99, 80, 70, 96, 84, 92),
  p("buffon", "布冯", "意大利", "2000s", ["GK"], 96, 36, 50, 58, 96, 88, 52, 98, 88, 94),
  p("cannavaro", "卡纳瓦罗", "意大利", "2000s", ["CB1", "CB2"], 94, 48, 66, 74, 99, 84, 78, 98, 88, 92),
  p("pirlo", "皮尔洛", "意大利", "2000s", ["CM", "DM"], 93, 78, 82, 100, 68, 66, 58, 95, 82, 90),
  p("totti", "托蒂", "意大利", "2000s", ["AM", "ST"], 92, 91, 86, 92, 54, 84, 70, 92, 78, 80),
  p("chiellini", "基耶利尼", "意大利", "2010s", ["CB1", "CB2"], 91, 45, 62, 68, 98, 90, 66, 94, 84, 90),
  p("donnarumma", "多纳鲁马", "意大利", "2020s", ["GK"], 88, 34, 48, 58, 88, 88, 50, 90, 82, 84),
  p("nesta", "内斯塔", "意大利", "2000s", ["CB1", "CB2"], 92, 42, 64, 74, 98, 86, 72, 92, 82, 90),
  p("zambrotta", "赞布罗塔", "意大利", "2000s", ["RB", "LB"], 88, 66, 80, 82, 88, 78, 82, 88, 88, 86),
  p("gattuso", "加图索", "意大利", "2000s", ["DM", "CM"], 86, 58, 68, 76, 92, 84, 68, 90, 88, 84),
  p("del_piero", "皮耶罗", "意大利", "2000s", ["LW", "ST", "AM"], 91, 92, 90, 88, 46, 70, 76, 90, 72, 74),
  p("chiesa_ita", "基耶萨", "意大利", "2020s", ["RW", "LW"], 84, 84, 86, 78, 58, 74, 88, 84, 78, 76),

  p("iniesta", "伊涅斯塔", "西班牙", "2010s", ["CM", "AM", "LW"], 96, 86, 96, 98, 68, 70, 78, 98, 84, 88),
  p("xavi", "哈维", "西班牙", "2010s", ["CM", "DM"], 96, 82, 90, 100, 72, 66, 66, 96, 88, 92),
  p("busquets", "布斯克茨", "西班牙", "2010s", ["DM", "CM"], 92, 62, 80, 94, 88, 72, 52, 92, 86, 90),
  p("casillas", "卡西利亚斯", "西班牙", "2010s", ["GK"], 94, 35, 50, 56, 93, 78, 62, 98, 86, 90),
  p("ramos", "拉莫斯", "西班牙", "2010s", ["CB1", "CB2", "RB"], 93, 72, 78, 82, 96, 92, 78, 96, 88, 86),
  p("villa", "比利亚", "西班牙", "2010s", ["ST", "LW"], 91, 94, 86, 78, 50, 74, 82, 92, 80, 82),
  p("raul", "劳尔", "西班牙", "2000s", ["ST", "AM"], 91, 92, 86, 82, 58, 74, 76, 92, 82, 84),
  p("torres", "托雷斯", "西班牙", "2010s", ["ST"], 88, 90, 86, 72, 48, 80, 90, 90, 76, 70),
  p("rodri", "罗德里", "西班牙", "2020s", ["DM", "CM"], 93, 78, 82, 94, 92, 88, 66, 92, 90, 92),
  p("pedri", "佩德里", "西班牙", "2020s", ["CM", "AM"], 88, 78, 88, 92, 68, 62, 72, 84, 78, 82),
  p("puyol", "普约尔", "西班牙", "2010s", ["CB1", "CB2", "RB"], 91, 52, 66, 72, 96, 88, 74, 96, 86, 88),
  p("jordi_alba", "阿尔巴", "西班牙", "2010s", ["LB"], 86, 70, 82, 84, 82, 68, 90, 86, 88, 84),
  p("carvajal", "卡瓦哈尔", "西班牙", "2020s", ["RB"], 86, 64, 78, 82, 86, 78, 82, 88, 86, 86),

  p("cruyff_ned", "克鲁伊夫", "荷兰", "1970s", ["AM", "ST", "LW"], 97, 94, 98, 96, 60, 78, 88, 98, 86, 82, true),
  p("neeskens", "内斯肯斯", "荷兰", "1970s", ["CM", "DM"], 91, 82, 84, 88, 88, 86, 82, 92, 90, 84),
  p("van_basten", "范巴斯滕", "荷兰", "1980s", ["ST"], 96, 98, 91, 80, 50, 84, 82, 94, 72, 58),
  p("gullit", "古利特", "荷兰", "1980s", ["AM", "CM", "ST"], 94, 91, 90, 90, 82, 92, 84, 93, 86, 82),
  p("rijkaard", "里杰卡尔德", "荷兰", "1980s", ["DM", "CB1", "CB2"], 92, 72, 78, 86, 94, 90, 76, 92, 86, 86),
  p("bergkamp", "博格坎普", "荷兰", "1990s", ["AM", "ST"], 93, 91, 95, 92, 50, 72, 76, 91, 76, 74),
  p("seedorf", "西多夫", "荷兰", "2000s", ["CM", "AM", "DM"], 90, 82, 86, 90, 78, 82, 78, 88, 86, 84),
  p("robben", "罗本", "荷兰", "2010s", ["RW", "LW"], 93, 91, 94, 82, 46, 78, 94, 92, 70, 62),
  p("sneijder", "斯内德", "荷兰", "2010s", ["AM", "CM"], 90, 84, 86, 94, 62, 70, 72, 92, 76, 78),
  p("van_dijk", "范戴克", "荷兰", "2020s", ["CB1", "CB2"], 93, 58, 72, 78, 98, 96, 82, 92, 88, 90),
  p("van_der_sar", "范德萨", "荷兰", "2000s", ["GK"], 91, 34, 50, 62, 90, 84, 54, 92, 84, 90),
  p("koeman", "科曼", "荷兰", "1990s", ["CB1", "CB2", "DM"], 90, 76, 72, 88, 88, 82, 66, 88, 78, 86),
  p("frank_de_boer", "弗兰克德波尔", "荷兰", "1990s", ["LB", "CB1", "CB2"], 86, 62, 72, 82, 88, 78, 70, 84, 82, 84),
  p("dumfries", "邓弗里斯", "荷兰", "2020s", ["RB"], 82, 70, 74, 76, 82, 86, 84, 82, 86, 80),

  p("charlton", "博比查尔顿", "英格兰", "1970s", ["AM", "CM"], 94, 92, 84, 92, 66, 78, 76, 96, 82, 88),
  p("lineker", "莱因克尔", "英格兰", "1980s", ["ST"], 90, 94, 82, 72, 46, 70, 78, 92, 82, 84),
  p("gascoigne", "加斯科因", "英格兰", "1990s", ["AM", "CM"], 89, 82, 88, 90, 58, 76, 74, 84, 68, 58),
  p("shearer", "希勒", "英格兰", "1990s", ["ST"], 91, 95, 80, 72, 54, 88, 72, 90, 84, 86),
  p("beckham_eng", "贝克汉姆", "英格兰", "2000s", ["RM", "RW", "CM"], 90, 82, 82, 97, 72, 72, 70, 90, 90, 86, true),
  p("gerrard", "杰拉德", "英格兰", "2000s", ["CM", "AM", "DM"], 92, 88, 86, 90, 82, 86, 80, 90, 88, 84),
  p("lampard", "兰帕德", "英格兰", "2000s", ["CM", "AM"], 91, 90, 80, 88, 74, 80, 72, 90, 86, 84),
  p("rooney", "鲁尼", "英格兰", "2010s", ["ST", "AM"], 91, 90, 86, 86, 68, 88, 78, 88, 82, 76),
  p("kane_eng", "凯恩", "英格兰", "2020s", ["ST", "AM"], 93, 97, 82, 88, 56, 82, 68, 90, 86, 82, true),
  p("bellingham", "贝林厄姆", "英格兰", "2020s", ["AM", "CM"], 91, 88, 86, 88, 82, 88, 82, 92, 90, 86),
  p("shilton", "希尔顿", "英格兰", "1980s", ["GK"], 89, 32, 44, 54, 88, 80, 48, 90, 82, 86),
  p("terry", "特里", "英格兰", "2000s", ["CB1", "CB2"], 90, 50, 62, 70, 94, 90, 62, 90, 84, 86),
  p("rio", "里奥费迪南德", "英格兰", "2000s", ["CB1", "CB2"], 91, 48, 70, 76, 94, 88, 78, 90, 86, 88),
  p("ashley_cole", "阿什利科尔", "英格兰", "2000s", ["LB"], 90, 62, 78, 82, 94, 74, 84, 92, 88, 88),
  p("walker", "沃克", "英格兰", "2020s", ["RB", "CB2"], 86, 58, 74, 78, 88, 86, 94, 86, 88, 84),

  p("eusebio", "尤西比奥", "葡萄牙", "1970s", ["ST", "LW"], 95, 97, 90, 82, 48, 82, 92, 96, 80, 82),
  p("figo", "菲戈", "葡萄牙", "2000s", ["RW", "AM"], 92, 86, 90, 92, 62, 76, 80, 90, 82, 80),
  p("rui_costa", "鲁伊科斯塔", "葡萄牙", "2000s", ["AM", "CM"], 90, 82, 86, 94, 56, 72, 68, 88, 76, 78),
  p("deco", "德科", "葡萄牙", "2000s", ["CM", "AM"], 89, 80, 84, 92, 68, 70, 70, 88, 84, 80),
  p("ronaldo_por", "C罗", "葡萄牙", "2010s", ["LW", "ST", "RW"], 99, 99, 93, 82, 52, 94, 94, 97, 88, 82, true),
  p("pepe", "佩佩", "葡萄牙", "2010s", ["CB1", "CB2"], 89, 48, 62, 68, 96, 92, 72, 92, 84, 86),
  p("bruno", "布鲁诺费尔南德斯", "葡萄牙", "2020s", ["AM", "CM"], 89, 86, 84, 90, 66, 72, 72, 88, 86, 80),
  p("bernardo", "贝尔纳多席尔瓦", "葡萄牙", "2020s", ["RW", "AM", "CM"], 90, 82, 92, 91, 72, 66, 78, 88, 88, 82),
  p("dias", "鲁本迪亚斯", "葡萄牙", "2020s", ["CB1", "CB2"], 89, 45, 62, 70, 94, 90, 68, 90, 86, 88),
  p("joao_felix", "菲利克斯", "葡萄牙", "2020s", ["AM", "ST", "LW"], 86, 84, 88, 84, 46, 70, 78, 80, 70, 64),
  p("rui_patricio", "帕特里西奥", "葡萄牙", "2010s", ["GK"], 85, 32, 44, 56, 84, 78, 50, 86, 80, 82),
  p("cancelo", "坎塞洛", "葡萄牙", "2020s", ["RB", "LB"], 88, 72, 86, 88, 80, 70, 84, 84, 84, 84),
  p("ricardo_carvalho", "卡瓦略", "葡萄牙", "2000s", ["CB1", "CB2"], 88, 44, 66, 74, 92, 82, 72, 88, 82, 86),
  p("nuno_mendes", "努诺门德斯", "葡萄牙", "2020s", ["LB"], 84, 66, 80, 80, 82, 72, 88, 82, 82, 80),
  p("miguel_por", "米格尔", "葡萄牙", "2000s", ["RB"], 84, 60, 76, 78, 84, 76, 86, 84, 84, 82),
  p("william_carvalho", "威廉卡瓦略", "葡萄牙", "2010s", ["DM", "CM"], 84, 66, 72, 80, 84, 88, 58, 82, 78, 80),

  p("suker", "苏克", "克罗地亚", "1990s", ["ST"], 90, 94, 84, 76, 48, 72, 74, 90, 78, 80),
  p("bobans", "博班", "克罗地亚", "1990s", ["CM", "AM"], 88, 82, 84, 90, 66, 76, 68, 86, 78, 78),
  p("prosinecki", "普罗辛内茨基", "克罗地亚", "1990s", ["AM", "CM"], 88, 80, 86, 90, 56, 70, 66, 84, 72, 66),
  p("modric_cro", "莫德里奇", "克罗地亚", "2010s", ["CM", "AM", "DM"], 95, 84, 92, 98, 78, 68, 76, 98, 90, 90, true),
  p("rakitic", "拉基蒂奇", "克罗地亚", "2010s", ["CM", "AM", "DM"], 89, 82, 84, 90, 72, 76, 70, 88, 84, 82),
  p("mandzukic", "曼朱基奇", "克罗地亚", "2010s", ["ST", "LW"], 88, 88, 78, 72, 70, 90, 72, 90, 90, 84),
  p("perisic", "佩里西奇", "克罗地亚", "2010s", ["LW", "RW", "LB"], 87, 84, 82, 82, 72, 80, 82, 88, 90, 82),
  p("kovacic", "科瓦契奇", "克罗地亚", "2020s", ["CM", "DM"], 86, 72, 88, 88, 76, 70, 76, 84, 86, 82),
  p("gvardiol", "格瓦迪奥尔", "克罗地亚", "2020s", ["CB1", "CB2", "LB"], 87, 62, 76, 78, 92, 88, 82, 86, 86, 84),
  p("livakovic", "利瓦科维奇", "克罗地亚", "2020s", ["GK"], 84, 34, 46, 54, 84, 78, 54, 90, 78, 80),
  p("srna", "斯尔纳", "克罗地亚", "2000s", ["RB", "RM"], 86, 72, 78, 84, 82, 76, 78, 88, 90, 84),
  p("lovren", "洛夫伦", "克罗地亚", "2010s", ["CB1", "CB2"], 83, 44, 58, 66, 86, 86, 66, 84, 80, 80),
  p("simunic", "西穆尼奇", "克罗地亚", "2000s", ["CB1", "CB2"], 82, 42, 56, 64, 86, 84, 64, 82, 78, 80),
  p("kramaric", "克拉马里奇", "克罗地亚", "2020s", ["RW", "ST", "AM"], 84, 86, 82, 80, 52, 70, 72, 84, 78, 76),

  p("schiaffino", "斯基亚菲诺", "乌拉圭", "1950s", ["AM", "ST"], 94, 91, 90, 92, 54, 76, 78, 98, 82, 86),
  p("ghiggia", "吉贾", "乌拉圭", "1950s", ["RW"], 89, 88, 88, 82, 48, 72, 86, 96, 80, 80),
  p("varela", "奥布杜里奥巴雷拉", "乌拉圭", "1950s", ["DM", "CM"], 91, 72, 78, 84, 92, 90, 70, 98, 90, 92),
  p("francescoli", "弗朗西斯科利", "乌拉圭", "1990s", ["AM", "ST"], 91, 88, 90, 90, 50, 74, 76, 90, 76, 80),
  p("forlan", "弗兰", "乌拉圭", "2010s", ["ST", "AM"], 91, 94, 84, 86, 54, 78, 78, 94, 84, 82),
  p("suarez_uru", "苏亚雷斯", "乌拉圭", "2010s", ["ST"], 94, 96, 88, 82, 56, 86, 78, 92, 82, 78),
  p("cavani", "卡瓦尼", "乌拉圭", "2010s", ["ST", "LW"], 90, 92, 80, 76, 66, 88, 78, 90, 92, 84),
  p("godin", "戈丁", "乌拉圭", "2010s", ["CB1", "CB2"], 91, 48, 62, 70, 96, 90, 62, 94, 86, 90),
  p("gimenez_uru", "希门尼斯", "乌拉圭", "2020s", ["CB1", "CB2"], 86, 42, 58, 66, 90, 88, 70, 86, 82, 82),
  p("muslera", "穆斯莱拉", "乌拉圭", "2010s", ["GK"], 86, 32, 44, 54, 86, 80, 54, 90, 82, 82),
  p("valverde", "巴尔韦德", "乌拉圭", "2020s", ["CM", "DM", "RW"], 91, 86, 84, 88, 84, 88, 90, 90, 92, 88),
  p("bentancur", "本坦库尔", "乌拉圭", "2020s", ["CM", "DM"], 85, 72, 80, 84, 82, 80, 74, 84, 84, 82),
  p("araujo_uru", "阿劳霍", "乌拉圭", "2020s", ["CB1", "CB2", "RB"], 88, 48, 66, 72, 92, 92, 82, 88, 84, 84),
  p("caceres", "卡塞雷斯", "乌拉圭", "2010s", ["RB", "LB", "CB2"], 84, 52, 66, 72, 86, 82, 76, 86, 84, 82),

  p("pfaff", "普法夫", "比利时", "1980s", ["GK"], 88, 32, 44, 54, 88, 78, 52, 90, 80, 84),
  p("courtois", "库尔图瓦", "比利时", "2020s", ["GK"], 93, 34, 48, 58, 94, 86, 54, 96, 84, 90),
  p("kompany", "孔帕尼", "比利时", "2010s", ["CB1", "CB2"], 90, 54, 68, 76, 94, 90, 74, 90, 84, 88),
  p("vertonghen", "维尔通亨", "比利时", "2010s", ["CB1", "CB2", "LB"], 87, 56, 70, 78, 88, 82, 68, 88, 84, 86),
  p("alderweireld", "阿尔德韦雷尔德", "比利时", "2010s", ["CB1", "CB2", "RB"], 87, 52, 66, 80, 88, 82, 66, 88, 84, 86),
  p("de_bruyne", "德布劳内", "比利时", "2020s", ["CM", "AM", "RW"], 96, 90, 88, 100, 68, 78, 76, 94, 84, 92),
  p("hazard", "阿扎尔", "比利时", "2010s", ["LW", "AM"], 94, 88, 98, 90, 44, 72, 86, 90, 70, 76),
  p("lukaku", "卢卡库", "比利时", "2020s", ["ST"], 88, 90, 78, 72, 50, 96, 82, 84, 78, 72),
  p("mertens", "默滕斯", "比利时", "2010s", ["RW", "LW", "ST"], 86, 86, 88, 82, 46, 64, 86, 84, 76, 76),
  p("witsel", "维特塞尔", "比利时", "2010s", ["DM", "CM"], 86, 70, 78, 84, 86, 84, 62, 86, 84, 86),
  p("fellaini", "费莱尼", "比利时", "2010s", ["CM", "DM", "AM"], 84, 78, 72, 78, 80, 92, 58, 86, 82, 78),
  p("carrasco", "卡拉斯科", "比利时", "2020s", ["LW", "RW", "LB"], 84, 82, 86, 80, 62, 72, 88, 82, 82, 78),
  p("meunier", "默尼耶", "比利时", "2010s", ["RB"], 83, 66, 74, 78, 82, 82, 78, 84, 84, 80),

  p("campos_mex", "坎波斯", "墨西哥", "1990s", ["GK"], 86, 42, 66, 60, 84, 70, 78, 90, 80, 82),
  p("ochoa", "奥乔亚", "墨西哥", "2010s", ["GK"], 86, 34, 48, 56, 86, 76, 54, 94, 80, 82),
  p("rafa_marquez", "拉法马尔克斯", "墨西哥", "2000s", ["CB1", "CB2", "DM"], 90, 64, 76, 88, 92, 82, 66, 92, 84, 92),
  p("claudio_suarez", "克劳迪奥苏亚雷斯", "墨西哥", "1990s", ["CB1", "CB2"], 85, 42, 58, 68, 88, 82, 64, 86, 82, 84),
  p("salcido", "萨尔西多", "墨西哥", "2010s", ["LB", "CB1"], 82, 58, 72, 76, 84, 78, 76, 84, 84, 80),
  p("layun", "拉云", "墨西哥", "2010s", ["RB", "LB"], 81, 62, 74, 78, 80, 74, 78, 82, 84, 78),
  p("hugo_sanchez", "乌戈桑切斯", "墨西哥", "1980s", ["ST"], 92, 96, 86, 76, 46, 78, 82, 90, 78, 78),
  p("cuauhtemoc", "布兰科", "墨西哥", "2000s", ["AM", "ST"], 87, 86, 88, 86, 42, 76, 62, 88, 70, 76),
  p("chicharito", "埃尔南德斯", "墨西哥", "2010s", ["ST"], 84, 88, 76, 70, 48, 72, 78, 86, 82, 74),
  p("guardado", "瓜尔达多", "墨西哥", "2010s", ["CM", "DM", "LB"], 84, 72, 80, 84, 78, 72, 74, 86, 88, 84),
  p("herrera_mex", "埃克托埃雷拉", "墨西哥", "2010s", ["CM", "DM"], 83, 74, 78, 82, 80, 82, 72, 84, 86, 82),
  p("lozano", "洛萨诺", "墨西哥", "2020s", ["LW", "RW"], 84, 84, 86, 78, 48, 70, 90, 84, 78, 74),
  p("luis_hernandez", "路易斯埃尔南德斯", "墨西哥", "1990s", ["ST", "LW"], 84, 88, 82, 74, 44, 70, 82, 88, 78, 74),

  p("higuita", "伊基塔", "哥伦比亚", "1990s", ["GK"], 86, 46, 76, 70, 84, 76, 72, 90, 78, 82),
  p("cordoba_col", "伊万科尔多巴", "哥伦比亚", "2000s", ["CB1", "CB2", "RB"], 88, 44, 66, 72, 92, 88, 86, 88, 84, 84),
  p("yepes", "耶佩斯", "哥伦比亚", "2010s", ["CB1", "CB2"], 84, 42, 58, 66, 88, 84, 58, 86, 80, 82),
  p("davinson", "达文森桑切斯", "哥伦比亚", "2020s", ["CB1", "CB2"], 83, 42, 60, 66, 86, 88, 78, 82, 80, 80),
  p("zuniga", "苏尼加", "哥伦比亚", "2010s", ["RB", "LB"], 82, 62, 78, 78, 80, 76, 84, 82, 84, 78),
  p("armero", "阿尔梅罗", "哥伦比亚", "2010s", ["LB"], 81, 64, 76, 76, 78, 76, 86, 82, 84, 76),
  p("valderrama", "巴尔德拉马", "哥伦比亚", "1990s", ["AM", "CM"], 91, 78, 88, 96, 54, 66, 58, 90, 72, 88),
  p("rincon", "林孔", "哥伦比亚", "1990s", ["CM", "DM"], 86, 76, 80, 84, 84, 86, 76, 88, 84, 84),
  p("james_col", "哈梅斯罗德里格斯", "哥伦比亚", "2010s", ["AM", "RW", "CM"], 91, 90, 88, 92, 54, 70, 72, 94, 76, 82, true),
  p("cuadrado", "夸德拉多", "哥伦比亚", "2010s", ["RW", "RB"], 87, 80, 90, 84, 68, 72, 88, 86, 86, 82),
  p("falcao_col", "法尔考", "哥伦比亚", "2010s", ["ST"], 91, 95, 84, 76, 52, 84, 76, 90, 78, 76),
  p("asprilla", "阿斯普里拉", "哥伦比亚", "1990s", ["ST", "LW"], 87, 88, 88, 78, 48, 82, 86, 84, 72, 70),
  p("ospina", "奥斯皮纳", "哥伦比亚", "2010s", ["GK"], 84, 32, 44, 54, 84, 74, 58, 88, 82, 80),

  p("schmeichel_den", "舒梅切尔", "丹麦", "1990s", ["GK"], 94, 34, 48, 58, 94, 92, 54, 96, 84, 90),
  p("kjaer", "克亚尔", "丹麦", "2020s", ["CB1", "CB2"], 84, 46, 60, 70, 88, 84, 58, 90, 82, 86),
  p("agger", "阿格尔", "丹麦", "2010s", ["CB1", "CB2"], 85, 60, 70, 76, 88, 82, 66, 86, 80, 84),
  p("christensen_den", "克里斯滕森", "丹麦", "2020s", ["CB1", "CB2", "DM"], 85, 48, 68, 78, 88, 78, 70, 86, 82, 86),
  p("maehle", "梅勒", "丹麦", "2020s", ["LB", "RB"], 82, 70, 78, 78, 80, 76, 84, 84, 88, 80),
  p("helveg", "赫尔维格", "丹麦", "2000s", ["RB", "LB"], 83, 58, 72, 78, 84, 76, 76, 86, 84, 82),
  p("henrik_andersen", "亨里克安德森", "丹麦", "1990s", ["LB", "CB1"], 82, 54, 70, 76, 84, 78, 74, 86, 84, 80),
  p("martin_laursen", "马丁劳尔森", "丹麦", "2000s", ["CB1", "CB2"], 84, 44, 58, 66, 88, 86, 62, 86, 80, 82),
  p("soren_lerby", "勒尔比", "丹麦", "1980s", ["CM", "DM"], 88, 80, 82, 88, 82, 84, 76, 90, 88, 88),
  p("laudrup_den", "米歇尔劳德鲁普", "丹麦", "1990s", ["AM", "LW", "CM"], 96, 88, 98, 98, 50, 72, 78, 92, 76, 88, true),
  p("brian_laudrup", "布莱恩劳德鲁普", "丹麦", "1990s", ["LW", "RW", "AM"], 90, 84, 92, 88, 48, 74, 88, 90, 78, 80),
  p("eriksen", "埃里克森", "丹麦", "2020s", ["AM", "CM"], 88, 84, 84, 92, 58, 66, 66, 90, 78, 84),
  p("tomasson", "托马森", "丹麦", "2000s", ["ST", "AM"], 85, 88, 80, 78, 54, 76, 74, 88, 82, 80),
  p("poulsen_den", "波尔森", "丹麦", "2020s", ["ST", "RW"], 82, 82, 76, 72, 64, 88, 82, 84, 88, 78),
  p("rommedahl", "罗梅达尔", "丹麦", "2000s", ["RW", "LW"], 82, 80, 82, 78, 46, 70, 92, 84, 82, 76),

  p("kawaguchi", "川口能活", "日本", "2000s", ["GK"], 82, 30, 44, 54, 82, 70, 58, 88, 80, 78),
  p("kawashima", "川岛永嗣", "日本", "2010s", ["GK"], 82, 30, 44, 54, 82, 72, 54, 86, 80, 78),
  p("nakazawa", "中泽佑二", "日本", "2000s", ["CB1", "CB2"], 82, 42, 58, 66, 86, 82, 60, 84, 82, 80),
  p("yoshida_jpn", "吉田麻也", "日本", "2010s", ["CB1", "CB2"], 83, 44, 60, 68, 86, 84, 62, 86, 82, 82),
  p("tomiyasu", "富安健洋", "日本", "2020s", ["CB1", "CB2", "RB"], 84, 48, 70, 76, 88, 82, 76, 84, 84, 84),
  p("nagatomo", "长友佑都", "日本", "2010s", ["LB", "RB"], 82, 62, 78, 78, 80, 72, 86, 84, 90, 80),
  p("hasebe", "长谷部诚", "日本", "2010s", ["DM", "CM"], 84, 68, 76, 84, 84, 78, 68, 88, 88, 88),
  p("endo_jpn", "远藤保仁", "日本", "2010s", ["CM", "DM"], 84, 70, 78, 88, 74, 66, 60, 86, 84, 88),
  p("nakata_jpn", "中田英寿", "日本", "2000s", ["AM", "CM"], 89, 84, 86, 90, 66, 78, 76, 88, 82, 86, true),
  p("honda_jpn", "本田圭佑", "日本", "2010s", ["AM", "RW", "ST"], 86, 86, 82, 86, 58, 78, 70, 92, 78, 82),
  p("kagawa", "香川真司", "日本", "2010s", ["AM", "LW"], 85, 82, 88, 84, 52, 64, 78, 84, 76, 80),
  p("kubo_jpn", "久保建英", "日本", "2020s", ["RW", "AM"], 84, 82, 88, 84, 50, 62, 82, 82, 76, 80),
  p("mitoma", "三笘薰", "日本", "2020s", ["LW"], 85, 82, 90, 80, 52, 68, 88, 84, 82, 78),
  p("okazaki", "冈崎慎司", "日本", "2010s", ["ST", "RW"], 83, 84, 78, 74, 62, 78, 78, 88, 90, 78),

  p("ibra_swe", "伊布", "瑞典", "2010s", ["ST"], 93, 96, 88, 82, 46, 96, 70, 88, 72, 62, true)
];

const historyLinks = [
  { ids: ["pele", "jairzinho", "rivelino", "carlos_alberto"], name: "1970 巴西黄金锋线", bonus: 10, note: "桑巴进攻完全点燃" },
  { ids: ["r9_bra", "rivaldo", "ronaldinho"], name: "3R 组合", bonus: 11, note: "前场天赋压迫对手整条防线" },
  { ids: ["messi_arg", "di_maria", "emi_martinez"], name: "阿根廷最后一舞", bonus: 10, note: "关键球和点球大战都有兜底" },
  { ids: ["zidane", "deschamps", "thuram"], name: "法国 1998 脊梁", bonus: 9, note: "攻守转换非常稳定" },
  { ids: ["neuer", "kroos", "muller", "lahm"], name: "德国 2014 机器", bonus: 10, note: "控制、跑动和门将覆盖拉满" },
  { ids: ["buffon", "cannavaro", "pirlo"], name: "意大利 2006 中轴", bonus: 10, note: "防守与节奏控制极硬" },
  { ids: ["xavi", "iniesta", "busquets"], name: "西班牙传控铁三角", bonus: 11, note: "中场控制几乎让比赛降速" },
  { ids: ["cruyff_ned", "neeskens"], name: "全攻全守雏形", bonus: 8, note: "阵型流动性大幅提升" },
  { ids: ["van_basten", "gullit", "rijkaard"], name: "荷兰三剑客", bonus: 10, note: "身体、技术和冲击力兼备" },
  { ids: ["beckham_eng", "gerrard", "lampard", "rooney"], name: "英格兰黄金一代", bonus: 7, note: "定位球和远射威胁明显" },
  { ids: ["ronaldo_por", "figo", "rui_costa"], name: "葡萄牙两代核心", bonus: 8, note: "边路和前腰连续创造机会" },
  { ids: ["modric_cro", "rakitic", "mandzukic", "perisic"], name: "克罗地亚 2018 骨架", bonus: 9, note: "加时韧性和中场调度提升" },
  { ids: ["schiaffino", "ghiggia", "varela"], name: "乌拉圭 1950 马拉卡纳", bonus: 10, note: "逆境精神和大场面韧性拉满" },
  { ids: ["forlan", "suarez_uru", "cavani", "godin"], name: "乌拉圭 2010 铁血轴线", bonus: 9, note: "锋线效率和防线硬度同时提升" },
  { ids: ["de_bruyne", "hazard", "courtois", "kompany"], name: "比利时黄金一代", bonus: 9, note: "创造力、门将和中卫核心完整" },
  { ids: ["rafa_marquez", "guardado", "ochoa"], name: "墨西哥中轴韧性", bonus: 7, note: "小组赛稳定性和淘汰赛抗压更强" },
  { ids: ["hugo_sanchez", "cuauhtemoc", "rafa_marquez"], name: "墨西哥两代领袖", bonus: 7, note: "前场灵气与后场出球形成呼应" },
  { ids: ["valderrama", "rincon", "asprilla"], name: "哥伦比亚 90 年代灵气", bonus: 8, note: "前腰调度和锋线即兴创造更强" },
  { ids: ["james_col", "cuadrado", "falcao_col"], name: "哥伦比亚 2014 攻击线", bonus: 8, note: "定位球、远射和反击终结都有威胁" },
  { ids: ["schmeichel_den", "laudrup_den", "brian_laudrup"], name: "丹麦童话骨架", bonus: 9, note: "门将兜底和前场创造力同时在线" },
  { ids: ["eriksen", "kjaer", "christensen_den"], name: "丹麦现代中轴", bonus: 7, note: "组织、后防和精神属性更加稳定" },
  { ids: ["nakata_jpn", "honda_jpn", "kagawa"], name: "日本技术中前场", bonus: 7, note: "小范围配合和前腰串联更顺" },
  { ids: ["tomiyasu", "mitoma", "kubo_jpn"], name: "日本新世代冲击", bonus: 7, note: "边路推进和后场覆盖明显提升" }
];

const countryProfiles = {
  巴西: "天赋爆点多，前场上限极高，但需要后腰和中卫帮忙兜住反击。",
  阿根廷: "核心驱动强，淘汰赛气质好，边后卫和中场平衡很关键。",
  法国: "身体、速度和阵容厚度都强，适合高强度淘汰赛。",
  德国: "战术纪律和门将覆盖好，稳定性高，爆点要靠前场组合补。",
  意大利: "防守和门将底盘硬，节奏偏稳，进攻上限看前腰和中锋。",
  西班牙: "传控压制强，中场越完整越可怕，但禁区终结不能太弱。",
  荷兰: "阵型流动性强，天才多，短板通常在临门一脚和关键运气。",
  英格兰: "身体和定位球强，名将多，但球权分配和中场层次要处理好。",
  葡萄牙: "边路和巨星爆发强，若中卫与后腰够稳，上限很高。",
  克罗地亚: "中场韧性强，加时和逆风有优势，锋线效率决定天花板。",
  乌拉圭: "对抗、韧性和双前锋传统突出，适合打硬仗。",
  比利时: "黄金一代创造力很强，门将兜底好，边翼卫质量会影响上限。",
  墨西哥: "杯赛韧性和门将名场面多，整体上限看锋线能否爆发。",
  哥伦比亚: "前腰灵气和边路突击鲜明，防线完整度决定能走多远。",
  丹麦: "门将传统和团队纪律很好，创造力核心越强越像童话剧本。",
  日本: "脚下技术和整体跑动稳定，硬仗里需要锋线效率和身体对抗补上限。"
};

const formationProfiles = {
  wing: "边路推进",
  balance: "攻守平衡",
  control: "中场控制",
  direct: "双线冲击",
  diamond: "前腰串联"
};

let state = null;
let activeFilter = "ALL";
let reportCache = "";

const $ = (id) => document.getElementById(id);

function p(id, name, country, era, pos, overall, shot, dribble, pass, defense, physical, speed, clutch, stamina, tactics, dream = false) {
  return { id, name, country, era, pos, overall, shot, dribble, pass, defense, physical, speed, clutch, stamina, tactics, dream };
}

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(list) {
  return list[rng(0, list.length - 1)];
}

function shuffled(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = rng(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function playerGroup(player) {
  if (player.pos.includes("GK")) return "GK";
  if (player.pos.some((pos) => ["LB", "CB1", "CB2", "RB"].includes(pos))) return "DEF";
  if (player.pos.some((pos) => ["DM", "CM", "AM", "RM"].includes(pos))) return "MID";
  return "FWD";
}

function rarityOf(player) {
  if (player.overall >= 96) return "传奇";
  if (player.overall >= 91) return "巨星";
  if (player.overall >= 86) return "核心";
  return "拼图";
}

function rarityClass(player) {
  if (player.overall >= 96) return "rarity-legend";
  if (player.overall >= 91) return "rarity-superstar";
  if (player.overall >= 86) return "rarity-allstar";
  return "rarity-role";
}

function tagsOf(player) {
  const tags = [rarityOf(player)];
  if (player.dream) tags.push("圆梦");
  if (player.clutch >= 94) tags.push("大赛先生");
  if (player.pass >= 94) tags.push("组织核心");
  if (player.defense >= 94) tags.push("防线支柱");
  if (player.speed >= 92) tags.push("爆点");
  if (player.pos.includes("GK")) tags.push("门神");
  return tags.slice(0, 4);
}

players.forEach((player) => {
  player.tags = tagsOf(player);
  player.group = playerGroup(player);
});

function initials(name) {
  if (/^[A-Za-z0-9\s]+$/.test(name)) return name.split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();
  return name.slice(0, 2);
}

function show(view) {
  ["homeView", "dreamView", "draftView", "resultView", "historyView"].forEach((id) => {
    $(id).classList.toggle("hidden", id !== view);
  });
}

function toast(text) {
  $("toast").textContent = text;
  $("toast").classList.remove("hidden");
  setTimeout(() => $("toast").classList.add("hidden"), 1800);
}

function startGame(mode, dreamPlayer = null) {
  const chosenFormation = pick(formations);
  state = {
    mode,
    dreamPlayer,
    currentCountry: null,
    currentEra: null,
    formation: chosenFormation,
    poolLocked: false,
    lockedPoolIds: [],
    selectedPlayer: null,
    round: 1,
    teamRerolls: 1,
    eraRerolls: 1,
    lineup: Object.fromEntries(slots.map((slot) => [slot, null]))
  };
  activeFilter = "ALL";
  if (dreamPlayer) {
    const bestSlot = slots.find((slot) => dreamPlayer.pos.includes(slot) && slot !== "RM") || dreamPlayer.pos[0];
    if (state.lineup[bestSlot] !== undefined) {
      state.lineup[bestSlot] = { ...dreamPlayer, slot: bestSlot };
      state.round = 2;
    }
    $("dreamNote").innerHTML = `圆梦目标：让 <strong>${dreamPlayer.name}</strong> 这次真正捧起世界杯。`;
    $("dreamNote").classList.remove("hidden");
  } else {
    $("dreamNote").classList.add("hidden");
  }
  $("modeLabel").textContent = mode === "dream" ? "圆梦模式" : "普通模式";
  renderDraft();
  show("draftView");
}

function renderDreams() {
  $("dreamGrid").innerHTML = dreamIds
    .map((id) => players.find((player) => player.id === id))
    .filter(Boolean)
    .map((player) => `
      <button class="dream-card" data-dream="${player.id}" type="button">
        <span class="avatar">${initials(player.name)}</span>
        <strong>${player.name}</strong>
        <small>${player.country} · ${player.era}</small>
        <span class="tags">${player.tags.map((tag) => `<i class="tag tag-soft">${tag}</i>`).join("")}</span>
      </button>
    `).join("");
}

function viablePlayers(country = state?.currentCountry, era = state?.currentEra) {
  if (!country || !era) return [];
  return players
    .filter((player) => player.country === country)
    .sort((a, b) => (b.era === era) - (a.era === era) || b.overall - a.overall);
}

function viablePairs() {
  const pairs = [];
  countries.forEach((country) => {
    eras.forEach((era) => {
      const count = viablePlayers(country, era).length;
      const eraCount = players.filter((player) => player.country === country && player.era === era).length;
      if (count >= 11 && eraCount >= 2) pairs.push({ country, era, count, eraCount });
    });
  });
  return pairs;
}

function richPairs(list = viablePairs()) {
  const great = list.filter((pair) => pair.count >= 8);
  if (great.length) return great;
  const ok = list.filter((pair) => pair.count >= 5);
  return ok.length ? ok : list;
}

function randomize() {
  const pair = pick(richPairs());
  state.currentCountry = pair.country;
  state.currentEra = pair.era;
  state.formation = pick(formations);
  state.poolLocked = false;
  state.lockedPoolIds = [];
  state.selectedPlayer = null;
  renderDraft();
}

function reroll(type) {
  if (state.poolLocked) return toast("已经锁定球员池了");
  if (!state.currentCountry || !state.currentEra) return randomize();
  if (type === "team") {
    if (state.teamRerolls <= 0) return toast("国家重抽次数用完了");
    const pair = pick(richPairs(viablePairs().filter((item) => item.country !== state.currentCountry && item.era === state.currentEra)));
    if (!pair) return toast("当前年代没有其他可用国家");
    state.currentCountry = pair.country;
    state.teamRerolls -= 1;
  } else {
    if (state.eraRerolls <= 0) return toast("年代重抽次数用完了");
    const pair = pick(richPairs(viablePairs().filter((item) => item.country === state.currentCountry && item.era !== state.currentEra)));
    if (!pair) return toast("当前国家没有其他可用年代");
    state.currentEra = pair.era;
    state.eraRerolls -= 1;
  }
  renderDraft();
}

function lockPool() {
  if (!state.currentCountry || !state.currentEra) return randomize();
  const pool = viablePlayers();
  const dream = state.dreamPlayer && !pool.some((player) => player.id === state.dreamPlayer.id) ? [state.dreamPlayer] : [];
  state.lockedPoolIds = shuffled([...dream, ...pool]).map((player) => player.id);
  state.poolLocked = true;
  renderDraft();
}

function currentPool() {
  if (state.poolLocked) {
    return state.lockedPoolIds
      .map((id) => players.find((player) => player.id === id))
      .filter(Boolean)
      .filter((player) => !lineupList().some((picked) => picked.id === player.id));
  }
  return viablePlayers().filter((player) => !lineupList().some((picked) => picked.id === player.id));
}

function filterPlayer(player) {
  return activeFilter === "ALL" || player.group === activeFilter;
}

function renderDraft() {
  $("roundText").textContent = `第 ${Math.min(state.round, 11)} / 11 位`;
  $("roundHint").textContent = state.poolLocked ? "选择球员并放进合适位置" : "先随机国家、年代和阵型";
  $("teamText").textContent = state.currentCountry || "???";
  $("eraText").textContent = state.currentEra || "???";
  $("formationText").textContent = state.formation?.name || "???";
  $("teamProfile").classList.toggle("hidden", !state.currentCountry || !state.currentEra);
  if (state.currentCountry && state.currentEra) {
    const poolSize = viablePlayers().length;
    $("teamProfile").innerHTML = `
      <strong>${state.currentCountry} · ${state.currentEra} · ${formationProfiles[state.formation.profile]}</strong>
      <span>${countryProfiles[state.currentCountry]} 当前可用球员 ${poolSize} 人。</span>
    `;
  }
  $("randomBtn").classList.toggle("hidden", !!state.currentCountry && !!state.currentEra);
  $("lockBtn").classList.toggle("hidden", !state.currentCountry || !state.currentEra || state.poolLocked);
  $("teamRerollText").textContent = state.teamRerolls;
  $("eraRerollText").textContent = state.eraRerolls;
  $("playerSection").classList.toggle("hidden", !state.poolLocked);
  renderPitch();
  renderFilters();
  renderPlayers();
}

function renderPitch() {
  $("pitch").innerHTML = slots.map((slot) => {
    const player = state.lineup[slot];
    const canPlace = state.selectedPlayer && acceptsSlot(state.selectedPlayer, slot) && !player;
    return `
      <button class="slot football-slot ${player ? "filled" : ""} ${canPlace ? "available" : ""}" data-slot="${slot}" type="button">
        <b>${slotLabels[slot]}</b>
        <span>${player ? shortName(player.name) : slot}</span>
        <small>${player ? `${player.country} · ${player.overall}` : "空位"}</small>
      </button>
    `;
  }).join("");
}

function renderFilters() {
  $("filters").innerHTML = filters.map(([key, label]) => `
    <button class="${activeFilter === key ? "active" : ""}" data-filter="${key}" type="button">${label}</button>
  `).join("");
}

function renderPlayers() {
  if (!state.poolLocked) return;
  const pool = currentPool().filter(filterPlayer);
  $("playerList").innerHTML = pool.length
    ? pool.map((player) => `
      <button class="player-card ${state.selectedPlayer?.id === player.id ? "selected" : ""}" data-player="${player.id}" type="button">
        <span>
          <strong>${player.name}</strong>
          <em>${player.country} · ${player.era} · ${player.pos.map((pos) => slotLabels[pos] || pos).join("/")}</em>
          <small>${playerRoleText(player)} · ${slotFitText(player)}</small>
          <span class="tags">${player.tags.map((tag, index) => `<i class="tag ${index === 0 ? rarityClass(player) : "tag-soft"}">${tag}</i>`).join("")}</span>
        </span>
        <span class="player-rating">${player.overall}</span>
      </button>
    `).join("")
    : `<div class="empty">这个球员池已经没人可选了。</div>`;
}

function shortName(name) {
  const map = {
    "罗纳尔多": "R9",
    "罗纳尔迪尼奥": "小罗",
    "罗伯托卡洛斯": "卡洛斯",
    "卡洛斯阿尔贝托": "阿尔贝托",
    "托马斯穆勒": "穆勒",
    "布鲁诺费尔南德斯": "B费",
    "贝尔纳多席尔瓦": "B席",
    "鲁本迪亚斯": "迪亚斯"
  };
  return map[name] || name;
}

function playerRoleText(player) {
  const values = [
    ["射门", player.shot],
    ["盘带", player.dribble],
    ["传球", player.pass],
    ["防守", player.defense],
    ["身体", player.physical],
    ["速度", player.speed],
    ["关键", player.clutch]
  ].sort((a, b) => b[1] - a[1]).slice(0, 2);
  return values.map(([name, value]) => `${name}${value}`).join(" / ");
}

function slotFitText(player) {
  const open = slots.filter((slot) => acceptsSlot(player, slot) && !state.lineup[slot]).map((slot) => slotLabels[slot]);
  const rare = player.pos.some((pos) => ["LB", "RB", "GK"].includes(pos)) ? "稀缺位置优先留给本位" : "可按阵容短板补位";
  return open.length ? `可放：${open.slice(0, 3).join("、")} · ${rare}` : "暂无合适空位";
}

function acceptsSlot(player, slot) {
  if (player.pos.includes(slot)) return true;
  if (slot === "CB1" || slot === "CB2") return player.pos.includes("CB1") || player.pos.includes("CB2");
  if (slot === "LW" || slot === "RW") return player.pos.includes("RM") || player.pos.includes("AM");
  return false;
}

function selectPlayer(id) {
  const player = players.find((item) => item.id === id);
  if (!player) return;
  const openSlots = slots.filter((slot) => acceptsSlot(player, slot) && !state.lineup[slot]);
  if (!openSlots.length) return toast("他的可用位置已经满了");
  state.selectedPlayer = player;
  renderDraft();
}

function placePlayer(slot) {
  if (state.lineup[slot]) {
    state.lineup[slot] = null;
    state.round = Math.max(1, lineupList().length + 1);
    renderDraft();
    return;
  }
  if (!state.selectedPlayer) return toast("先选择一名球员");
  if (!acceptsSlot(state.selectedPlayer, slot)) return toast("这个球员不适合这个位置");
  state.lineup[slot] = { ...state.selectedPlayer, slot };
  state.selectedPlayer = null;
  state.round = lineupList().length + 1;
  renderDraft();
  if (lineupList().length === 11) finishWorldCup();
}

function solveRemainingLineup(pool = currentPool(), slotIndex = 0, used = new Set(), solved = {}) {
  const openSlots = slots.filter((slot) => !state.lineup[slot]);
  if (slotIndex >= openSlots.length) return solved;
  const slot = openSlots[slotIndex];
  const candidates = pool
    .filter((player) => !used.has(player.id) && acceptsSlot(player, slot))
    .sort((a, b) => {
      const exact = Number(b.pos.includes(slot)) - Number(a.pos.includes(slot));
      return exact || b.overall - a.overall;
    });
  for (const player of candidates) {
    used.add(player.id);
    solved[slot] = player;
    const result = solveRemainingLineup(pool, slotIndex + 1, used, solved);
    if (result) return result;
    used.delete(player.id);
    delete solved[slot];
  }
  return null;
}

function autoFillLineup() {
  if (!state.poolLocked) return toast("先锁定球员池");
  const solved = solveRemainingLineup();
  if (!solved) return toast("当前剩余球员无法补齐，试着撤下一名多位置球员");
  Object.entries(solved).forEach(([slot, player]) => {
    state.lineup[slot] = { ...player, slot };
  });
  state.selectedPlayer = null;
  state.round = lineupList().length + 1;
  renderDraft();
  toast("已补齐剩余位置");
  if (lineupList().length === 11) finishWorldCup();
}

function lineupList() {
  return slots.map((slot) => state?.lineup[slot]).filter(Boolean);
}

function historyChemistry(roster) {
  const ids = new Set(roster.map((player) => player.id));
  const matched = historyLinks.filter((link) => link.ids.every((id) => ids.has(id)));
  return {
    bonus: matched.reduce((sum, link) => sum + link.bonus, 0),
    lines: matched.map((link) => `${link.name}：${link.note}`)
  };
}

function formationFit(roster) {
  const profile = state.formation.profile;
  const avg = (key) => roster.reduce((sum, player) => sum + player[key], 0) / roster.length;
  let fit = 58 + Math.round(avg("tactics") * 0.24);
  if (profile === "wing" && (state.lineup.LW?.speed ?? 0) >= 88 && (state.lineup.RW?.speed ?? 0) >= 84) fit += 8;
  if (profile === "control" && avg("pass") >= 86) fit += 8;
  if (profile === "direct" && (state.lineup.ST?.physical ?? 0) >= 86) fit += 6;
  if (profile === "diamond" && (state.lineup.AM?.pass ?? 0) >= 88) fit += 7;
  if (profile === "balance" && avg("defense") >= 78 && avg("pass") >= 80) fit += 6;
  const outOfPosition = roster.filter((player) => !player.pos.includes(player.slot) && !(player.slot.startsWith("CB") && player.pos.some((pos) => pos.startsWith("CB")))).length;
  fit -= outOfPosition * 4;
  return Math.max(35, Math.min(99, Math.round(fit)));
}

function finishWorldCup() {
  const roster = lineupList();
  const avg = (key) => roster.reduce((sum, player) => sum + player[key], 0) / roster.length;
  const attack = Math.round(avg("shot") * 0.38 + avg("dribble") * 0.28 + avg("pass") * 0.2 + avg("speed") * 0.14);
  const midfield = Math.round((state.lineup.DM.pass + state.lineup.CM.pass + state.lineup.AM.pass + state.lineup.DM.defense + state.lineup.CM.tactics + state.lineup.AM.dribble) / 6);
  const defense = Math.round((state.lineup.GK.defense * 1.1 + state.lineup.LB.defense + state.lineup.CB1.defense * 1.2 + state.lineup.CB2.defense * 1.2 + state.lineup.RB.defense + state.lineup.DM.defense) / 6.7);
  const keeper = Math.round(state.lineup.GK.defense * 0.55 + state.lineup.GK.clutch * 0.25 + state.lineup.GK.tactics * 0.2);
  const clutch = Math.round(avg("clutch"));
  const stamina = Math.round(avg("stamina"));
  const fit = formationFit(roster);
  const history = historyChemistry(roster);
  const dressingRoom = balanceScore(roster);
  const power = Math.round(attack * 0.24 + midfield * 0.2 + defense * 0.22 + keeper * 0.1 + clutch * 0.1 + fit * 0.1 + dressingRoom * 0.04 + history.bonus * 0.55 + rng(-6, 6));
  const campaign = simulateWorldCup({ power, attack, midfield, defense, keeper, clutch, stamina, fit, dressingRoom, historyBonus: history.bonus });
  const dream = state.dreamPlayer;
  const dreamSuccess = !dream || campaign.champion;
  const titleOdds = titleOddsOf({ power, attack, midfield, defense, keeper, clutch, fit, dressingRoom, historyBonus: history.bonus });
  const grade = teamGrade(power, campaign.champion);
  const report = buildReport({ roster, campaign, dream, dreamSuccess, attack, midfield, defense, keeper, clutch, stamina, fit, dressingRoom, history, titleOdds, grade });
  reportCache = report;

  const result = {
    date: new Date().toLocaleString(),
    mode: state.mode,
    stage: campaign.stage,
    champion: campaign.champion,
    power,
    grade,
    dream: dream?.name ?? "",
    roster: roster.map((player) => `${slotLabels[player.slot]}:${player.name}`).join(" / "),
    report
  };
  saveHistory(result);

  $("resultTitle").textContent = campaign.champion ? "世界杯夺冠" : campaign.stage;
  $("resultCard").innerHTML = `
    <div class="record"><span>世界杯结果</span><strong>${campaign.stage}</strong></div>
    <div class="metric-grid">
      <div class="metric"><span>阵容评级</span><strong>${grade}</strong></div>
      <div class="metric"><span>夺冠概率</span><strong>${titleOdds}%</strong></div>
      <div class="metric"><span>进攻火力</span><strong>${attack}</strong></div>
      <div class="metric"><span>中场控制</span><strong>${midfield}</strong></div>
      <div class="metric"><span>防守稳定</span><strong>${defense}</strong></div>
      <div class="metric"><span>门将可靠</span><strong>${keeper}</strong></div>
      <div class="metric"><span>战术适配</span><strong>${fit}</strong></div>
      <div class="metric"><span>历史共鸣</span><strong>${history.bonus}</strong></div>
    </div>
    <div class="fixture-list">
      ${campaign.fixtures.map((game) => `
        <div class="fixture ${game.result}">
          <span>${game.round}</span>
          <strong>${game.text}</strong>
          <small>${game.note}</small>
        </div>
      `).join("")}
    </div>
    <div class="report">${report.replace(/\n/g, "<br />")}</div>
  `;
  show("resultView");
}

function balanceScore(roster) {
  const stars = roster.filter((player) => player.overall >= 93).length;
  const creators = roster.filter((player) => player.pass >= 90 || player.dribble >= 94).length;
  let score = 76;
  if (stars <= 4) score += 8;
  if (creators >= 3) score += 4;
  if (stars >= 7) score -= 10;
  if (roster.some((player) => player.group === "DEF" && player.clutch >= 94)) score += 4;
  return Math.max(40, Math.min(98, score));
}

function simulateWorldCup({ power, attack, midfield, defense, keeper, clutch, stamina, fit, dressingRoom, historyBonus }) {
  const events = [];
  let score = power;
  const eventPool = [
    { chance: 18, test: () => true, effect: () => -rng(4, 10), text: (v) => `小组赛前核心出现小伤，整体强度下降 ${Math.abs(v)} 点` },
    { chance: 20, test: () => keeper >= 88, effect: () => 5, text: () => "门将在关键场次完成神扑" },
    { chance: 18, test: () => dressingRoom < 72, effect: () => -5, text: () => "更衣室磨合不足，淘汰赛前压力变大" },
    { chance: 22, test: () => clutch >= 90, effect: () => 5, text: () => "核心球星在淘汰赛打进关键球" },
    { chance: 18, test: () => midfield >= 88, effect: () => 4, text: () => "中场连续控住节奏，让对手很难起势" },
    { chance: 16, test: () => defense < 76, effect: () => -6, text: () => "边路回防被针对，防线被打穿一次" },
    { chance: 14, test: () => stamina < 74, effect: () => -5, text: () => "连续加时后体能见底" },
    { chance: 16, test: () => historyBonus >= 9, effect: () => 4, text: () => "经典骨架在硬仗里形成默契加成" },
    { chance: 12, test: () => attack >= 90, effect: () => 4, text: () => "锋线突然爆发，半场就打开局面" }
  ];
  shuffled(eventPool).slice(0, 5).forEach((event) => {
    if (event.test() && rng(1, 100) <= event.chance) {
      const effect = event.effect();
      score += effect;
      events.push(event.text(effect));
    }
  });
  const penaltyScore = Math.round((keeper + clutch + fit) / 3 + rng(-10, 10));
  if (rng(1, 100) <= 24) events.push(penaltyScore >= 86 ? "点球大战站住了" : "点球大战埋下隐患");

  const fixtures = buildFixtures({ score, attack, midfield, defense, keeper, clutch, penaltyScore });
  const last = fixtures[fixtures.length - 1];
  const champion = last.round === "决赛" && last.won;
  let stage = champion ? "冠军" : last.round === "小组赛" ? "小组出局" : last.round;
  return { stage, champion, events, fixtures };
}

function buildFixtures({ score, attack, midfield, defense, keeper, clutch, penaltyScore }) {
  const rivals = ["南美劲旅", "欧洲强队", "非洲黑马", "亚洲硬骨头", "东欧铁军", "北美快马", "卫冕冠军", "东道主"];
  const game = (round, threshold, bias, winText, loseText) => {
    const roll = Math.round(score * 0.62 + attack * 0.1 + midfield * 0.1 + defense * 0.1 + keeper * 0.04 + clutch * 0.04 + rng(-14, 14) + bias);
    const rival = pick(rivals);
    const won = roll >= threshold;
    return {
      round,
      result: won ? "win" : "loss",
      text: won ? `战胜${rival}` : `不敌${rival}`,
      note: won ? winText : loseText,
      won
    };
  };
  const fixtures = [
    game("小组赛", 76, 4, "前两场抢到主动权", "小组赛节奏被打乱"),
    game("十六强", 84, 0, "淘汰赛第一关顶住了", "进入淘汰赛后细节掉线")
  ];
  if (fixtures.every((item) => item.won)) fixtures.push(game("八强", 90, -2, "硬仗里中轴线站了出来", "八强战被针对短板"));
  if (fixtures.every((item) => item.won)) fixtures.push(game("半决赛", 96, -4, "关键球员完成决定性发挥", "半决赛差一口气"));
  if (fixtures.every((item) => item.won)) {
    const finalWon = score >= 98 || penaltyScore >= 94;
    fixtures.push({
      round: "决赛",
      result: finalWon ? "win" : "loss",
      text: finalWon ? "捧起世界杯" : "决赛惜败",
      note: finalWon ? "最后一战把圆梦剧本写完" : "点球或终场细节决定命运",
      won: finalWon
    });
  }
  return fixtures;
}

function titleOddsOf({ power, attack, midfield, defense, keeper, clutch, fit, dressingRoom, historyBonus }) {
  const raw = (power - 72) * 1.8 + (attack - 80) * 0.35 + (midfield - 78) * 0.45 + (defense - 78) * 0.55 + (keeper - 78) * 0.25 + (clutch - 82) * 0.45 + (fit - 72) * 0.4 + (dressingRoom - 74) * 0.2 + historyBonus * 1.4;
  return Math.max(3, Math.min(88, Math.round(raw)));
}

function teamGrade(power, champion) {
  const score = power + (champion ? 7 : 0);
  if (score >= 101) return "S+";
  if (score >= 94) return "S";
  if (score >= 87) return "A";
  if (score >= 79) return "B";
  return "C";
}

function buildReport(data) {
  const { roster, campaign, dream, dreamSuccess, attack, midfield, defense, keeper, fit, dressingRoom, history, titleOdds, grade } = data;
  const lineupText = roster.map((player) => `${slotLabels[player.slot]} ${player.name}`).join(" / ");
  const strengths = [];
  const risks = [];
  if (attack >= 88) strengths.push("前场终结能力很强");
  if (midfield >= 86) strengths.push("中场能控住比赛节奏");
  if (defense >= 86) strengths.push("防线稳定性高");
  if (keeper >= 88) strengths.push("门将有淘汰赛兜底能力");
  if (fit >= 84) strengths.push("阵型适配很顺");
  if (dressingRoom < 72) risks.push("球星过多导致球权和更衣室压力偏高");
  if (defense < 76) risks.push("防线遇到强队会吃亏");
  if (midfield < 76) risks.push("中场控制不足");
  if (keeper < 78) risks.push("门将上限不够稳");
  if (!strengths.length) strengths.push("整体没有明显断档");
  if (!risks.length) risks.push("没有明显致命短板");
  const dreamLine = dream ? `圆梦核心：${dream.name}。${dreamSuccess ? "这次圆梦成功。" : "这次还差一点。"}`
    : "普通世界杯挑战阵容。";
  const historyLine = history.lines.length ? `历史共鸣：${history.lines.join("；")}。`
    : "历史共鸣：没有触发经典同队骨架，更多依赖重新拼装。";
  const eventLine = campaign.events.length ? `关键事件：${campaign.events.join("；")}。` : "关键事件：这届世界杯走势相对平稳。";
  return `阵容：${lineupText}
结果：${campaign.stage}，赛前夺冠概率约 ${titleOdds}%，评级 ${grade}。
${dreamLine}
${historyLine}
${eventLine}
优势：${strengths.join("；")}。
隐患：${risks.join("；")}。`;
}

function saveHistory(result) {
  const list = JSON.parse(localStorage.getItem("football-dream-history") || "[]");
  list.push(result);
  list.sort((a, b) => (b.champion - a.champion) || b.power - a.power);
  localStorage.setItem("football-dream-history", JSON.stringify(list.slice(0, 12)));
}

function renderHistory() {
  const list = JSON.parse(localStorage.getItem("football-dream-history") || "[]");
  $("historyList").innerHTML = list.length
    ? list.map((item) => `<div class="history-item">
      <strong>${item.stage} · ${item.grade}</strong>
      <p>${item.mode === "dream" ? `圆梦：${item.dream}` : "普通模式"}</p>
      <small>${item.roster}</small>
    </div>`).join("")
    : `<div class="empty">还没有历史记录，先踢一届。</div>`;
}

function copyReport() {
  if (!reportCache) return;
  navigator.clipboard?.writeText(reportCache).then(() => toast("战报已复制")).catch(() => toast("复制失败，浏览器不支持"));
}

function bindEvents() {
  $("normalBtn").addEventListener("click", () => startGame("normal"));
  $("dreamBtn").addEventListener("click", () => {
    renderDreams();
    show("dreamView");
  });
  $("historyBtn").addEventListener("click", () => {
    renderHistory();
    show("historyView");
  });
  $("dreamBackBtn").addEventListener("click", () => show("homeView"));
  $("historyBackBtn").addEventListener("click", () => show("homeView"));
  $("draftHomeBtn").addEventListener("click", () => show("homeView"));
  $("resultHomeBtn").addEventListener("click", () => show("homeView"));
  $("againBtn").addEventListener("click", () => startGame(state?.mode ?? "normal", state?.dreamPlayer ?? null));
  $("restartBtn").addEventListener("click", () => startGame(state.mode, state.dreamPlayer));
  $("copyReportBtn").addEventListener("click", copyReport);
  $("dreamGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-dream]");
    if (!button) return;
    const dream = players.find((player) => player.id === button.dataset.dream);
    startGame("dream", dream);
  });
  $("randomBtn").addEventListener("click", randomize);
  $("lockBtn").addEventListener("click", lockPool);
  $("autoFillBtn").addEventListener("click", autoFillLineup);
  $("rerollTeamBtn").addEventListener("click", () => reroll("team"));
  $("rerollEraBtn").addEventListener("click", () => reroll("era"));
  $("filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderDraft();
  });
  $("playerList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-player]");
    if (!button) return;
    selectPlayer(button.dataset.player);
  });
  $("pitch").addEventListener("click", (event) => {
    const button = event.target.closest("[data-slot]");
    if (!button) return;
    placePlayer(button.dataset.slot);
  });
}

bindEvents();
