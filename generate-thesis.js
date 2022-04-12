window.jsPDF = window.jspdf.jsPDF;
var thesisTitle;
var studentLast;
var studentFirst;
var studentMiddle;
var gradYear;
var gradSemester;
var gradProgram;
var chairFirst;
var chairMiddle;
var chairLast;
var advisorLast1;
var advisorMiddle1;
var advisorFirst1 = "";
var advisorLast2;
var advisorMiddle2;
var advisorFirst2;
var advisorLast3;
var advisorMiddle3;
var advisorFirst3;

var doc = new jsPDF({
  orientation: "portrait",
  unit: "in",
  format: [8.5, 11]
});

function savePDF(event){

thesisTitle = document.querySelector("#thesis-title").value;
studentFirst = document.querySelector("#first-name").value;
studentMiddle = document.querySelector("#middle-name").value;
studentLast = document.querySelector("#last-name").value;
gradSemester = document.querySelector("#last-semester").value;
gradYear = document.querySelector("#grad-year").value;
gradProgram = document.querySelector("#grad-program").value;
capstoneDoc = document.querySelector("#doc-question").value;
chairFirst = document.querySelector("#chair-first-name").value;
chairMiddle = document.querySelector("#chair-middle-name").value;
chairLast = document.querySelector("#chair-last-name").value;
advisorLast1 = document.querySelector("#advisor-1-last-name").value;
advisorMiddle1 = document.querySelector("#advisor-1-middle-name").value;
advisorFirst1 = document.querySelector("#advisor-1-first-name").value;
advisorLast2 = document.querySelector("#advisor-2-last-name").value;
advisorMiddle2 = document.querySelector("#advisor-2-middle-name").value;
advisorFirst2 = document.querySelector("#advisor-2-first-name").value;
advisorLast3 = document.querySelector("#advisor-3-last-name").value;
advisorMiddle3 = document.querySelector("#advisor-3-middle-name").value;
advisorFirst3 = document.querySelector("#advisor-3-first-name").value;
if (document.querySelector("#last-semester").value == "February"){
gradYear= parseInt(gradYear,10)+1;
}
doc.setFont("times", "normal");
doc.setFontSize(12);
doc.text(thesisTitle, 4.25, 2,{ maxWidth: 6.5, align:'center'});
doc.text("by", 4.25, 2.75,'center');
doc.text(studentFirst+" "+studentMiddle+" "+studentLast, 4.25, 3,'center');
doc.text("© "+gradYear+" "+studentFirst+" "+studentMiddle+" "+studentLast, 4.25, 4,'center');
doc.text("A"+" "+capstoneDoc+" "+"submitted in partial fulfillment of the requirements for the degree of "+gradProgram, 4.25, 6,{ maxWidth: 4, align:'center'});
doc.text("Pratt Institute", 4.25, 7,{ maxWidth: 4, align:'center'});
doc.text(gradSemester+" "+gradYear, 4.25, 7.25,{ maxWidth: 4, align:'center'});
doc.addPage("letter", "p");
doc.text(thesisTitle, 4.25, 2,{ maxWidth: 6.5, align:'center'});
doc.text("by", 4.25, 2.75,'center');
doc.text(studentFirst+" "+studentMiddle+" "+studentLast, 4.25, 3,'center');
doc.text("Received and approved:", 4.25, 6,{ maxWidth: 4, align:'center'});
doc.text("Chairperson: "+chairFirst+" "+chairMiddle+" "+chairLast, 4.25, 8.25,'center');

if (advisorFirst1.length > 0){
doc.text("Advisor: "+advisorFirst1+" "+advisorMiddle1+" "+advisorLast1, 4.25, 8.5,'center');
}
if (advisorFirst2.length >0){
doc.text("Advisor: "+advisorFirst2+" "+advisorMiddle2+" "+advisorLast2, 4.25, 8.75,'center');
}
if (advisorFirst3.length>0){
doc.text("Advisor: "+advisorFirst3+" "+advisorMiddle3+" "+advisorLast3, 4.25, 9,'center');
}
doc.save(studentLast+"-thesis-title-page.pdf");
doc = new jsPDF({
  orientation: "portrait",
  unit: "in",
  format: [8.5, 11]
});
}

document.getElementById('thesisGenerator').addEventListener('submit', savePDF);
