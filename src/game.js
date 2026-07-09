const positions = ["PG", "SG", "SF", "C", "PF"];
const filters = [
  ["ALL", "全部"],
  ["G", "后卫"],
  ["F", "前锋"],
  ["C", "中锋"]
];

const teams = ["湖人", "凯尔特人", "公牛", "勇士", "马刺", "热火", "火箭", "独行侠", "太阳", "雷霆", "快船", "雄鹿", "骑士", "篮网", "掘金", "尼克斯", "76人", "爵士", "步行者", "活塞", "猛龙"];
const eras = ["1980s", "1990s", "2000s", "2010s", "2020s"];

const dreamIds = ["cp3_lac", "harden_hou", "westbrook", "rose", "george", "butler_mia", "melo_nyk", "iverson", "yao", "nash", "griffin", "luka", "tmac_hou", "malone", "reggie", "ewing", "stockton"];

const players = [
  p("magic", "魔术师约翰逊", "湖人", "1980s", ["PG"], 95, 91, 82, 72, 86, 99, 97, 68, 13, 84),
  p("shaq_lal", "沙奎尔奥尼尔", "湖人", "2000s", ["C"], 98, 99, 35, 88, 93, 64, 92, 78, 14, 82),
  p("kobe_lal", "科比布莱恩特", "湖人", "2000s", ["SG", "SF"], 97, 98, 86, 87, 72, 82, 99, 76, 16, 86),
  p("pau_lal", "保罗加索尔", "湖人", "2010s", ["PF", "C"], 88, 86, 72, 89, 86, 74, 83, 78, 9, 86),
  p("lebron_lal", "勒布朗詹姆斯", "湖人", "2020s", ["SF", "PF", "PG"], 97, 97, 78, 86, 84, 96, 96, 78, 16, 80),
  p("ad_lal", "安东尼戴维斯", "湖人", "2020s", ["PF", "C"], 94, 91, 70, 98, 94, 66, 87, 66, 11, 62),

  p("bird", "拉里伯德", "凯尔特人", "1980s", ["SF", "PF"], 96, 97, 92, 83, 80, 86, 98, 62, 13, 70),
  p("pierce", "保罗皮尔斯", "凯尔特人", "2000s", ["SF", "SG"], 91, 91, 84, 78, 70, 74, 92, 74, 12, 82),
  p("kg_bos", "凯文加内特", "凯尔特人", "2000s", ["PF", "C"], 94, 87, 68, 97, 96, 76, 88, 72, 12, 76),
  p("rondo", "拉简隆多", "凯尔特人", "2010s", ["PG"], 84, 73, 55, 82, 70, 96, 78, 62, 8, 76),
  p("tatum", "杰森塔图姆", "凯尔特人", "2020s", ["SF", "PF"], 93, 91, 88, 86, 78, 76, 90, 72, 13, 88),
  p("brown", "杰伦布朗", "凯尔特人", "2020s", ["SG", "SF"], 88, 88, 82, 83, 76, 66, 83, 66, 11, 86),

  p("mj", "迈克尔乔丹", "公牛", "1990s", ["SG", "SF"], 99, 99, 82, 95, 80, 82, 100, 70, 18, 90),
  p("pippen", "斯科蒂皮蓬", "公牛", "1990s", ["SF", "SG"], 93, 86, 76, 98, 82, 86, 90, 58, 10, 86),
  p("rodman", "丹尼斯罗德曼", "公牛", "1990s", ["PF", "C"], 86, 48, 38, 99, 99, 48, 80, 24, 3, 72),
  p("rose", "德里克罗斯", "公牛", "2010s", ["PG"], 91, 94, 70, 66, 62, 86, 87, 78, 14, 52, true),
  p("butler_chi", "吉米巴特勒", "公牛", "2010s", ["SG", "SF"], 88, 84, 73, 92, 78, 72, 91, 64, 10, 86),
  p("derozan_chi", "德马尔德罗赞", "公牛", "2020s", ["SF", "SG"], 88, 90, 70, 70, 68, 72, 88, 62, 12, 82),

  p("curry", "斯蒂芬库里", "勇士", "2010s", ["PG", "SG"], 98, 98, 100, 72, 62, 88, 96, 74, 16, 80),
  p("klay", "克莱汤普森", "勇士", "2010s", ["SG", "SF"], 91, 84, 99, 88, 68, 60, 88, 58, 9, 74),
  p("draymond", "德雷蒙德格林", "勇士", "2010s", ["PF", "C"], 88, 70, 70, 97, 86, 88, 86, 42, 7, 72),
  p("kd_gsw", "凯文杜兰特", "勇士", "2010s", ["SF", "PF"], 98, 99, 91, 90, 80, 76, 97, 70, 15, 76),
  p("baron", "拜伦戴维斯", "勇士", "2000s", ["PG"], 88, 86, 76, 72, 66, 84, 86, 74, 12, 68),
  p("wiggins", "安德鲁威金斯", "勇士", "2020s", ["SF", "SG"], 85, 80, 78, 88, 74, 62, 80, 48, 8, 82),

  p("duncan", "蒂姆邓肯", "马刺", "2000s", ["PF", "C"], 97, 92, 62, 99, 98, 78, 96, 64, 13, 90),
  p("parker", "托尼帕克", "马刺", "2000s", ["PG"], 89, 88, 70, 72, 56, 86, 87, 70, 10, 84),
  p("ginobili", "马努吉诺比利", "马刺", "2000s", ["SG", "SF"], 90, 88, 84, 82, 62, 80, 91, 60, 10, 72),
  p("kawhi_sas", "科怀伦纳德", "马刺", "2010s", ["SF", "PF"], 94, 92, 84, 99, 82, 68, 94, 58, 11, 72),
  p("wemby", "维克托文班亚马", "马刺", "2020s", ["C", "PF"], 93, 86, 78, 99, 94, 62, 88, 48, 11, 70),
  p("derozan_sas", "德马尔德罗赞", "马刺", "2020s", ["SG", "SF"], 87, 88, 68, 70, 66, 76, 87, 60, 12, 82),

  p("wade", "德怀恩韦德", "热火", "2000s", ["SG", "PG"], 96, 96, 74, 90, 72, 84, 97, 76, 15, 72),
  p("shaq_mia", "沙奎尔奥尼尔", "热火", "2000s", ["C"], 92, 91, 30, 91, 86, 56, 87, 68, 10, 66),
  p("lebron_mia", "勒布朗詹姆斯", "热火", "2010s", ["SF", "PF", "PG"], 99, 99, 82, 96, 88, 94, 98, 72, 17, 90),
  p("bosh", "克里斯波什", "热火", "2010s", ["PF", "C"], 89, 86, 78, 84, 82, 62, 84, 58, 9, 76),
  p("butler_mia", "吉米巴特勒", "热火", "2020s", ["SF", "SG"], 93, 90, 76, 94, 78, 78, 97, 66, 12, 82, true),
  p("bam", "巴姆阿德巴约", "热火", "2020s", ["C", "PF"], 88, 80, 58, 94, 92, 76, 83, 48, 8, 86),

  p("hakeem", "哈基姆奥拉朱旺", "火箭", "1990s", ["C"], 98, 94, 45, 99, 99, 68, 97, 70, 14, 86),
  p("yao", "姚明", "火箭", "2000s", ["C"], 90, 90, 64, 88, 84, 62, 88, 68, 11, 46, true),
  p("tmac_hou", "特雷西麦克格雷迪", "火箭", "2000s", ["SG", "SF"], 93, 94, 83, 78, 68, 78, 88, 74, 15, 54, true),
  p("harden_hou", "詹姆斯哈登", "火箭", "2010s", ["SG", "PG"], 97, 99, 91, 66, 62, 92, 90, 88, 18, 82, true),
  p("cp3_hou", "克里斯保罗", "火箭", "2010s", ["PG"], 92, 88, 88, 90, 62, 98, 90, 58, 11, 68),
  p("sengun", "阿尔佩伦申京", "火箭", "2020s", ["C"], 86, 82, 66, 78, 82, 82, 80, 56, 10, 78),

  p("dirk", "德克诺维茨基", "独行侠", "2000s", ["PF", "C"], 96, 96, 90, 72, 82, 68, 97, 58, 14, 88),
  p("nash_dal", "史蒂夫纳什", "独行侠", "2000s", ["PG"], 88, 86, 91, 50, 50, 96, 85, 44, 9, 72),
  p("kidd_dal", "贾森基德", "独行侠", "2010s", ["PG"], 85, 76, 84, 86, 72, 96, 85, 44, 7, 74),
  p("luka", "卢卡东契奇", "独行侠", "2020s", ["PG", "SG", "SF"], 97, 99, 88, 70, 82, 97, 95, 90, 18, 78, true),
  p("kyrie_dal", "凯里欧文", "独行侠", "2020s", ["PG", "SG"], 92, 94, 88, 62, 52, 84, 91, 74, 13, 68),
  p("porzingis_dal", "克里斯塔普斯波尔津吉斯", "独行侠", "2020s", ["PF", "C"], 86, 84, 83, 82, 84, 54, 80, 44, 9, 56),

  p("barkley_phx", "查尔斯巴克利", "太阳", "1990s", ["PF", "SF"], 96, 95, 72, 72, 93, 78, 95, 76, 14, 80),
  p("nash", "史蒂夫纳什", "太阳", "2000s", ["PG"], 95, 92, 96, 52, 48, 99, 90, 48, 11, 76, true),
  p("amare", "阿玛雷斯塔德迈尔", "太阳", "2000s", ["PF", "C"], 89, 91, 55, 68, 84, 60, 84, 70, 11, 62),
  p("booker", "德文布克", "太阳", "2020s", ["SG", "PG"], 92, 94, 89, 70, 58, 78, 91, 72, 13, 84),
  p("kd_phx", "凯文杜兰特", "太阳", "2020s", ["SF", "PF"], 96, 98, 92, 84, 76, 72, 95, 68, 14, 70),
  p("cp3_phx", "克里斯保罗", "太阳", "2020s", ["PG"], 88, 82, 86, 82, 56, 96, 86, 50, 8, 68),

  p("kd_okc", "凯文杜兰特", "雷霆", "2010s", ["SF", "PF"], 97, 99, 90, 82, 78, 72, 94, 74, 16, 78),
  p("westbrook", "拉塞尔威斯布鲁克", "雷霆", "2010s", ["PG"], 94, 96, 70, 78, 84, 90, 88, 92, 17, 78, true),
  p("harden_okc", "詹姆斯哈登", "雷霆", "2010s", ["SG", "PG"], 88, 86, 84, 68, 58, 78, 84, 70, 10, 82),
  p("sga", "谢伊吉尔杰斯亚历山大", "雷霆", "2020s", ["PG", "SG"], 94, 96, 82, 86, 72, 82, 92, 72, 14, 86),
  p("chet", "切特霍姆格伦", "雷霆", "2020s", ["C", "PF"], 88, 82, 80, 92, 88, 58, 82, 42, 8, 72),
  p("jalen_williams", "杰伦威廉姆斯", "雷霆", "2020s", ["SG", "SF"], 86, 83, 82, 86, 70, 70, 82, 54, 8, 84),

  p("cp3_lac", "克里斯保罗", "快船", "2010s", ["PG"], 94, 90, 88, 90, 58, 98, 91, 58, 11, 72, true),
  p("griffin", "布雷克格里芬", "快船", "2010s", ["PF", "C"], 90, 92, 68, 70, 88, 72, 84, 78, 12, 58, true),
  p("kawhi_lac", "科怀伦纳德", "快船", "2020s", ["SF", "PF"], 93, 92, 87, 98, 80, 68, 93, 58, 11, 48),
  p("george", "保罗乔治", "快船", "2020s", ["SF", "SG", "PF"], 91, 88, 88, 92, 76, 70, 88, 62, 11, 66, true),
  p("brand", "埃尔顿布兰德", "快船", "2000s", ["PF", "C"], 88, 86, 44, 78, 88, 58, 83, 60, 10, 66),
  p("odom_lac", "拉马尔奥多姆", "快船", "2000s", ["PF", "SF"], 84, 80, 72, 68, 82, 76, 80, 52, 8, 66),

  p("giannis", "扬尼斯阿德托昆博", "雄鹿", "2020s", ["PF", "C", "SF"], 98, 97, 60, 96, 96, 82, 94, 78, 16, 88),
  p("lillard_mil", "达米安利拉德", "雄鹿", "2020s", ["PG"], 90, 92, 91, 58, 50, 82, 93, 76, 13, 76),
  p("middleton", "克里斯米德尔顿", "雄鹿", "2020s", ["SF", "SG"], 86, 83, 86, 80, 66, 70, 86, 52, 8, 68),
  p("ray_mil", "雷阿伦", "雄鹿", "2000s", ["SG"], 90, 88, 96, 68, 58, 68, 88, 58, 10, 86),
  p("vin_baker", "文恩贝克", "雄鹿", "1990s", ["PF", "C"], 84, 82, 30, 74, 80, 52, 72, 60, 13, 70),
  p("jrue_mil", "朱霍勒迪", "雄鹿", "2020s", ["PG", "SG"], 86, 80, 82, 96, 62, 82, 84, 46, 7, 86),

  p("lebron_cle", "勒布朗詹姆斯", "骑士", "2010s", ["SF", "PF", "PG"], 99, 99, 80, 92, 86, 96, 98, 80, 18, 88),
  p("kyrie_cle", "凯里欧文", "骑士", "2010s", ["PG", "SG"], 91, 94, 88, 64, 54, 78, 92, 72, 13, 68),
  p("love", "凯文乐福", "骑士", "2010s", ["PF", "C"], 86, 82, 84, 62, 92, 62, 84, 48, 8, 70),
  p("mitchell_cle", "多诺万米切尔", "骑士", "2020s", ["SG", "PG"], 91, 93, 86, 76, 58, 76, 89, 76, 13, 82),
  p("garland", "达柳斯加兰", "骑士", "2020s", ["PG"], 84, 84, 86, 60, 46, 84, 80, 58, 9, 70),
  p("mobley", "埃文莫布里", "骑士", "2020s", ["PF", "C"], 86, 78, 66, 92, 88, 62, 80, 36, 7, 84),

  p("kidd_njn", "贾森基德", "篮网", "2000s", ["PG"], 93, 84, 78, 94, 78, 98, 89, 48, 9, 84),
  p("vince_njn", "文斯卡特", "篮网", "2000s", ["SG", "SF"], 90, 91, 84, 72, 70, 70, 87, 72, 12, 66),
  p("kd_bkn", "凯文杜兰特", "篮网", "2020s", ["SF", "PF"], 97, 99, 92, 84, 76, 76, 95, 72, 15, 68),
  p("harden_bkn", "詹姆斯哈登", "篮网", "2020s", ["PG", "SG"], 91, 90, 88, 66, 62, 92, 86, 78, 13, 62),
  p("kyrie_bkn", "凯里欧文", "篮网", "2020s", ["PG", "SG"], 92, 95, 90, 62, 52, 82, 91, 74, 14, 58),
  p("lopez_bkn", "布鲁克洛佩兹", "篮网", "2010s", ["C"], 85, 84, 74, 78, 82, 50, 80, 50, 8, 74),

  p("jokic", "尼古拉约基奇", "掘金", "2020s", ["C"], 99, 98, 86, 82, 92, 99, 97, 64, 16, 88),
  p("murray_den", "贾马尔穆雷", "掘金", "2020s", ["PG", "SG"], 88, 88, 86, 68, 56, 78, 91, 66, 11, 64),
  p("melo_den", "卡梅罗安东尼", "掘金", "2000s", ["SF", "PF"], 91, 94, 82, 62, 76, 60, 88, 72, 14, 80),
  p("iverson_den", "阿伦艾弗森", "掘金", "2000s", ["SG", "PG"], 88, 91, 76, 58, 44, 76, 86, 86, 14, 60),
  p("mutombo_den", "迪肯贝穆托姆博", "掘金", "1990s", ["C"], 88, 62, 30, 98, 96, 42, 82, 24, 5, 78),
  p("mpj_den", "小迈克尔波特", "掘金", "2020s", ["SF", "PF"], 83, 82, 88, 70, 74, 48, 79, 54, 8, 56),

  p("ewing", "帕特里克尤因", "尼克斯", "1990s", ["C"], 94, 88, 48, 92, 94, 56, 91, 58, 12, 78, true),
  p("starks", "约翰斯塔克斯", "尼克斯", "1990s", ["SG"], 82, 80, 80, 84, 56, 60, 80, 58, 8, 76),
  p("melo_nyk", "卡梅罗安东尼", "尼克斯", "2010s", ["SF", "PF"], 92, 95, 84, 58, 78, 60, 89, 74, 15, 74, true),
  p("brunson", "杰伦布伦森", "尼克斯", "2020s", ["PG"], 89, 90, 86, 72, 54, 84, 90, 68, 12, 84),
  p("randle", "朱利叶斯兰德尔", "尼克斯", "2020s", ["PF"], 84, 84, 76, 64, 84, 66, 78, 64, 11, 72),
  p("porzingis_nyk", "克里斯塔普斯波尔津吉斯", "尼克斯", "2010s", ["PF", "C"], 84, 83, 82, 82, 84, 48, 79, 42, 8, 52),

  p("iverson", "阿伦艾弗森", "76人", "2000s", ["SG", "PG"], 95, 98, 78, 70, 48, 82, 93, 90, 18, 70, true),
  p("embiid", "乔尔恩比德", "76人", "2020s", ["C"], 97, 98, 82, 94, 92, 70, 92, 78, 16, 58),
  p("harden_phi", "詹姆斯哈登", "76人", "2020s", ["PG", "SG"], 88, 86, 86, 62, 58, 92, 84, 70, 11, 72),
  p("maxey", "泰瑞斯马克西", "76人", "2020s", ["PG", "SG"], 86, 88, 88, 66, 48, 78, 84, 64, 10, 84),
  p("barkley_phi", "查尔斯巴克利", "76人", "1990s", ["PF", "SF"], 93, 93, 70, 68, 94, 76, 91, 74, 14, 80),
  p("mutombo_phi", "迪肯贝穆托姆博", "76人", "2000s", ["C"], 84, 58, 28, 98, 94, 40, 80, 20, 4, 72),

  p("horry_lal", "罗伯特霍里", "湖人", "2000s", ["PF", "SF"], 80, 72, 82, 78, 72, 58, 88, 34, 5, 78),
  p("fisher_lal", "德里克费舍尔", "湖人", "2000s", ["PG"], 78, 72, 82, 72, 42, 70, 86, 38, 5, 82),
  p("odom_lal", "拉马尔奥多姆", "湖人", "2010s", ["PF", "SF"], 84, 80, 72, 76, 84, 78, 82, 50, 8, 70),
  p("caruso_lal", "亚历克斯卡鲁索", "湖人", "2020s", ["PG", "SG"], 78, 66, 74, 88, 48, 66, 78, 36, 4, 80),

  p("tony_allen_bos", "托尼阿伦", "凯尔特人", "2000s", ["SG", "SF"], 78, 60, 48, 94, 54, 48, 74, 42, 4, 74),
  p("perkins_bos", "肯德里克帕金斯", "凯尔特人", "2000s", ["C"], 77, 58, 20, 84, 82, 42, 72, 22, 4, 76),
  p("smart_bos", "马库斯斯马特", "凯尔特人", "2020s", ["PG", "SG"], 82, 72, 76, 94, 56, 78, 84, 46, 7, 78),
  p("white_bos", "德里克怀特", "凯尔特人", "2020s", ["PG", "SG"], 82, 78, 84, 86, 52, 76, 82, 42, 6, 84),

  p("kukoc", "托尼库科奇", "公牛", "1990s", ["SF", "PF"], 83, 82, 82, 68, 68, 78, 82, 42, 7, 76),
  p("harper_chi", "罗恩哈珀", "公牛", "1990s", ["PG", "SG"], 80, 72, 68, 86, 56, 72, 80, 38, 5, 78),
  p("noah_chi", "乔金诺阿", "公牛", "2010s", ["C"], 84, 68, 22, 92, 92, 78, 80, 36, 6, 70),
  p("deng_chi", "洛尔邓", "公牛", "2010s", ["SF", "PF"], 83, 78, 76, 86, 70, 58, 78, 40, 7, 82),

  p("iggy_gsw", "安德烈伊戈达拉", "勇士", "2010s", ["SF", "SG"], 84, 76, 78, 92, 66, 78, 88, 38, 6, 78),
  p("livingston", "肖恩利文斯顿", "勇士", "2010s", ["PG", "SG"], 80, 78, 42, 76, 48, 74, 82, 34, 5, 68),
  p("looney", "凯文卢尼", "勇士", "2020s", ["C", "PF"], 78, 62, 24, 82, 88, 56, 76, 24, 4, 82),
  p("poole_gsw", "乔丹普尔", "勇士", "2020s", ["SG", "PG"], 80, 84, 82, 56, 42, 68, 78, 62, 10, 72),

  p("bowen_sas", "布鲁斯鲍文", "马刺", "2000s", ["SF", "SG"], 79, 62, 76, 95, 48, 42, 78, 28, 4, 84),
  p("horry_sas", "罗伯特霍里", "马刺", "2000s", ["PF", "SF"], 78, 68, 80, 76, 68, 54, 88, 28, 4, 72),
  p("green_sas", "丹尼格林", "马刺", "2010s", ["SG", "SF"], 80, 70, 88, 86, 52, 46, 82, 32, 4, 82),
  p("diaw_sas", "鲍里斯迪奥", "马刺", "2010s", ["PF", "C"], 80, 74, 72, 74, 70, 82, 80, 32, 5, 76),

  p("battier_mia", "肖恩巴蒂尔", "热火", "2010s", ["SF", "PF"], 78, 62, 82, 88, 54, 48, 82, 26, 3, 80),
  p("ray_mia", "雷阿伦", "热火", "2010s", ["SG"], 82, 78, 94, 66, 44, 56, 90, 34, 5, 72),
  p("herro", "泰勒希罗", "热火", "2020s", ["SG", "PG"], 82, 86, 88, 58, 50, 68, 82, 58, 10, 64),
  p("lowry_mia", "凯尔洛瑞", "热火", "2020s", ["PG"], 80, 76, 82, 78, 52, 82, 84, 38, 6, 66),

  p("ariza_hou", "特雷沃阿里扎", "火箭", "2010s", ["SF", "SG"], 80, 68, 82, 86, 58, 46, 78, 34, 5, 78),
  p("capela_hou", "克林特卡佩拉", "火箭", "2010s", ["C"], 82, 76, 20, 86, 92, 42, 78, 42, 7, 78),
  p("tucker_hou", "PJ塔克", "火箭", "2010s", ["PF", "SF"], 78, 58, 78, 88, 72, 42, 80, 24, 3, 80),
  p("brooks_hou", "狄龙布鲁克斯", "火箭", "2020s", ["SF", "SG"], 80, 72, 76, 88, 54, 42, 78, 46, 7, 76),

  p("terry_dal", "杰森特里", "独行侠", "2010s", ["SG", "PG"], 82, 82, 88, 62, 44, 68, 88, 50, 8, 78),
  p("chandler_dal", "泰森钱德勒", "独行侠", "2010s", ["C"], 82, 68, 20, 92, 94, 38, 82, 30, 5, 76),
  p("finley_dal", "迈克尔芬利", "独行侠", "2000s", ["SG", "SF"], 84, 84, 80, 72, 58, 58, 82, 48, 9, 76),
  p("dfs_dal", "多里安芬尼史密斯", "独行侠", "2020s", ["SF", "PF"], 78, 62, 80, 84, 62, 38, 76, 24, 3, 82),

  p("marion_phx", "肖恩马里昂", "太阳", "2000s", ["SF", "PF"], 86, 82, 72, 88, 88, 58, 82, 54, 9, 84),
  p("joe_johnson_phx", "乔约翰逊", "太阳", "2000s", ["SG", "SF"], 84, 84, 84, 70, 58, 64, 84, 48, 9, 78),
  p("bridges_phx", "米卡尔布里奇斯", "太阳", "2020s", ["SF", "SG"], 82, 76, 84, 90, 56, 54, 82, 36, 5, 90),
  p("ayton_phx", "德安德烈艾顿", "太阳", "2020s", ["C"], 84, 82, 42, 78, 90, 46, 78, 44, 8, 76),

  p("ibaka_okc", "赛尔吉伊巴卡", "雷霆", "2010s", ["PF", "C"], 84, 74, 68, 94, 86, 36, 80, 34, 5, 78),
  p("adams_okc", "史蒂文亚当斯", "雷霆", "2010s", ["C"], 80, 66, 18, 84, 92, 50, 76, 28, 4, 82),
  p("dort_okc", "吕冈茨多尔特", "雷霆", "2020s", ["SG", "SF"], 80, 70, 78, 90, 54, 42, 78, 34, 5, 82),
  p("giddey_okc", "约什吉迪", "雷霆", "2020s", ["PG", "SG"], 80, 74, 70, 66, 72, 84, 78, 40, 7, 74),

  p("reddick_lac", "JJ雷迪克", "快船", "2010s", ["SG"], 80, 78, 92, 58, 36, 54, 82, 32, 5, 76),
  p("deandre_lac", "德安德烈乔丹", "快船", "2010s", ["C"], 84, 78, 10, 88, 96, 38, 80, 34, 5, 78),
  p("lou_lac", "路易斯威廉姆斯", "快船", "2010s", ["SG", "PG"], 82, 88, 82, 46, 36, 70, 86, 66, 11, 70),
  p("mann_lac", "特伦斯曼恩", "快船", "2020s", ["SG", "SF"], 76, 68, 72, 78, 54, 46, 76, 30, 4, 82),

  p("lopez_mil", "布鲁克洛佩兹", "雄鹿", "2020s", ["C"], 84, 78, 82, 90, 76, 42, 82, 32, 5, 74),
  p("portis_mil", "鲍比波蒂斯", "雄鹿", "2020s", ["PF", "C"], 80, 78, 76, 72, 82, 38, 78, 38, 6, 78),
  p("bogut_mil", "安德鲁博古特", "雄鹿", "2000s", ["C"], 80, 72, 18, 86, 88, 58, 76, 28, 5, 64),
  p("mason_mil", "德斯蒙德梅森", "雄鹿", "2000s", ["SG", "SF"], 78, 76, 58, 72, 58, 42, 78, 48, 7, 76),

  p("thompson_cle", "特里斯坦汤普森", "骑士", "2010s", ["C", "PF"], 78, 62, 10, 78, 90, 36, 78, 26, 4, 82),
  p("jr_cle", "JR史密斯", "骑士", "2010s", ["SG", "SF"], 80, 76, 86, 68, 50, 44, 84, 46, 7, 70),
  p("allen_cle", "贾勒特阿伦", "骑士", "2020s", ["C"], 84, 78, 20, 88, 92, 46, 80, 32, 5, 82),
  p("okoro_cle", "艾萨克奥科罗", "骑士", "2020s", ["SF", "SG"], 76, 62, 70, 86, 50, 36, 74, 24, 3, 84),

  p("kittles_njn", "克里基特尔斯", "篮网", "2000s", ["SG"], 78, 74, 82, 76, 42, 50, 78, 34, 5, 72),
  p("jefferson_njn", "理查德杰弗森", "篮网", "2000s", ["SF"], 82, 82, 72, 78, 62, 48, 80, 50, 8, 82),
  p("claxton_bkn", "尼古拉克拉克斯顿", "篮网", "2020s", ["C"], 80, 70, 18, 88, 86, 42, 78, 30, 4, 76),
  p("dinwiddie_bkn", "斯潘塞丁威迪", "篮网", "2020s", ["PG", "SG"], 80, 80, 78, 62, 46, 74, 80, 46, 8, 70),

  p("gordon_den", "阿隆戈登", "掘金", "2020s", ["PF", "SF"], 84, 80, 70, 86, 78, 62, 84, 44, 7, 82),
  p("kcp_den", "肯塔维厄斯考德威尔波普", "掘金", "2020s", ["SG", "SF"], 80, 70, 84, 88, 46, 42, 82, 28, 4, 84),
  p("camby_den", "马库斯坎比", "掘金", "2000s", ["C"], 84, 62, 20, 96, 96, 42, 80, 26, 4, 66),
  p("jr_den", "JR史密斯", "掘金", "2000s", ["SG", "SF"], 80, 82, 84, 60, 44, 48, 80, 54, 8, 70),

  p("oakley_nyk", "查尔斯奥克利", "尼克斯", "1990s", ["PF", "C"], 80, 62, 34, 88, 90, 50, 78, 22, 4, 80),
  p("houston_nyk", "阿兰休斯顿", "尼克斯", "2000s", ["SG"], 84, 84, 88, 62, 42, 48, 86, 44, 8, 68),
  p("chandler_nyk", "泰森钱德勒", "尼克斯", "2010s", ["C"], 82, 68, 10, 90, 92, 36, 80, 24, 4, 74),
  p("hart_nyk", "约什哈特", "尼克斯", "2020s", ["SG", "SF"], 80, 70, 74, 82, 82, 58, 82, 34, 5, 86),

  p("snow_phi", "埃里克斯诺", "76人", "2000s", ["PG"], 78, 64, 44, 86, 44, 76, 76, 28, 4, 76),
  p("korver_phi", "凯尔科沃尔", "76人", "2000s", ["SG", "SF"], 78, 72, 92, 54, 36, 46, 80, 26, 4, 78),
  p("tobias_phi", "托拜厄斯哈里斯", "76人", "2020s", ["PF", "SF"], 82, 82, 82, 70, 72, 54, 80, 42, 8, 80),
  p("thybulle_phi", "马蒂斯赛布尔", "76人", "2020s", ["SG", "SF"], 76, 54, 68, 92, 42, 34, 74, 18, 3, 74),

  // 湖人 1980s — Showtime 王朝
  p("kareem_lal", "卡里姆阿卜杜尔贾巴尔", "湖人", "1980s", ["C"], 97, 94, 30, 88, 92, 70, 90, 62, 15, 84),
  p("worthy", "詹姆斯沃西", "湖人", "1980s", ["SF", "PF"], 90, 88, 48, 78, 74, 72, 90, 70, 12, 82),
  p("byron_scott_lal", "拜伦斯科特", "湖人", "1980s", ["SG"], 81, 76, 70, 74, 48, 60, 76, 62, 9, 80),
  p("ac_green", "AC格林", "湖人", "1980s", ["PF", "SF"], 78, 64, 54, 82, 84, 48, 72, 56, 5, 84),

  // 湖人 1990s — Showtime 末期到重建期
  p("nick_van_exel", "尼克范埃克塞尔", "湖人", "1990s", ["PG"], 82, 80, 82, 60, 42, 78, 80, 76, 12, 74),
  p("eddie_jones_lal", "埃迪琼斯", "湖人", "1990s", ["SG", "SF"], 82, 78, 72, 82, 56, 62, 74, 70, 11, 78),

  // 凯尔特人 1980s — Bird 王朝
  p("mchale", "凯文麦克海尔", "凯尔特人", "1980s", ["PF", "C"], 92, 90, 42, 90, 82, 64, 86, 56, 13, 74),
  p("parish_bos", "罗伯特帕里什", "凯尔特人", "1980s", ["C"], 86, 80, 30, 80, 88, 52, 74, 58, 11, 82),
  p("dennis_johnson_bos", "丹尼斯约翰逊", "凯尔特人", "1980s", ["PG", "SG"], 82, 74, 62, 86, 50, 78, 80, 66, 9, 76),
  p("ainge_bos", "丹尼艾吉", "凯尔特人", "1980s", ["PG", "SG"], 80, 76, 80, 72, 44, 72, 78, 66, 8, 80),

  // 凯尔特人 1990s — 重建期
  p("antoine_walker_bos", "安托万沃克", "凯尔特人", "1990s", ["PF", "SF"], 82, 82, 74, 62, 76, 68, 74, 66, 14, 74),

  // 雄鹿 1990s 补强
  p("terry_cummings", "特里卡明斯", "雄鹿", "1990s", ["PF", "SF"], 80, 80, 38, 62, 72, 50, 72, 66, 12, 72),

  // 爵士 — 双塔无冠王朝到现代重建
  p("malone", "卡尔马龙", "爵士", "1990s", ["PF"], 97, 94, 40, 78, 92, 66, 92, 72, 17, 88, true),
  p("stockton", "约翰斯托克顿", "爵士", "1990s", ["PG"], 94, 82, 72, 78, 52, 99, 86, 78, 12, 90, true),
  p("hornacek_uta", "杰夫霍纳塞克", "爵士", "1990s", ["SG", "SF"], 84, 84, 88, 74, 52, 72, 82, 64, 10, 82),
  p("deron_uta", "德隆威廉姆斯", "爵士", "2000s", ["PG"], 91, 86, 76, 74, 54, 94, 86, 72, 13, 72),
  p("ak47_uta", "安德烈基里连科", "爵士", "2000s", ["SF", "PF"], 87, 76, 72, 96, 78, 80, 78, 70, 9, 62),
  p("boozer_uta", "卡洛斯布泽尔", "爵士", "2000s", ["PF", "C"], 85, 82, 30, 68, 88, 54, 76, 60, 13, 72),
  p("hayward_uta", "戈登海沃德", "爵士", "2010s", ["SF", "SG"], 84, 82, 82, 72, 62, 76, 76, 62, 10, 64),
  p("gobert_uta", "鲁迪戈贝尔", "爵士", "2010s", ["C"], 87, 72, 20, 98, 96, 52, 72, 58, 7, 82),
  p("mitchell_uta", "多诺万米切尔", "爵士", "2010s", ["SG", "PG"], 91, 92, 86, 74, 52, 74, 88, 76, 13, 80),
  p("lauri_uta", "劳里马尔卡宁", "爵士", "2020s", ["PF", "C"], 88, 88, 88, 74, 80, 56, 82, 60, 10, 80),
  p("clarkson_uta", "乔丹克拉克森", "爵士", "2020s", ["SG", "PG"], 80, 84, 82, 54, 44, 58, 82, 74, 11, 78),

  // 步行者 — 米勒时代到现代
  p("reggie", "雷吉米勒", "步行者", "1990s", ["SG"], 92, 90, 96, 72, 42, 58, 94, 58, 14, 84, true),
  p("rik_smits", "里克斯密茨", "步行者", "1990s", ["C"], 83, 82, 30, 78, 78, 52, 76, 56, 10, 72),
  p("mark_jackson_ind", "马克杰克逊", "步行者", "1990s", ["PG"], 81, 72, 62, 62, 52, 92, 72, 62, 9, 78),
  p("jermaine_ind", "杰梅因奥尼尔", "步行者", "2000s", ["PF", "C"], 88, 84, 30, 92, 90, 56, 78, 60, 13, 62),
  p("ron_artest_ind", "罗恩阿泰斯特", "步行者", "2000s", ["SF", "SG"], 85, 78, 72, 96, 68, 58, 80, 68, 11, 72),
  p("paul_george_ind", "保罗乔治", "步行者", "2010s", ["SF", "SG"], 90, 88, 86, 92, 74, 66, 84, 62, 13, 66),
  p("danny_granger", "丹尼格兰杰", "步行者", "2010s", ["SF", "SG"], 82, 82, 82, 78, 62, 52, 76, 60, 12, 60),
  p("haliburton", "泰瑞斯哈利伯顿", "步行者", "2020s", ["PG"], 91, 84, 88, 72, 52, 96, 82, 76, 12, 80),
  p("siakam_ind", "帕斯卡尔西亚卡姆", "步行者", "2020s", ["PF", "SF"], 88, 84, 78, 82, 76, 72, 82, 70, 12, 80),
  p("myles_turner", "迈尔斯特纳", "步行者", "2020s", ["C", "PF"], 85, 76, 76, 94, 86, 48, 74, 56, 8, 80),

  // 活塞 — 坏孩子到冠军蓝领
  p("isiah_det", "以赛亚托马斯", "活塞", "1990s", ["PG"], 95, 90, 68, 76, 52, 92, 94, 82, 16, 78),
  p("dumars_det", "乔达马斯", "活塞", "1990s", ["SG"], 88, 84, 78, 90, 52, 68, 86, 62, 11, 82),
  p("laimbeer_det", "比尔莱姆比尔", "活塞", "1990s", ["C", "PF"], 80, 74, 62, 86, 88, 60, 76, 56, 8, 76),
  p("billups_det", "查西比卢普斯", "活塞", "2000s", ["PG"], 89, 84, 86, 78, 54, 88, 92, 62, 12, 80),
  p("ben_wallace", "本华莱士", "活塞", "2000s", ["C", "PF"], 87, 54, 10, 99, 96, 54, 72, 54, 6, 80),
  p("rip_hamilton", "理查德汉密尔顿", "活塞", "2000s", ["SG", "SF"], 85, 84, 74, 76, 52, 64, 82, 70, 12, 80),
  p("rasheed_det", "拉希德华莱士", "活塞", "2000s", ["PF", "C"], 86, 82, 78, 90, 78, 62, 78, 60, 10, 74),
  p("tayshaun_det", "泰肖恩普林斯", "活塞", "2000s", ["SF", "SG"], 83, 74, 74, 88, 60, 62, 74, 56, 7, 82),
  p("cade_det", "凯德坎宁汉姆", "活塞", "2020s", ["PG", "SG"], 87, 82, 80, 76, 66, 84, 82, 68, 13, 76),
  p("jalen_duren", "贾伦杜伦", "活塞", "2020s", ["C", "PF"], 82, 70, 18, 88, 94, 48, 68, 62, 7, 80),

  // 猛龙 — 文斯卡特到2019冠军
  p("vince_tor", "文斯卡特", "猛龙", "2000s", ["SG", "SF"], 91, 92, 82, 70, 62, 68, 84, 76, 14, 62),
  p("bosh_tor", "克里斯波什", "猛龙", "2000s", ["PF", "C"], 87, 84, 58, 72, 84, 60, 78, 64, 14, 78),
  p("jose_calderon", "何塞卡尔德隆", "猛龙", "2000s", ["PG"], 80, 74, 78, 60, 44, 88, 72, 58, 8, 74),
  p("antonio_davis_tor", "安东尼奥戴维斯", "猛龙", "2000s", ["PF", "C"], 79, 68, 20, 80, 84, 42, 68, 52, 7, 76),
  p("lowry_tor", "凯尔洛瑞", "猛龙", "2010s", ["PG"], 86, 80, 84, 80, 56, 86, 84, 62, 12, 68),
  p("kawhi_tor", "科怀伦纳德", "猛龙", "2010s", ["SF", "PF"], 97, 92, 86, 99, 78, 66, 98, 56, 12, 52),
  p("og_tor", "OG阿努诺比", "猛龙", "2020s", ["SF", "SG"], 84, 76, 80, 90, 60, 58, 76, 58, 7, 76),
  p("siakam_tor", "帕斯卡尔西亚卡姆", "猛龙", "2020s", ["PF", "SF"], 88, 82, 76, 80, 74, 70, 80, 68, 13, 80),
  p("fred_tor", "弗雷德范弗利特", "猛龙", "2020s", ["PG", "SG"], 83, 80, 86, 80, 42, 80, 82, 62, 11, 78),
  p("scottie_barnes", "斯科蒂巴恩斯", "猛龙", "2020s", ["SF", "PF"], 85, 78, 72, 82, 74, 76, 76, 66, 10, 84),
];

let state = null;
let activeFilter = "ALL";
let reportCache = "";

const $ = (id) => document.getElementById(id);

function p(id, name, team, era, pos, overall, offense, three, defense, rebound, passing, clutch, pace, usage, durability, dream = false) {
  return { id, name, team, era, pos, overall, offense, three, defense, rebound, passing, clutch, pace, usage, durability, dream };
}

const personOverrides = {
  shaq_lal: "shaquille_oneal",
  shaq_mia: "shaquille_oneal",
  lebron_lal: "lebron_james",
  lebron_mia: "lebron_james",
  lebron_cle: "lebron_james",
  kd_gsw: "kevin_durant",
  kd_phx: "kevin_durant",
  kd_okc: "kevin_durant",
  kd_bkn: "kevin_durant",
  cp3_hou: "chris_paul",
  cp3_phx: "chris_paul",
  cp3_lac: "chris_paul",
  harden_hou: "james_harden",
  harden_okc: "james_harden",
  harden_bkn: "james_harden",
  harden_phi: "james_harden",
  kyrie_dal: "kyrie_irving",
  kyrie_cle: "kyrie_irving",
  kyrie_bkn: "kyrie_irving",
  kawhi_sas: "kawhi_leonard",
  kawhi_lac: "kawhi_leonard",
  kawhi_tor: "kawhi_leonard",
  derozan_chi: "demar_derozan",
  derozan_sas: "demar_derozan",
  nash_dal: "steve_nash",
  nash: "steve_nash",
  kidd_dal: "jason_kidd",
  kidd_njn: "jason_kidd",
  melo_den: "carmelo_anthony",
  melo_nyk: "carmelo_anthony",
  iverson_den: "allen_iverson",
  iverson: "allen_iverson",
  barkley_phx: "charles_barkley",
  barkley_phi: "charles_barkley",
  mutombo_den: "dikembe_mutombo",
  mutombo_phi: "dikembe_mutombo",
  porzingis_dal: "kristaps_porzingis",
  porzingis_nyk: "kristaps_porzingis",
  butler_chi: "jimmy_butler",
  butler_mia: "jimmy_butler",
  odom_lac: "lamar_odom",
  odom_lal: "lamar_odom",
  horry_lal: "robert_horry",
  horry_sas: "robert_horry",
  ray_mil: "ray_allen",
  ray_mia: "ray_allen",
  lopez_bkn: "brook_lopez",
  lopez_mil: "brook_lopez",
  jr_cle: "jr_smith",
  jr_den: "jr_smith",
  chandler_dal: "tyson_chandler",
  chandler_nyk: "tyson_chandler",
  // 爵士
  mitchell_uta: "donovan_mitchell",
  mitchell_cle: "donovan_mitchell",
  // 步行者
  paul_george_ind: "paul_george",
  george: "paul_george",
  siakam_ind: "pascal_siakam",
  siakam_tor: "pascal_siakam",
  // 活塞
  rasheed_det: "rasheed_wallace",
  // 猛龙
  vince_njn: "vince_carter",
  vince_tor: "vince_carter",
  bosh: "chris_bosh",
  bosh_tor: "chris_bosh",
  lowry_mia: "kyle_lowry",
  lowry_tor: "kyle_lowry",
};

const playerFacts = {
  magic: "湖人Showtime王朝灵魂控卫，5次总冠军成员，1980年代最伟大球员之一。",
  shaq_lal: "湖人三连冠时期内线核心之一。",
  kobe_lal: "湖人五冠核心，OK组合与后两冠时代都在这里，9次入选最佳防守阵容。",
  pau_lal: "科比后两冠时期的重要内线搭档。",
  lebron_lal: "湖人2020年冠军核心之一。",
  ad_lal: "湖人2020年冠军核心内线。",
  bird: "凯尔特人1980年代三巨头核心，3次总冠军，3次MVP，历史最伟大SF之一。",
  pierce: "凯尔特人2008年冠军核心之一。",
  kg_bos: "凯尔特人2008年冠军防守支柱。",
  rondo: "凯尔特人2008年冠军控卫。",
  tatum: "凯尔特人2020年代锋线核心。",
  brown: "凯尔特人2020年代锋线核心。",
  mj: "公牛两次三连冠核心，6次总冠军6次FMVP，公认历史第一人。",
  pippen: "公牛两次三连冠核心侧翼，历史最佳SF之一。",
  rodman: "公牛第二个三连冠的重要篮板与防守拼图。",
  rose: "公牛队史最年轻MVP，无冠圆梦代表。",
  butler_chi: "巴特勒在公牛磨砺出双向能力，后成为热火精神领袖。",
  derozan_chi: "德罗赞公牛时期中距离进攻大师。",
  curry: "勇士王朝核心控卫，改变现代进攻空间，全场最强3分手。",
  klay: "勇士王朝核心射手。",
  draymond: "勇士王朝防守与组织轴心。",
  kd_gsw: "勇士2017、2018年冠军核心之一。",
  baron: "勇士2007年惊天大冷门核心控卫。",
  wiggins: "勇士2022年冠军锋线重要拼图。",
  duncan: "马刺长期争冠体系核心，大基本功代表。",
  parker: "马刺冠军控卫，2007年FMVP。",
  ginobili: "马刺冠军第六人与关键创造点。",
  kawhi_sas: "马刺2014年冠军锋线核心，FMVP。",
  wemby: "马刺新一代超级天才，多项历史纪录的状元秀。",
  derozan_sas: "德罗赞马刺时期持球创造点。",
  wade: "热火队史冠军核心后卫，2006年FMVP。",
  shaq_mia: "热火2006年冠军内线核心之一。",
  lebron_mia: "热火两连冠时期核心，个人巅峰赛季之一。",
  bosh: "热火三巨头时期关键内线。",
  butler_mia: "热火2020年代硬仗核心，无冠圆梦代表。",
  bam: "热火2020年代攻防兼备型内线核心。",
  hakeem: "火箭90年代两连冠核心中锋，梦幻脚步无人能破。",
  yao: "火箭中国球迷最熟悉的内线核心，无冠圆梦代表。",
  tmac_hou: "火箭姚麦时期核心得分手，职业生涯从未赢得系列赛，无冠圆梦代表。",
  harden_hou: "火箭2010年代持球大核心，无冠圆梦代表。",
  cp3_hou: "火箭2018争冠阵容核心控卫之一。",
  sengun: "火箭2020年代新核心，土耳其天才内线。",
  dirk: "独行侠2011年冠军核心，FMVP，欧洲球员的历史最佳。",
  nash_dal: "纳什早期在独行侠打出名气，后去太阳成就MVP传奇。",
  kidd_dal: "独行侠2011年冠军控卫，组织与防守兼备。",
  luka: "独行侠2020年代持球核心，无冠圆梦代表。",
  kyrie_dal: "独行侠与卢卡搭档的后场超级武器。",
  porzingis_dal: "独行侠2024年总冠军重要内线拼图。",
  barkley_phx: "太阳1990年代MVP核心，无冠遗憾。",
  nash: "太阳7秒进攻代表控卫，两次MVP，无冠圆梦代表。",
  amare: "纳什时期太阳高效内线终结点。",
  booker: "太阳2020年代核心射手兼得分后卫。",
  kd_phx: "KD太阳时期继续证明顶级得分能力。",
  cp3_phx: "保罗太阳时期率队进入总决赛，仍未能圆梦。",
  kd_okc: "雷霆青年三少核心之一，OKC时代最接近冠军。",
  westbrook: "雷霆MVP控卫，历史唯一场均三双单赛季，无冠圆梦代表。",
  harden_okc: "雷霆青年三少第六人时期，后成为最佳得分手。",
  sga: "雷霆2020年代第一人，控卫里的双向强者。",
  chet: "雷霆2020年代新锐，高效内线空间型大个。",
  jalen_williams: "雷霆2020年代核心锋卫，得分能力突出。",
  cp3_lac: "快船空接之城核心控卫，无冠圆梦代表。",
  griffin: "快船空接之城核心内线，激情飞人，无冠圆梦代表。",
  kawhi_lac: "科怀快船时期继续巅峰表现，膝伤成为最大遗憾。",
  george: "保罗乔治快船时期的主要得分与防守支柱，无冠圆梦代表。",
  brand: "快船早期攻防兼备大前锋。",
  odom_lac: "快船时期奥多姆展现多面手价值。",
  giannis: "雄鹿2021年冠军核心，2次MVP，进攻防守双超巨。",
  lillard_mil: "利拉德加盟雄鹿寻求冠军，无冠圆梦新篇章。",
  middleton: "雄鹿2021年冠军锋线核心之一，季后赛表现卓越。",
  ray_mil: "雷阿伦雄鹿时期的三分射手核心。",
  vin_baker: "雄鹿1990年代核心前锋，4次全明星。",
  jrue_mil: "雄鹿2021年冠军后场防守核心。",
  lebron_cle: "骑士2016年总冠军核心，带队从3:1逆转创造奇迹。",
  kyrie_cle: "骑士2016年总冠军核心后卫，G7绝杀三分永载史册。",
  love: "骑士2016年总冠军内线核心之一。",
  mitchell_cle: "骑士2020年代核心后卫，爆发力十足的得分机器。",
  garland: "骑士2020年代核心控卫，赛季最佳进步奖得主。",
  mobley: "骑士2020年代新锐内线，攻防均衡的未来核心。",
  kidd_njn: "篮网2000年代连续总决赛时期核心控卫。",
  vince_njn: "文斯卡特篮网时代继续展现统治力。",
  kd_bkn: "篮网三巨头时期核心之一，受伤成最大遗憾。",
  harden_bkn: "篮网三巨头时期核心之一。",
  kyrie_bkn: "篮网三巨头时期核心之一。",
  lopez_bkn: "篮网2010年代基础内线支柱。",
  jokic: "掘金2023年总冠军核心，2次MVP，史上最强策应型中锋。",
  murray_den: "掘金2023年总冠军后场核心，季后赛表现惊艳。",
  melo_den: "卡梅罗掘金时期展示统治力，后来转战纽约追梦。",
  iverson_den: "艾弗森掘金短暂搭档，继续无冠遗憾。",
  mutombo_den: "穆托姆博掘金时期多次DPOY，封盖大师。",
  mpj_den: "掘金2023年冠军主力拼图，大赛表现稳定。",
  ewing: "尼克斯队史招牌中锋，两次进总决赛均未夺冠，无冠圆梦代表。",
  starks: "尼克斯1990年代核心得分后卫，铁血斗士。",
  melo_nyk: "卡梅罗尼克斯时期的城市标志球星，无冠圆梦代表。",
  brunson: "尼克斯2020年代核心控卫，稳定高效的进攻发起点。",
  randle: "尼克斯2020年代主要进攻点之一。",
  porzingis_nyk: "尼克斯2010年代欧洲射手型中锋。",
  iverson: "76人队史招牌后卫，2001年MVP，无冠圆梦代表。",
  embiid: "76人2020年代MVP级内线，攻防一体的统治者。",
  harden_phi: "哈登76人时期组织带队争冠。",
  maxey: "76人2020年代新生代后卫核心。",
  barkley_phi: "巴克利76人时期展示早期超级实力。",
  mutombo_phi: "穆托姆博76人时期继续扮演蓝领护框角色。",
  // 爵士
  malone: "爵士双塔无冠遗憾的核心之一，2次MVP，14次全明星，无冠圆梦代表。",
  stockton: "爵士双塔无冠遗憾的灵魂，历史助攻抢断第一人，无冠圆梦代表。",
  hornacek_uta: "爵士1990年代精准射手与得分点。",
  deron_uta: "爵士2000年代一度被视为联盟最强PG之一。",
  ak47_uta: "基里连科爵士时代的铁血防守全能侧翼。",
  boozer_uta: "布泽尔爵士时期高效内线得分与篮板机器。",
  hayward_uta: "海沃德爵士时代全面进步为全明星，后因重伤辗转多队。",
  gobert_uta: "戈贝尔爵士时代多次DPOY，现代护框标杆。",
  mitchell_uta: "米切尔爵士时代的核心得分后卫，季后赛发挥惊人。",
  lauri_uta: "马尔卡宁爵士时代全明星赛季，空间型内线。",
  clarkson_uta: "第六人奖得主，爵士替补席最大爆发点。",
  // 步行者
  reggie: "步行者招牌射手，职业生涯从未夺冠，1995年G5绝杀纽约成为传奇，无冠圆梦代表。",
  rik_smits: "步行者荷兰天才中锋，米勒时代内线支柱。",
  mark_jackson_ind: "步行者1990年代传球型控卫，后成名教练。",
  jermaine_ind: "步行者2000年代全明星内线，攻防两端全能。",
  ron_artest_ind: "阿泰斯特步行者时代最强防守侧翼之一。",
  paul_george_ind: "保罗乔治步行者时代的队史标志性球星。",
  danny_granger: "格兰杰步行者时代核心得分锋，伤病缩短黄金期。",
  haliburton: "哈利伯顿步行者时代冉冉升起的控球核心，2024年全明星赛MVP。",
  siakam_ind: "西亚卡姆加盟步行者为夺冠再次发起冲击。",
  myles_turner: "特纳步行者护框型中锋，空间与防守兼备。",
  // 活塞
  isiah_det: "托马斯活塞坏孩子时代灵魂，2次总冠军，1990年FMVP，历史最强小个之一。",
  dumars_det: "达马斯活塞坏孩子时代核心射手，1989年FMVP，以绅士精神闻名。",
  laimbeer_det: "莱姆比尔活塞坏孩子时代肉搏型中锋，防守体系核心。",
  billups_det: "比卢普斯活塞2004年FMVP，稳健的冠军控卫。",
  ben_wallace: "本华莱士活塞2004年冠军防守支柱，4次DPOY，近现代最强防守型中锋之一。",
  rip_hamilton: "汉密尔顿活塞跑位射手，冠军拼图与得分核心。",
  rasheed_det: "拉希德华莱士活塞2004年关键前锋，情绪化但实力雄厚。",
  tayshaun_det: "泰肖恩普林斯活塞防守锋线核心，2004年冠军重要拼图。",
  cade_det: "坎宁汉姆活塞重建核心，全能型控卫。",
  jalen_duren: "杜伦活塞新一代中锋新星，篮板与护框天赋出众。",
  // 猛龙
  vince_tor: "文斯卡特猛龙开荒年代的球队招牌，扣篮之神让加拿大爱上篮球。",
  bosh_tor: "波什猛龙时代的主要得分点与内线，后加盟热火三巨头。",
  jose_calderon: "卡尔德隆猛龙时期组织核心，高效传球型PG。",
  antonio_davis_tor: "猛龙早期重要内线拼图，蓝领精神代表。",
  lowry_tor: "洛瑞猛龙核心多年，2019年冠军功勋，唯一一支球队的忠诚代表。",
  kawhi_tor: "科怀猛龙2019年总冠军核心，FMVP，G7绝杀压哨球震惊全球。",
  og_tor: "OG阿努诺比猛龙防守侧翼核心，多才多艺的双向球员。",
  siakam_tor: "西亚卡姆猛龙本土培养的全明星前锋，最佳进步奖得主。",
  fred_tor: "范弗利特无球员合同签约的猛龙核心，冠军拼图与关键球手。",
  scottie_barnes: "巴恩斯猛龙新生代全能型前锋，2022年最佳新秀。",
  // 1980s Lakers
  kareem_lal: "贾巴尔湖人时代与魔术师共同缔造Showtime王朝，5次湖人总冠军，历史最伟大C之一。",
  worthy: "沃西湖人Showtime时代核心侧翼，1988年FMVP，Big Game James。",
  byron_scott_lal: "拜伦斯科特湖人1980年代王朝重要射手，3次总冠军成员。",
  ac_green: "AC格林湖人1980年代的铁人内线，以出勤率著称的冠军拼图。",
  // 1990s Lakers
  nick_van_exel: "范埃克塞尔湖人1990年代有创造力的进攻型控卫。",
  eddie_jones_lal: "埃迪琼斯湖人后Showtime时代的双向得分后卫。",
  // 1980s Celtics
  mchale: "麦克海尔凯尔特人1980年代三巨头之一，低位技术无人能破，3次总冠军。",
  parish_bos: "帕里什凯尔特人1980年代三巨头之一，'首席'稳定内线，3次总冠军。",
  dennis_johnson_bos: "丹尼斯约翰逊凯尔特人组织与防守全能后卫，3次总冠军。",
  ainge_bos: "丹尼艾吉凯尔特人1980年代射手型后卫，2次总冠军，后成名教练。",
  // 1990s Celtics
  antoine_walker_bos: "安托万沃克凯尔特人1990年代最受关注的全能前锋。",
  // 雄鹿
  terry_cummings: "卡明斯雄鹿1990年代稳定进攻前锋，曾入选全明星。",
};

const historyLinks = [
  { ids: ["mj", "pippen"], label: "乔丹与皮蓬重聚公牛锋线骨架", bonus: 4 },
  { ids: ["mj", "pippen", "rodman"], label: "公牛后三连冠核心完整重现", bonus: 8 },
  { ids: ["shaq_lal", "kobe_lal"], label: "湖人OK组合重新合体", bonus: 6 },
  { ids: ["kobe_lal", "pau_lal"], label: "科比与加索尔后两冠默契在线", bonus: 4 },
  { ids: ["lebron_lal", "ad_lal"], label: "湖人2020冠军双核同场", bonus: 4 },
  { ids: ["magic", "kareem_lal", "worthy"], label: "湖人Showtime三核复现王朝荣光", bonus: 7 },
  { ids: ["bird", "mchale", "parish_bos"], label: "凯尔特人1980年代三巨头同场", bonus: 7 },
  { ids: ["pierce", "kg_bos", "rondo"], label: "凯尔特人2008冠军骨架重现", bonus: 6 },
  { ids: ["curry", "klay", "draymond"], label: "勇士水花与追梦核心体系成型", bonus: 7 },
  { ids: ["curry", "klay", "draymond", "kd_gsw"], label: "勇士宇宙队核心集齐", bonus: 9 },
  { ids: ["duncan", "parker", "ginobili"], label: "马刺GDP组合完整", bonus: 7 },
  { ids: ["lebron_mia", "wade", "bosh"], label: "热火三巨头同队", bonus: 7 },
  { ids: ["harden_hou", "cp3_hou"], label: "火箭灯泡组合再冲西部", bonus: 5 },
  { ids: ["yao", "tmac_hou"], label: "姚麦组合补上一段健康剧本", bonus: 4 },
  { ids: ["dirk", "kidd_dal", "terry_dal", "chandler_dal"], label: "独行侠2011冠军骨架重现", bonus: 8 },
  { ids: ["nash", "amare", "marion_phx"], label: "太阳7秒进攻核心重聚", bonus: 6 },
  { ids: ["kd_okc", "westbrook", "harden_okc"], label: "雷霆青年三少提前圆梦", bonus: 6 },
  { ids: ["cp3_lac", "griffin", "deandre_lac"], label: "快船空接之城完整起飞", bonus: 6 },
  { ids: ["giannis", "middleton", "jrue_mil"], label: "雄鹿2021冠军三核同场", bonus: 7 },
  { ids: ["lebron_cle", "kyrie_cle", "love"], label: "骑士2016冠军三核重现", bonus: 7 },
  { ids: ["jokic", "murray_den", "gordon_den"], label: "掘金2023冠军主轴成型", bonus: 6 },
  { ids: ["malone", "stockton", "hornacek_uta"], label: "爵士双塔加射手，差一步的西部霸主", bonus: 6 },
  { ids: ["isiah_det", "dumars_det", "laimbeer_det"], label: "活塞坏孩子核心重聚", bonus: 6 },
  { ids: ["billups_det", "ben_wallace", "rip_hamilton", "rasheed_det"], label: "活塞2004冠军核心成型", bonus: 8 },
  { ids: ["kawhi_tor", "lowry_tor"], label: "猛龙2019冠军双核同场", bonus: 5 },
  { ids: ["reggie", "jermaine_ind"], label: "步行者米勒时代双核组合", bonus: 4 },
];

function enrichPlayers() {
  players.forEach((player) => {
    player.personId = personOverrides[player.id] ?? player.id;
    player.rarity = rarityOf(player);
    player.tags = tagsOf(player);
    player.fact = playerFacts[player.id] ?? `${player.team}${player.era}代表球员。`;
  });
}

function rarityOf(player) {
  if (player.overall >= 97) return "传奇";
  if (player.overall >= 93) return "超巨";
  if (player.overall >= 88) return "全明星";
  if (player.overall >= 84) return "首发";
  return "拼图";
}

function tagsOf(player) {
  const tags = [];
  if (player.usage >= 15) tags.push("持球核心");
  if (player.three >= 88) tags.push("空间强");
  if (player.defense >= 90) tags.push("防守大闸");
  if (player.rebound >= 90 || (player.pos.includes("C") && player.defense >= 88)) tags.push("护框篮板");
  if (player.passing >= 90) tags.push("组织大师");
  if (player.clutch >= 92) tags.push("关键球");
  if (player.durability <= 62) tags.push("耐久隐患");
  if (player.usage >= 16 && player.defense < 72) tags.push("球权压力");
  if (!tags.length) tags.push("冠军拼图");
  return tags.slice(0, 3);
}

function rarityClass(player) {
  if (player.rarity === "传奇") return "rarity-legend";
  if (player.rarity === "超巨") return "rarity-superstar";
  if (player.rarity === "全明星") return "rarity-allstar";
  if (player.rarity === "首发") return "rarity-starter";
  return "rarity-role";
}

enrichPlayers();

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

function hasOpenSlot(player) {
  if (!state) return true;
  return player.pos.some((pos) => positions.includes(pos) && !state.lineup[pos]);
}

function viablePlayers(team = state?.currentTeam, era = state?.currentEra) {
  if (!team || !era) return [];
  return players
    .filter((player) => player.team === team && player.era === era)
    .filter((player) => !state.usedIds.has(player.id))
    .filter((player) => !state.usedPersons.has(player.personId))
    .filter(hasOpenSlot);
}

function viablePairs() {
  const pairs = [];
  teams.forEach((team) => {
    eras.forEach((era) => {
      const count = viablePlayers(team, era).length;
      if (count) pairs.push({ team, era, count });
    });
  });
  return pairs;
}

function richPairs(list = viablePairs()) {
  const best = list.filter((pair) => pair.count >= 3);
  if (best.length) return best;
  const ok = list.filter((pair) => pair.count >= 2);
  return ok.length ? ok : list;
}

function initials(name) {
  return name.replace(/[·\s]/g, "").slice(0, 2);
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
  state = {
    mode,
    round: 1,
    totalRounds: mode === "dream" ? 4 : 5,
    lineup: Object.fromEntries(positions.map((pos) => [pos, null])),
    currentTeam: null,
    currentEra: null,
    poolLocked: false,
    lockedPoolIds: [],
    selectedPlayer: null,
    teamRerolls: 1,
    eraRerolls: 1,
    usedIds: new Set(),
    usedPersons: new Set(),
    dreamPlayer
  };

  if (dreamPlayer) {
    const slot = dreamPlayer.pos.find((pos) => positions.includes(pos)) ?? dreamPlayer.pos[0];
    state.lineup[slot] = { ...dreamPlayer, lockedDream: true, slot };
    state.usedIds.add(dreamPlayer.id);
    state.usedPersons.add(dreamPlayer.personId);
  }

  activeFilter = "ALL";
  show("draftView");
  renderDraft();
}

function renderDreams() {
  $("dreamGrid").innerHTML = dreamIds
    .map((id) => players.find((player) => player.id === id))
    .filter(Boolean)
    .map((player) => `
      <button class="dream-card" data-dream="${player.id}" type="button">
        <span class="avatar">${initials(player.name)}</span>
        <strong>${player.name}</strong>
        <div class="tags">
          <span class="tag ${rarityClass(player)}">${player.rarity}</span>
          ${player.pos.map((pos) => `<span class="tag">${pos}</span>`).join("")}
          ${player.tags.map((tag) => `<span class="tag tag-soft">${tag}</span>`).join("")}
        </div>
        <small>${player.team} · ${player.era}</small>
        <small class="fact">${player.fact}</small>
      </button>
    `).join("");
}

function renderDraft() {
  $("modeLabel").textContent = state.mode === "dream" ? "圆梦模式" : "普通模式";
  $("roundText").textContent = `第 ${state.round} / ${state.totalRounds} 轮`;
  $("teamText").textContent = state.currentTeam ?? "???";
  $("eraText").textContent = state.currentEra ?? "???";
  $("teamRerollText").textContent = state.teamRerolls;
  $("eraRerollText").textContent = state.eraRerolls;
  $("randomBtn").classList.toggle("hidden", !!state.currentTeam && !!state.currentEra);
  $("lockBtn").classList.toggle("hidden", !state.currentTeam || !state.currentEra || state.poolLocked);
  $("playerSection").classList.toggle("hidden", !state.poolLocked);
  $("roundHint").textContent = state.poolLocked ? "选择球员并放入位置" : "先随机球队和年代";
  $("dreamNote").classList.toggle("hidden", state.mode !== "dream");
  if (state.mode === "dream") {
    $("dreamNote").innerHTML = `圆梦对象：<strong>${state.dreamPlayer.name}</strong>。他会锁定在可用位置，你要为他配齐争冠队友。`;
  }

  renderLineup();
  renderFilters();
  renderPlayers();
}

function renderLineup() {
  $("lineup").innerHTML = positions.map((pos) => {
    const player = state.lineup[pos];
    const canPlace = state.selectedPlayer && state.selectedPlayer.pos.includes(pos) && !player;
    return `<button class="slot ${player ? "filled" : ""} ${canPlace ? "available" : ""}" data-slot="${pos}" type="button">
      <span>${player ? shortName(player.name) : pos}</span>
      <small>${player ? `${player.team} · ${player.era}${player.lockedDream ? " · 圆梦" : ""}` : ""}</small>
    </button>`;
  }).join("");
}

function renderFilters() {
  $("filters").innerHTML = filters.map(([id, label]) => (
    `<button class="${activeFilter === id ? "active" : ""}" data-filter="${id}" type="button">${label}</button>`
  )).join("");
}

function currentPool() {
  if (!state.currentTeam || !state.currentEra) return [];
  if (state.poolLocked && state.lockedPoolIds.length) {
    return state.lockedPoolIds
      .map((id) => players.find((player) => player.id === id))
      .filter(Boolean)
      .filter((player) => !state.usedIds.has(player.id))
      .filter((player) => !state.usedPersons.has(player.personId))
      .filter(hasOpenSlot);
  }
  return viablePlayers();
}

function filterPlayer(player) {
  if (activeFilter === "ALL") return true;
  if (activeFilter === "G") return player.pos.some((pos) => pos === "PG" || pos === "SG");
  if (activeFilter === "F") return player.pos.some((pos) => pos === "SF" || pos === "PF");
  if (activeFilter === "C") return player.pos.includes("C");
  return true;
}

function renderPlayers() {
  if (!state.poolLocked) return;
  const pool = currentPool().filter(filterPlayer);
  if (!pool.length) {
    $("playerList").innerHTML = `<div class="empty">这个位置没有可用球员。<br />可以切换筛选，或者下一局重抽球队年代。</div>`;
    return;
  }
  $("playerList").innerHTML = pool
    .map((player) => `<button class="player-card ${state.selectedPlayer?.id === player.id ? "selected" : ""}" data-player="${player.id}" type="button">
      <div>
        <strong>${player.name}</strong>
        <em>${player.team} · ${player.era}</em>
        <div class="tags">
          <span class="tag ${rarityClass(player)}">${player.rarity}</span>
          ${player.pos.map((pos) => `<span class="tag">${pos}</span>`).join("")}
          ${player.tags.map((tag) => `<span class="tag tag-soft">${tag}</span>`).join("")}
        </div>
        <small class="fact">${player.fact}</small>
      </div>
      <span class="player-rating">${player.overall}</span>
    </button>`)
    .join("");
}

function shortName(name) {
  const nameMap = {
    "克里斯塔普斯波尔津吉斯": "波尔津吉斯",
    "谢伊吉尔杰斯亚历山大": "SGA",
    "维克托文班亚马": "文班亚马",
    "迪肯贝穆托姆博": "穆托姆博",
    "肯塔维厄斯考德威尔波普": "KCP",
    "卡里姆阿卜杜尔贾巴尔": "大天钩",
    "安德烈基里连科": "AK47",
    "泰瑞斯哈利伯顿": "哈利伯顿",
    "弗雷德范弗利特": "范弗利特",
  };
  if (nameMap[name]) return nameMap[name];
  return name
    .replace("詹姆斯", "詹")
    .replace("克里斯", "克")
    .replace("凯文", "凯")
    .replace("德马尔", "德")
    .replace("安托万", "安")
    .replace("安东尼奥", "安")
    .slice(0, 4);
}

function randomize() {
  const pair = pick(richPairs());
  if (!pair) {
    toast("没有可用球员池了，请重开一局");
    return;
  }
  state.currentTeam = pair.team;
  state.currentEra = pair.era;
  state.poolLocked = false;
  state.lockedPoolIds = [];
  state.selectedPlayer = null;
  activeFilter = "ALL";
  renderDraft();
}

function reroll(type) {
  if (state.poolLocked) {
    toast("已经锁定球员池了");
    return;
  }
  if (type === "team") {
    if (state.teamRerolls <= 0) return toast("本轮球队重抽次数用完了");
    state.teamRerolls -= 1;
    const pair = pick(richPairs(viablePairs().filter((item) => item.team !== state.currentTeam && item.era === state.currentEra)));
    if (!pair) return toast("当前年代没有其他可用球队");
    state.currentTeam = pair.team;
  } else {
    if (state.eraRerolls <= 0) return toast("本轮年代重抽次数用完了");
    state.eraRerolls -= 1;
    const pair = pick(richPairs(viablePairs().filter((item) => item.team === state.currentTeam && item.era !== state.currentEra)));
    if (!pair) return toast("当前球队没有其他可用年代");
    state.currentEra = pair.era;
  }
  renderDraft();
}

function lockPool() {
  if (!state.currentTeam || !state.currentEra) return;
  state.poolLocked = true;
  state.lockedPoolIds = shuffled(viablePlayers()).map((player) => player.id);
  state.selectedPlayer = null;
  activeFilter = "ALL";
  renderDraft();
}

function selectPlayer(id) {
  const player = players.find((item) => item.id === id);
  if (!player) return;
  const openSlots = player.pos.filter((pos) => positions.includes(pos) && !state.lineup[pos]);
  if (!openSlots.length) {
    toast("他的可用位置已经满了");
    return;
  }
  state.selectedPlayer = player;
  renderDraft();
}

function placePlayer(slot) {
  if (!state.selectedPlayer) {
    const player = state.lineup[slot];
    if (player && !player.lockedDream) {
      state.usedIds.delete(player.id);
      state.usedPersons.delete(player.personId);
      state.lineup[slot] = null;
      renderDraft();
    }
    return;
  }
  if (state.lineup[slot]) return toast("这个位置已经有人了");
  if (!state.selectedPlayer.pos.includes(slot)) return toast("这个球员不能打这个位置");
  state.lineup[slot] = { ...state.selectedPlayer, slot };
  state.usedIds.add(state.selectedPlayer.id);
  state.usedPersons.add(state.selectedPlayer.personId);
  state.selectedPlayer = null;

  if (Object.values(state.lineup).every(Boolean)) {
    finishSeason();
    return;
  }

  state.round += 1;
  state.currentTeam = null;
  state.currentEra = null;
  state.poolLocked = false;
  state.lockedPoolIds = [];
  state.teamRerolls = 1;
  state.eraRerolls = 1;
  activeFilter = "ALL";
  renderDraft();
}

function lineupList() {
  return positions.map((pos) => state.lineup[pos]).filter(Boolean);
}

function chemistryBonus(roster) {
  let bonus = 0;
  for (let i = 0; i < roster.length; i += 1) {
    for (let j = i + 1; j < roster.length; j += 1) {
      if (roster[i].team === roster[j].team) bonus += 2;
      if (roster[i].era === roster[j].era) bonus += 1;
    }
  }
  return Math.min(10, bonus);
}

function historyChemistry(roster) {
  const ids = new Set(roster.map((player) => player.id));
  const matched = historyLinks.filter((link) => link.ids.every((id) => ids.has(id)));
  return {
    bonus: Math.min(10, matched.reduce((sum, link) => sum + link.bonus, 0)),
    lines: matched.map((link) => link.label).slice(0, 3)
  };
}

function finishSeason() {
  const roster = lineupList();
  const avg = (key) => roster.reduce((sum, p) => sum + p[key], 0) / roster.length;
  const offense = avg("offense");
  const defense = avg("defense");
  const three = avg("three");
  const rebound = avg("rebound");
  const passing = avg("passing");
  const clutch = avg("clutch");
  const durability = avg("durability");
  const usage = roster.reduce((sum, p) => sum + p.usage, 0);
  const spacing = Math.round((three + passing) / 2);
  const ballConflict = Math.max(0, usage - 54);
  const sameTeamEraBonus = chemistryBonus(roster);
  const history = historyChemistry(roster);
  const fit = rosterFit({ roster, offense, defense, three, rebound, passing, durability, ballConflict, sameTeamEraBonus, historyBonus: history.bonus });
  const power = Math.round(
    offense * 0.24 +
    defense * 0.22 +
    three * 0.11 +
    rebound * 0.09 +
    passing * 0.12 +
    clutch * 0.08 +
    durability * 0.06 +
    fit * 0.08 -
    ballConflict * 0.75 +
    rng(-7, 7)
  );
  const wins = seasonWins(power, fit, durability, ballConflict);
  const losses = 82 - wins;
  const playoff = playoffResult({ wins, power, clutch, defense, spacing, durability, ballConflict, fit });
  const dream = state.dreamPlayer;
  const dreamSuccess = !dream || playoff.champion;
  const grade = teamGrade(power, wins, playoff.champion);
  const titleOdds = titleOddsOf({ wins, power, defense, clutch, spacing, durability, ballConflict, fit });
  const report = buildReport({ roster, offense, defense, spacing, rebound, passing, clutch, durability, ballConflict, sameTeamEraBonus, history, fit, wins, losses, playoff, dream, dreamSuccess, grade, titleOdds });

  const result = {
    date: new Date().toLocaleString(),
    mode: state.mode,
    wins,
    losses,
    champion: playoff.champion,
    playoff: playoff.label,
    power,
    grade,
    dream: dream?.name ?? "",
    roster: roster.map((p) => `${p.slot}:${p.name}`).join(" / "),
    report
  };
  saveHistory(result);
  reportCache = report;

  $("resultTitle").textContent = playoff.champion ? "总冠军到手" : playoff.label;
  $("resultCard").innerHTML = `
    <div class="record"><span>常规赛战绩</span><strong>${wins}-${losses}</strong></div>
    <div class="metric-grid">
      <div class="metric"><span>阵容评级</span><strong>${grade}</strong></div>
      <div class="metric"><span>夺冠概率</span><strong>${titleOdds}%</strong></div>
      <div class="metric"><span>进攻</span><strong>${Math.round(offense)}</strong></div>
      <div class="metric"><span>防守</span><strong>${Math.round(defense)}</strong></div>
      <div class="metric"><span>空间</span><strong>${spacing}</strong></div>
      <div class="metric"><span>球权冲突</span><strong>${ballConflict}</strong></div>
      <div class="metric"><span>适配度</span><strong>${fit}</strong></div>
      <div class="metric"><span>历史共鸣</span><strong>${history.bonus}</strong></div>
      <div class="metric"><span>季后赛</span><strong>${playoff.label}</strong></div>
    </div>
    <div class="report">${report.replace(/\n/g, "<br />")}</div>
  `;
  show("resultView");
}

function rosterFit({ roster, offense, defense, three, rebound, passing, durability, ballConflict, sameTeamEraBonus, historyBonus = 0 }) {
  let fit = 62;
  if (passing >= 84) fit += 7;
  if (three >= 84) fit += 7;
  if (defense >= 84) fit += 7;
  if (rebound >= 84) fit += 4;
  if (durability >= 76) fit += 4;
  if (roster.some((p) => p.tags.includes("护框篮板"))) fit += 4;
  if (roster.some((p) => p.tags.includes("组织大师"))) fit += 4;
  const avgPace = roster.reduce((s, p) => s + p.pace, 0) / roster.length;
  if (avgPace >= 76) fit += 3;
  fit += sameTeamEraBonus;
  fit += Math.round(historyBonus * 0.7);
  fit -= Math.max(0, ballConflict - 12) * 1.2;
  if (offense >= 92 && defense < 78) fit -= 6;
  if (three < 72) fit -= 8;
  if (durability < 66) fit -= 7;
  return Math.max(35, Math.min(99, Math.round(fit)));
}

function seasonWins(power, fit, durability, ballConflict) {
  let wins = Math.round((power - 54) * 1.08 + 39 + rng(-5, 5));
  wins += Math.round((fit - 70) * 0.16);
  wins -= Math.round(Math.max(0, ballConflict - 16) * 0.22);
  wins -= durability < 62 ? rng(2, 6) : 0;
  if (wins > 72) wins = 72 + Math.round((wins - 72) * 0.55);
  return Math.max(24, Math.min(82, wins));
}

function playoffResult({ wins, power, clutch, defense, spacing, durability, ballConflict, fit }) {
  const score = power * 0.58 + defense * 0.16 + clutch * 0.14 + spacing * 0.08 + fit * 0.1 - ballConflict * 0.5 + rng(-13, 13);
  if (wins < 42) return { label: "无缘季后赛", champion: false };
  if (score >= 94 && wins >= 62 && durability >= 64) return { label: "夺冠", champion: true };
  if (score >= 88 && wins >= 56 && ballConflict <= 18) return { label: "夺冠", champion: true };
  if (score >= 82 && wins >= 53) return { label: "总决赛", champion: false };
  if (score >= 74 && wins >= 48) return { label: "分区决赛", champion: false };
  return { label: "季后赛首轮", champion: false };
}

function teamGrade(power, wins, champion) {
  const score = power + wins * 0.35 + (champion ? 4 : 0);
  if (score >= 118) return "S+";
  if (score >= 111) return "S";
  if (score >= 104) return "A";
  if (score >= 96) return "B";
  return "C";
}

function titleOddsOf({ wins, power, defense, clutch, spacing, durability, ballConflict, fit }) {
  const raw = (wins - 45) * 1.2 + (power - 80) * 1.1 + (defense - 80) * 0.45 + (clutch - 82) * 0.35 + (spacing - 80) * 0.25 + (fit - 70) * 0.35 - ballConflict * 1.1 + (durability - 70) * 0.18;
  return Math.max(2, Math.min(92, Math.round(raw)));
}

function buildReport(data) {
  const { wins, losses, playoff, dream, dreamSuccess, ballConflict, spacing, fit, grade, titleOdds, history } = data;
  const lineupText = positions.map((pos) => `${pos} ${state.lineup[pos].name}`).join(" / ");
  const strengths = [];
  const risks = [];
  if (spacing >= 86) strengths.push("外线空间优秀");
  if (data.defense >= 88) strengths.push("防守资源够硬");
  if (data.passing >= 88) strengths.push("组织点充足");
  if (data.rebound >= 88) strengths.push("篮板保护稳定");
  if (fit >= 82) strengths.push("阵容适配度高");
  if (ballConflict >= 18) risks.push("球权冲突偏高");
  if (spacing < 76) risks.push("空间不足");
  if (data.defense < 76) risks.push("防守短板明显");
  if (data.durability < 66) risks.push("耐久隐患大");
  if (!strengths.length) strengths.push("核心天赋足够");
  if (!risks.length) risks.push("没有明显致命短板");
  const dreamLine = dream ? `圆梦核心：${dream.name}。${dreamSuccess ? "这次圆梦成功。" : "这次还没能圆梦。"}` : "普通挑战阵容。";
  const historyLine = history?.lines?.length ? `历史共鸣：${history.lines.join("；")}。` : "历史共鸣：本局没有触发经典原队组合，更多靠重新拼装。";
  return `阵容：${lineupText}\n战绩：${wins}胜${losses}负，季后赛结果：${playoff.label}。\n评级：${grade}，赛前夺冠概率约 ${titleOdds}%。\n${dreamLine}\n${historyLine}\n优势：${strengths.join("，")}。\n隐患：${risks.join("，")}。`;
}

function saveHistory(result) {
  const list = JSON.parse(localStorage.getItem("nba-dream-history") || "[]");
  list.push(result);
  list.sort((a, b) => (b.champion - a.champion) || b.wins - a.wins);
  localStorage.setItem("nba-dream-history", JSON.stringify(list.slice(0, 12)));
}

function renderHistory() {
  const list = JSON.parse(localStorage.getItem("nba-dream-history") || "[]");
  $("historyList").innerHTML = list.length
    ? list.map((item) => `<div class="history-item">
      <strong>${item.wins}-${item.losses} ${item.playoff}</strong>
      <p>${item.mode === "dream" ? `圆梦：${item.dream}` : "普通模式"}</p>
      <small>${item.roster}</small>
    </div>`).join("")
    : `<div class="empty">还没有历史记录，先打一局。</div>`;
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

  $("lineup").addEventListener("click", (event) => {
    const button = event.target.closest("[data-slot]");
    if (!button) return;
    placePlayer(button.dataset.slot);
  });
}

bindEvents();
