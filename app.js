function filter_table(This, table_id)
{
    let recordLists = document.querySelectorAll(`#${table_id}>*`);
    if(recordLists)
    {
        hide_tr(recordLists);
        recordLists.forEach(recordList=>{
            let str   = recordList.innerText.toLowerCase(),
                value = This.value.toLowerCase();

            if(str.indexOf(value)>=0)
            {
                recordList.style.display = '';
            }
        });
    }
}


function hide_tr(recordLists) {
    recordLists.forEach(recordList=>{
        recordList.style.display = 'none';
    });
}