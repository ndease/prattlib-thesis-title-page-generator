window.jsPDF = window.jspdf.jsPDF;

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
pageOrientation = document.querySelector("#page-orientation").value;

if (pageOrientation == "portrait"){
textPlacement = 4.25
}
else {
  textPlacement = 5.5
}

if (document.querySelector("#last-semester").value == "February"){
gradYear= parseInt(gradYear,10)+1;
}

var doc = new jsPDF({
  orientation: pageOrientation,
  unit: "in",
  format: [8.5, 11]
});

doc.setFont("times", "normal");
doc.setFontSize(12);
doc.text(thesisTitle, textPlacement, 2,{ maxWidth: 6.5, align:'center'});
doc.text("by", textPlacement, 2.75,'center');
doc.text(studentFirst+" "+studentMiddle+" "+studentLast, textPlacement, 3,'center');
doc.text("© "+gradYear+" "+studentFirst+" "+studentMiddle+" "+studentLast, textPlacement, 4,'center');
doc.text("A"+" "+capstoneDoc+" "+"submitted in partial fulfillment of the requirements for the degree of "+gradProgram, textPlacement, 6,{ maxWidth: 4, align:'center'});
doc.text("Pratt Institute", textPlacement, 7,{ maxWidth: 4, align:'center'});
doc.text(gradSemester+" "+gradYear, textPlacement, 7.25,{ maxWidth: 4, align:'center'});
doc.addPage("letter", pageOrientation);
doc.text(thesisTitle, textPlacement, 2,{ maxWidth: 6.5, align:'center'});
doc.text("by", textPlacement, 2.75,'center');
doc.text(studentFirst+" "+studentMiddle+" "+studentLast, textPlacement, 3,'center');
doc.text("Received and approved:", textPlacement, 4,{ maxWidth: 4, align:'center'});
doc.text("Chairperson: "+chairFirst+" "+chairMiddle+" "+chairLast, textPlacement, 5,'center');

if (advisorFirst1.length > 0){
doc.text("Advisor: "+advisorFirst1+" "+advisorMiddle1+" "+advisorLast1, textPlacement, 5.25,'center');
}
if (advisorFirst2.length >0){
doc.text("Advisor: "+advisorFirst2+" "+advisorMiddle2+" "+advisorLast2, textPlacement, 5.5,'center');
}
if (advisorFirst3.length>0){
doc.text("Advisor: "+advisorFirst3+" "+advisorMiddle3+" "+advisorLast3, textPlacement, 5.75,'center');
}
doc.save(studentLast+"-thesis-title-page.pdf");
}

document.getElementById('thesisGenerator').addEventListener('submit', savePDF);
