var mainApp = angular.module("calendarApp", []);

mainApp.controller("calendarController", function ($scope) {
    $scope.number = 5;
    $scope.getNumber = function (num) {
        return new Array(num);
    }
    $scope.calendar = {};
    $scope.calendar.currentDate = new Date();
    $scope.calendar.selectedDate = $scope.calendar.currentDate;
    $scope.calendar.weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    $scope.calendar.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $scope.calendar.getDay = function () {
        return $scope.calendar.weekdays[$scope.calendar.currentDate.getDay() - 1];
    };
    $scope.calendar.getSelectedMonth = function () {
        return $scope.calendar.months[$scope.calendar.currentDate.getMonth()];
    };
    $scope.calendar.getSelectedYear = function () {
        return $scope.calendar.selectedDate.getFullYear();
    };
    $scope.calendar.getDaysInSelectedMonth = function () {
        return new Date($scope.calendar.selectedDate.getFullYear(), $scope.calendar.selectedDate.getMonth() + 1, 0).getDate();
    };
    $scope.calendar.weeksInSelectedMonth = function () {
        
        var weeks = [];
        var week = [];
        var daysInMonth = $scope.calendar.getDaysInSelectedMonth();
        console.log(daysInMonth);
        var startDay = new Date($scope.calendar.selectedDate.getFullYear(), $scope.calendar.selectedDate.getMonth(), 0).getDay();
        var count = 0;
        var currentDay = 1;
        while (count < 42) {
            for (i = 0; i < 7; i++) {
                if (startDay != 0 || daysInMonth <= 0) {
                    week.push("");
                    startDay--;
                    count++;
                }
                else {

                    week.push(currentDay);
                    daysInMonth--;
                    currentDay++;
                    count++;
                }
            }
            weeks.push(week);
            week = [];
        }
        console.log(weeks);
        return weeks;
    }
    $scope.calendar.weeks = $scope.calendar.weeksInSelectedMonth();
    $scope.calendar.back = function () {
        $scope.calendar.selectedDate.setMonth($scope.calendar.selectedDate.getMonth() - 1);
        $scope.calendar.weeks = $scope.calendar.weeksInSelectedMonth();
    }

    $scope.calendar.next = function () {
        $scope.calendar.selectedDate.setMonth($scope.calendar.selectedDate.getMonth() + 1);
        $scope.calendar.weeks = $scope.calendar.weeksInSelectedMonth();
    }
}); 