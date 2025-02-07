// Constructor

class circket {
    constructor(score,wicket,over,target) {
        this.score=score;
        this.wicket=wicket;
        this.over=over;
        this.target=target;
        
    }
    ipl(){
        console.log(`get ${this.score} score\nwe loss ${this.wicket} wicket\ntotel ${this.over} over done\nfocus on the ${this.target} target`);
        
    }
}
const match = new circket("90","8","16","150");
match.ipl();

