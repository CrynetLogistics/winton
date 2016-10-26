function getTradeBox(commodity, id) {
    return '<div class="row tradebox">' +
    '' +
    '    <div class="row">' +
    '        <div style="font-size:40px;padding:10px 0px 0px 50px" class="col-sm-7">' + commodity +
    '        </div>' +
    '' +
    '        <strong class="qtyString text-center col-sm-2" style="padding:34px 0px 10px 0px">QTY:</strong>' +
    '' +
    '        <div class="dropdown col-sm-3 text-right" style="padding:30px 44px 0px 0px">' +
    '            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">10' +
    '                <span class="caret"></span></button>' +
    '            <ul class="dropdown-menu">' +
    '                <li><a href="#">20</a></li>' +
    '                <li><a href="#">50</a></li>' +
    '                <li><a href="#">100</a></li>' +
    '            </ul>' +
    '        </div>' +
    '    </div>' +
    '' +
    '' +
    '' +
    '    <div class="row">' +
    '        <div class="col-sm-6 text-center">' +
    '            <div id="sell' + id + 'Value"></div>' +
    '            <button type="button" class="btn btn-secondary sellButton" id="sell' + id + 'Button">Sell me (｡•́︿•̀｡)</button>' +
    '' +
    '        </div>' +
    '        <div class="col-sm-6 text-center">' +
    '            <div id="buy' + id + 'Value"></div>' +
    '            <button type="button" class="btn btn-secondary buyButton" id="buy' + id + 'Button">Buy me (◞⁎˃ᆺ˂)◞*✰</button>' +
    '' +
    '        </div>' +
    '    </div>' +
    '' +
    '    <br>' +
    '' +
    '</div>' +
    '<br>';
}
