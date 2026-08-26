function calculate() {

    var total = Number(document.getElementById("total").value);
    var attended = Number(document.getElementById("attended").value);
    var required = Number(document.getElementById("required").value);

    var result = document.getElementById("result");

    if (total <= 0 || attended < 0 || required <= 0 || required > 100) {
        result.innerHTML = "Please enter valid values.";
        return;
    }

    if (attended > total) {
        result.innerHTML = "Attended classes cannot be greater than total classes.";
        return;
    }

    var attendance = (attended / total) * 100;

    var text = "Attendance: " + attendance.toFixed(2) + "%<br>";
    text += "Required: " + required + "%<br>";

    if (attendance >= required) {

        text += "<b>Status: Eligible</b><br>";

        var canMiss = Math.floor(
            attended / (required / 100) - total
        );

        if (canMiss < 0) {
            canMiss = 0;
        }

        text += "Classes you can miss: " + canMiss;

    } else {

        text += "<b>Status: Not Eligible</b><br>";

        if (required == 100) {
            text += "Cannot reach 100% by attending future classes.";
        } else {

            var need = Math.ceil(
                (required / 100 * total - attended) /
                (1 - required / 100)
            );

            text += "Classes you need to attend: " + need;
        }
    }

    result.innerHTML = text;
}
