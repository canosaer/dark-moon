let allRewardExpandDIVS=document.querySelectorAll(".reward__more"),allRewardCollapseDIVS=document.querySelectorAll(".reward__less"),aboutExpandDIV=document.querySelector(".about__more"),aboutCollapseDIV=document.querySelector(".about__less"),allUpdateExpandDIVS=document.querySelectorAll(".updates__more"),allUpdateCollapseDIVS=document.querySelectorAll(".updates__less");class RewardExpander{element=null;constructor(e){this.element=e,this.rewardBox=e.parentNode,this.setup()}setup(){this.handleClick=e=>{this.rewardBox.style.maxHeight="100rem",this.element.style.opacity="0",setTimeout((()=>{this.element.style.display="none"}),300)},this.element.addEventListener("click",this.handleClick)}}class RewardCollapser{element=null;constructor(e){this.element=e,this.rewardBox=e.parentNode,this.moreDIV=this.rewardBox.querySelector(".reward__more"),this.setup()}setup(){this.handleClick=e=>{this.rewardBox.style.maxHeight="28rem",this.moreDIV.style.display="flex",setTimeout((()=>{this.moreDIV.style.opacity="1"}),300)},this.element.addEventListener("click",this.handleClick)}}class AboutExpander{element=null;constructor(e){this.element=e,this.aboutBox=e.parentNode,this.setup()}setup(){this.handleClick=e=>{this.aboutBox.style.maxHeight="300rem",this.element.style.opacity="0",setTimeout((()=>{this.element.style.display="none"}),300)},this.element.addEventListener("click",this.handleClick)}}class AboutCollapser{element=null;constructor(e){this.element=e,this.aboutBox=e.parentNode,this.aboutExpandDIV=aboutExpandDIV,this.setup()}setup(){this.handleClick=e=>{this.aboutBox.style.maxHeight="14rem",this.aboutExpandDIV.style.display="flex",setTimeout((()=>{this.aboutExpandDIV.style.opacity="1"}),300)},this.element.addEventListener("click",this.handleClick)}}class UpdateExpander{element=null;constructor(e){this.element=e,this.updateBox=e.parentNode,this.setup()}setup(){this.handleClick=e=>{this.updateBox.style.maxHeight="300rem",this.element.style.opacity="0",setTimeout((()=>{this.element.style.display="none"}),300)},this.element.addEventListener("click",this.handleClick)}}class UpdateCollapser{element=null;constructor(e){this.element=e,this.updateBox=e.parentNode,this.moreDIV=this.updateBox.querySelector(".updates__more"),this.setup()}setup(){this.handleClick=e=>{this.updateBox.style.maxHeight="29rem",this.moreDIV.style.display="flex",setTimeout((()=>{this.moreDIV.style.opacity="1"}),300)},this.element.addEventListener("click",this.handleClick)}}allRewardExpandDIVS.forEach((e=>{new RewardExpander(e)})),allRewardCollapseDIVS.forEach((e=>{new RewardCollapser(e)}));const aboutExpand=new AboutExpander(aboutExpandDIV),aboutCollapse=new AboutCollapser(aboutCollapseDIV);allUpdateExpandDIVS.forEach((e=>{new UpdateExpander(e)})),allUpdateCollapseDIVS.forEach((e=>{new UpdateCollapser(e)}));
//# sourceMappingURL=main.js.map