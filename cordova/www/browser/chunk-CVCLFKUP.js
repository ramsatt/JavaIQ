import{a as y,b as C,c as E}from"./chunk-5NK5W44O.js";import{Gb as m,Ib as S,Pa as o,Qb as f,Tb as e,Ub as x,Vb as g,ab as u,na as c,ob as h,qb as b,rb as v,sb as r,tb as n,ub as t,vb as a}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";function w(p,l){if(p&1&&(n(0,"div",11)(1,"span",38),e(2),t(),n(3,"div",39),e(4),t()()),p&2){let s=l.$implicit,i=l.$index,d=S();o(2),g("idx:",i),o(),f("viz-active",i===d.currentIdx()&&!d.loopDone())("viz-processed",i<d.currentIdx()||d.loopDone()),o(),g(" ",s," ")}}var _=class p{loopArray=[10,25,8,42,3];currentIdx=c(0);runningSum=c(0);loopDone=c(!1);isAnimating=c(!1);loopStatus=c('Click "Step" to advance the loop one iteration at a time.');stepLoop(){let l=this.currentIdx();if(l>=this.loopArray.length){this.loopDone.set(!0);return}let s=this.loopArray[l];this.runningSum.update(i=>i+s),this.loopStatus.set(`Iteration ${l+1}: sum += ${s} \u2192 sum = ${this.runningSum()}`),this.currentIdx.update(i=>i+1),this.currentIdx()>=this.loopArray.length&&(this.loopDone.set(!0),this.loopStatus.set(`Loop complete! Final sum = ${this.runningSum()}`))}async runLoop(){if(!(this.isAnimating()||this.loopDone())){for(this.isAnimating.set(!0);!this.loopDone();)this.stepLoop(),await new Promise(l=>setTimeout(l,700));this.isAnimating.set(!1)}}resetLoop(){this.currentIdx.set(0),this.runningSum.set(0),this.loopDone.set(!1),this.isAnimating.set(!1),this.loopStatus.set('Click "Step" to advance the loop one iteration at a time.')}codeFor=`// Basic for loop
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// Counting down
for (int i = 10; i >= 0; i--) {
    System.out.println(i);
}

// Multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i=" + i + " j=" + j);
}

// Infinite loop (needs a break inside)
for (;;) {
    if (doneCondition) break;
}`;codeWhile=`// while \u2014 condition first
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// Reading until sentinel
int n;
while ((n = readInt()) != -1) {
    process(n);
}`;codeDoWhile=`// do-while \u2014 body executes at least once
int choice;
do {
    System.out.println("1. Start");
    System.out.println("2. Quit");
    choice = scanner.nextInt();
} while (choice != 2);

// Input validation
int age;
do {
    System.out.print("Enter age (1-120): ");
    age = scanner.nextInt();
} while (age < 1 || age > 120);`;codeForEach=`// Array for-each
int[] scores = {95, 87, 72, 88, 91};
int sum = 0;
for (int score : scores) {
    sum += score;
}

// Collection for-each
List<String> names = List.of("Alice", "Bob", "Charlie");
for (String name : names) {
    System.out.println("Hello, " + name);
}

// \u274C Wrong \u2014 ConcurrentModificationException!
for (String name : names) {
    if (name.startsWith("A")) names.remove(name); // throws!
}

// \u2705 Correct \u2014 use removeIf
names.removeIf(name -> name.startsWith("A"));`;codeBreakContinue=`// break \u2014 exit loop immediately
for (int i = 0; i < 10; i++) {
    if (i == 5) break; // stops at 5
    System.out.print(i + " "); // 0 1 2 3 4
}

// continue \u2014 skip to next iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue; // skip evens
    System.out.print(i + " "); // 1 3 5 7 9
}

// Labeled break \u2014 exit outer loop from inner
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break outer; // exits both loops
        System.out.print(i + "" + j + " ");
    }
}
// Output: 00 01 02 10`;static \u0275fac=function(s){return new(s||p)};static \u0275cmp=u({type:p,selectors:[["app-topic-loops"]],decls:217,vars:24,consts:[["title","Loops & Iteration","subtitle","Repeat, iterate, and control \u2014 master all loop forms in Java and know exactly when to use each one.","badge","CORE JAVA","gradient","linear-gradient(135deg, #064e3b, #10b981)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-green",3,"size"],[1,"viz-desc"],[1,"viz-array"],[1,"viz-cell"],[1,"loop-state"],[1,"state-item"],[1,"state-label"],[1,"state-val"],[1,"state-val","green"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-green",3,"click","disabled"],["name","arrow-right",3,"size"],[1,"btn","btn-gold",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-outline",3,"click"],["name","refresh-cw",3,"size"],["name","code","css","icon-green",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"op-desc"],["name","list","css","icon-green",3,"size"],["name","arrow-right","css","icon-green",3,"size"],["name","briefcase","css","icon-green",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"],[1,"viz-idx"],[1,"viz-box"]],template:function(s,i){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),e(4," The for Loop "),t(),n(5,"div",4)(6,"p"),e(7,"The "),n(8,"code"),e(9,"for"),t(),e(10," loop is best when you know the "),n(11,"strong"),e(12,"exact number of iterations"),t(),e(13," upfront. Its three parts \u2014 init, condition, update \u2014 are all in one line."),t(),n(14,"ul")(15,"li")(16,"strong"),e(17,"Init"),t(),e(18,": Runs once before the loop starts. Declares the loop variable."),t(),n(19,"li")(20,"strong"),e(21,"Condition"),t(),e(22,": Checked before each iteration. Loop exits when "),n(23,"code"),e(24,"false"),t(),e(25,"."),t(),n(26,"li")(27,"strong"),e(28,"Update"),t(),e(29,": Runs after each iteration body. Usually increments/decrements."),t()(),a(30,"app-code-block",5),t()(),n(31,"section",1)(32,"div",6)(33,"h3",7),a(34,"app-icon",8),e(35," Loop Step Visualizer "),t(),n(36,"p",9),e(37,"Step through a "),n(38,"code"),e(39,"for"),t(),e(40," loop summing array elements. Watch the index advance and the sum accumulate."),t(),n(41,"div",10),b(42,w,5,6,"div",11,h),t(),n(44,"div",12)(45,"div",13)(46,"span",14),e(47,"i"),t(),n(48,"span",15),e(49),t()(),n(50,"div",13)(51,"span",14),e(52,"sum"),t(),n(53,"span",16),e(54),t()(),n(55,"div",13)(56,"span",14),e(57,"condition"),t(),n(58,"span",15),e(59),t()()(),n(60,"div",17),e(61),t(),n(62,"div",18)(63,"button",19),m("click",function(){return i.stepLoop()}),a(64,"app-icon",20),e(65," Step (i++) "),t(),n(66,"button",21),m("click",function(){return i.runLoop()}),a(67,"app-icon",22),e(68," Run All "),t(),n(69,"button",23),m("click",function(){return i.resetLoop()}),a(70,"app-icon",24),e(71," Reset "),t()()()(),n(72,"section",1)(73,"h2",2),a(74,"app-icon",25),e(75," while & do-while "),t(),n(76,"div",26)(77,"div",27)(78,"h3",28),e(79,"while Loop"),t(),n(80,"p",29),e(81,"Condition is checked "),n(82,"strong"),e(83,"before"),t(),e(84," each iteration. The body may execute "),n(85,"strong"),e(86,"zero times"),t(),e(87,' if the condition starts false. Best for: "repeat while unknown condition holds."'),t(),a(88,"app-code-block",5),t(),n(89,"div",27)(90,"h3",28),e(91,"do-while Loop"),t(),n(92,"p",29),e(93,"Condition is checked "),n(94,"strong"),e(95,"after"),t(),e(96," each iteration. The body always executes "),n(97,"strong"),e(98,"at least once"),t(),e(99,". Best for: menu prompts, input validation \u2014 where you need at least one attempt."),t(),a(100,"app-code-block",5),t()()(),n(101,"section",1)(102,"h2",2),a(103,"app-icon",30),e(104," Enhanced for-each Loop "),t(),n(105,"div",4)(106,"p"),e(107," The enhanced "),n(108,"code"),e(109,"for"),t(),e(110," loop works on any array or "),n(111,"code"),e(112,"Iterable"),t(),e(113," (List, Set, etc.). It's cleaner when you don't need the index. "),t(),n(114,"ul")(115,"li")(116,"strong"),e(117,"Cannot modify the index"),t(),e(118," \u2014 no "),n(119,"code"),e(120,"i++"),t(),e(121," skip."),t(),n(122,"li")(123,"strong"),e(124,"Cannot remove elements"),t(),e(125," safely \u2014 use "),n(126,"code"),e(127,"Iterator.remove()"),t(),e(128," or "),n(129,"code"),e(130,"removeIf()"),t(),e(131," instead."),t(),n(132,"li")(133,"strong"),e(134,"Cannot iterate in reverse"),t(),e(135," \u2014 use a classic "),n(136,"code"),e(137,"for"),t(),e(138," with "),n(139,"code"),e(140,"i--"),t(),e(141,"."),t()(),a(142,"app-code-block",5),t()(),n(143,"section",1)(144,"h2",2),a(145,"app-icon",31),e(146," break, continue & Labeled Loops "),t(),n(147,"div",4)(148,"p")(149,"code"),e(150,"break"),t(),e(151," exits the current loop entirely. "),n(152,"code"),e(153,"continue"),t(),e(154," skips the rest of the current iteration and moves to the next. Labels let you target an outer loop from an inner one. "),t(),a(155,"app-code-block",5),t()(),n(156,"section",1)(157,"h2",2),a(158,"app-icon",32),e(159," Interview Tips "),t(),n(160,"div",33)(161,"div",34)(162,"div",35),e(163,"1"),t(),n(164,"div")(165,"h4",36),e(166,"Choosing the Right Loop"),t(),n(167,"p",37),e(168,"Use "),n(169,"code"),e(170,"for"),t(),e(171," when count is known, "),n(172,"code"),e(173,"while"),t(),e(174," when count depends on a condition, "),n(175,"code"),e(176,"do-while"),t(),e(177," when at least one execution is needed, "),n(178,"code"),e(179,"for-each"),t(),e(180," when iterating a collection without needing the index."),t()()(),n(181,"div",34)(182,"div",35),e(183,"2"),t(),n(184,"div")(185,"h4",36),e(186,"ConcurrentModificationException with for-each"),t(),n(187,"p",37),e(188,"Never call "),n(189,"code"),e(190,"list.remove()"),t(),e(191," inside a "),n(192,"code"),e(193,"for-each"),t(),e(194,". Use "),n(195,"code"),e(196,"list.removeIf(predicate)"),t(),e(197," or iterate with an explicit "),n(198,"code"),e(199,"Iterator"),t(),e(200," and call "),n(201,"code"),e(202,"iterator.remove()"),t(),e(203,"."),t()()(),n(204,"div",34)(205,"div",35),e(206,"3"),t(),n(207,"div")(208,"h4",36),e(209,"Infinite Loops Are Sometimes Intentional"),t(),n(210,"p",37)(211,"code"),e(212,"while (true) { ... break; }"),t(),e(213," and "),n(214,"code"),e(215,"for (;;) { ... }"),t(),e(216," are valid patterns for servers, event loops, and game loops \u2014 as long as there's a clear exit condition."),t()()()()()()),s&2&&(o(3),r("size",28),o(27),r("code",i.codeFor),o(4),r("size",22),o(8),v(i.loopArray),o(7),x(i.currentIdx()>=i.loopArray.length?i.loopArray.length:i.currentIdx()),o(5),x(i.runningSum()),o(4),f("cond-true",!i.loopDone())("cond-false",i.loopDone()),o(),g(" ",i.loopDone()?"i < 5 \u2192 false":"i < 5 \u2192 true"," "),o(2),x(i.loopStatus()),o(2),r("disabled",i.loopDone()),o(),r("size",16),o(2),r("disabled",i.loopDone()||i.isAnimating()),o(),r("size",16),o(3),r("size",16),o(4),r("size",28),o(14),r("code",i.codeWhile),o(12),r("code",i.codeDoWhile),o(3),r("size",28),o(39),r("code",i.codeForEach),o(3),r("size",28),o(10),r("code",i.codeBreakContinue),o(3),r("size",28))},dependencies:[y,C,E],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-green[_ngcontent-%COMP%]{color:#059669}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#d1fae5;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#065f46}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:20px;border:1px solid #D6DDD2;box-shadow:0 4px 16px #0000000a;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#1b1b1b;margin:0 0 8px}.viz-desc[_ngcontent-%COMP%]{font-size:.85rem;color:#52665a;margin:0 0 20px;line-height:1.6}.viz-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#d1fae5;padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#065f46}.viz-array[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-bottom:20px;flex-wrap:wrap}.viz-cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.viz-idx[_ngcontent-%COMP%]{font-size:.6rem;color:#8a9b8f;margin-bottom:4px;font-family:JetBrains Mono,monospace;font-weight:600}.viz-box[_ngcontent-%COMP%]{width:52px;height:52px;display:flex;align-items:center;justify-content:center;border-radius:14px;font-size:1.1rem;font-weight:800;background:#f1f5f9;color:#64748b;border:2px solid #e2e8f0;transition:all .3s cubic-bezier(.4,0,.2,1)}.viz-box.viz-active[_ngcontent-%COMP%]{background:#059669;color:#fff;border-color:#059669;transform:scale(1.12);box-shadow:0 4px 12px #0596694d}.viz-box.viz-processed[_ngcontent-%COMP%]{background:#d1fae5;color:#065f46;border-color:#6ee7b7}.loop-state[_ngcontent-%COMP%]{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}.state-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:10px 16px}.state-label[_ngcontent-%COMP%]{font-size:.65rem;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em}.state-val[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:1rem;font-weight:900;color:#1b1b1b}.state-val.green[_ngcontent-%COMP%]{color:#059669}.state-val.cond-true[_ngcontent-%COMP%]{color:#059669;font-size:.78rem}.state-val.cond-false[_ngcontent-%COMP%]{color:#dc2626;font-size:.78rem}.viz-status[_ngcontent-%COMP%]{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#065f46;font-weight:600;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:12px;font-size:.8rem;font-weight:700;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-green[_ngcontent-%COMP%]{background:#059669;color:#fff}.btn-green[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 4px 12px #0596694d}.btn-gold[_ngcontent-%COMP%]{background:#daa520;color:#081c15}.btn-gold[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 4px 12px #daa52033}.btn-outline[_ngcontent-%COMP%]{background:#fff;color:#52665a;border:1px solid #D6DDD2}.btn-outline[_ngcontent-%COMP%]:hover{background:#f5f7f2}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:16px;border:1px solid #D6DDD2;transition:all .2s}.op-card[_ngcontent-%COMP%]:hover{border-color:#6ee7b7;box-shadow:0 4px 12px #0596690f}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0 0 12px}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff;transition:all .2s}.tip-card[_ngcontent-%COMP%]:hover{border-color:#6ee7b7;box-shadow:0 4px 12px #0596690f}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#059669;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#d1fae5;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#065f46}"],changeDetection:0})};export{_ as LoopsComponent};
