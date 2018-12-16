USE databank;
CREATE TABLE noun(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  info    VARCHAR(512),
  url_img VARCHAR(256),
  title   VARCHAR(128)
);
INSERT INTO noun VALUES(null,'<h3 class="editable-click" ><span >未来智慧生活独创一种新的生活方式，</span></h3><h3 class="editable-click" >
<span >在家庭场景功能融合、增值服务挖掘的指导思想下，采用主流的互联网通信渠道，</span></h3>
<h3 class="editable-click" ><span >配合丰富的智能家居产品终端，</span></h3>
<h3 class="editable-click" ><span >构建享受智能家居控制系统带来的新的生活方式，</span>
<span >多方位，多角度的呈现家庭生活中的更舒适，</span></h3><h3 class="editable-click" >
<span >更方便，更安全和更健康的具体场景，进而共同打造出具备共同智能生活理念的智能社区</span>
</h3>','images/1532496893115729.jpg','<h2>智慧生活</h2><p>Wisdom life</p>');
INSERT INTO noun VALUES(null,'<h3 class="editable-click"><span>未来智慧办公利用云计算技术对办公业务所需的软硬件设备进行智能化管理，</span></h3><h3 class="editable-click" ><span>实现企业应用软件统一部署与交付的新型办公模式。</span></h3>','images/1532496960979188.jpg','<h2>智慧办公</h2><p>Intelligent office</p>');
INSERT INTO noun VALUES(null,'<h3 class="editable-click"><span>未来智慧酒店拥有一套完善的智能化体系，</span></h3><h3 class="editable-click"><span>通过数字化与网络化实现酒店数字信息化服务技术</span></h3>','images/1532497070277985.jpg','<h2>智慧酒店</h2><p>Wisdom Hotel</p>');
INSERT INTO noun VALUES(null,'<h3 class="editable-click"><span>未来智慧教育在教育领域（教育管理、教育教学和教育科研）全面深入地运用现代信息技术来促进教育改革与发展。</span></h3>
<h3 class="editable-click"><span>其技术特点是数字化、网络化、智能化和多媒体化，基本特征是开放、共享、交互、协作。</span></h3><h3 class="editable-click"><span>以教育信息化促进教育现代化，用信息技术改变传统模式。</span></h3>','images/1532497122281987.jpg','<h2>智慧教育</h2><p>Wisdom Education</p>');
INSERT INTO noun VALUES(null,'<h3 class="editable-click"><span>未来智慧养老是面向居家老人、</span></h3>
<h3 class="editable-click"><span>社区及养老机构的传感网系统与信息平台，</span></h3>
<h3 class="editable-click"><span>并在此基础上提供实时、快捷、高效、低成本的，物联化、互联化、智能化的养老服务。</span></h3>','images/1532497164355227.jpg','<h2>智慧养老</h2><p>Wisdom for the aged</p>');
