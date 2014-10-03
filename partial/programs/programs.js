function ProgramsCtrl($scope, data){
this.test = 'Programs';
    this.programs = data.data.programs;

}
app.controller('ProgramsCtrl',ProgramsCtrl);