/**
 * Created by Parveen on 4/4/2017.
 */

var headerValueObjArr = new Array();
$(document).ready(function() {
    var headerObjArr = new Array();
    //column headers
    for (var i = 0; i < 17; i++) {
        //generate random string for 15 headers
        //headerObjArr.push(Math.random().toString(36).substring(7));
        headerObjArr.push("Column Header " + (i));
    }
    /*for (var i = 0; i < 17; i++) {
        //generate random string for 15 headers
        //headerObjArr.push(Math.random().toString(36).substring(7));
        headerObjArr.push("Column Header " + (i));
    }*/

    for (var j = 0; j < 5; j++) {
        var dataValueObj = new Array();
        //create random column header and their value
        for (var i = 0; i < 17; i++) {
                if(i==0)
                {
                    var htmlCode="<i class='fa fa-youtube-play' style='color: darkred;font-size:18px '></i>"
                    dataValueObj.push(htmlCode);
                }
                else
                {
                    dataValueObj.push("column Header " + (i) + " data row " + j);
                }
            }
       /* for (var i = 0; i < 8; i++) {
            dataValueObj.push("column Header " + (i) + " data row " + j);
        }*/

        headerValueObjArr.push(dataValueObj)
    }
    parseHandleBarTemplateForHeader(headerObjArr);
    parseHandleBarTemplateForHeaderData(headerValueObjArr);
    addEvents();
});

function addEvents()
{
    $(".sortColumn").off("click").on("click", function(event)
    {
        event.preventDefault();
        var colNumber=$(this).attr("colPositionAttr");
        if($(this).find("i.iconColumnHeader").hasClass("fa-sort-desc"))
        {
            $(this).find("i.iconColumnHeader").removeClass("fa-sort-desc");
            $(this).find("i.iconColumnHeader").addClass("fa-sort-asc");
            for(var i=0;i<headerValueObjArr.length;i++)
            {
                headerValueObjArr[i][colNumber]="column Header " +colNumber + " data row " +  (headerValueObjArr.length-1-i) ;
            }
        }
        else {
            $(this).find("i.iconColumnHeader").removeClass("fa-sort-asc");
            $(this).find("i.iconColumnHeader").addClass("fa-sort-desc");
            for(var i=0;i<headerValueObjArr.length;i++)
            {
                headerValueObjArr[i][colNumber]="column Header " +colNumber+ " data row " +  (i) ;
            }
        }
        //inverse as per PV Central
        //headerValueObjArr=headerValueObjArr.reverse();
        parseHandleBarTemplateForHeaderData(headerValueObjArr);

    });
}

function parseHandleBarTemplateForHeader(headerObjArr)
{
    //get the template
    var source   = $("#tableHeaders").html();
    //compile the template
    var template = Handlebars.compile(source);
    var dataObj=new Object();
    dataObj.list=headerObjArr;
    //pass obj in template and add it into div tag
    $("#columnHeaderContainer").append(template(dataObj));
}

function parseHandleBarTemplateForHeaderData(headerValueObjArr)
{
    //get the template
    var source   = $("#tableHeadersValue").html();
    //compile the template
    var template = Handlebars.compile(source);
    var dataObj=new Object();
    dataObj.listData=headerValueObjArr;
    //pass obj in template and add it into div tag
    $("#columnDataContainer").html("");
    $("#columnDataContainer").append(template(dataObj));
}