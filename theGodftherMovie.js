async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`


	THE GODFATHER
	_____________

	Screenplay

	by

	MARIO PUZO

	and

	FRANCIS FORD COPPOLA



















THIRD DRAFT				PARAMOUNT PICTURES
					1 Gulf and Western Plaza
March 29, 1971				New York, New York 10019





	INT DAY: DON'S OFFICE (SUMMER 1945)

	The PARAMOUNT Logo is presented austerely over a black
	background.  There is a moment's hesitation, and then the
	simple words in white lettering:

				  THE GODFATHER

	While this remains, we hear: "I believe in America."
	Suddenly we are watching in CLOSE VIEW, AMERIGO BONASERA, a
	man of sixty, dressed in a black suit, on the verge of great
	emotion.

				BONASERA
		America has made my fortune.

	As he speaks, THE VIEW imperceptibly begins to loosen.

				BONASERA
		I raised my daughter in the American
		fashion; I gave her freedom, but
		taught her never to dishonor her
		family.  She found a boy friend,
		not an Italian.  She went to the
		movies with him, stayed out late.
		Two months ago he took her for a
		drive, with another boy friend.
		They made her drink whiskey and
		then they tried to take advantage
		of her.  She resisted; she kept her
		honor.  So they beat her like an
		animal.  When I went to the hospital
		her nose was broken, her jaw was
		shattered and held together by
		wire, and she could not even weep
		because of the pain.

	He can barely speak; he is weeping now.

				BONASERA
		I went to the Police like a good
		American.  These two boys were
		arrested and brought to trial.  The
		judge sentenced them to three years
		in prison, and suspended the
		sentence.  Suspended sentence!
		They went free that very day.  I
		stood in the courtroom like a fool,
		and those bastards, they smiled at
		me.  Then I said to my wife, for
		Justice, we must go to The Godfather.

	By now, THE VIEW is full, and we see Don Corleone's office
	in his home.

	The blinds are closed, and so the room is dark, and with
	patterned shadows.  We are watching BONASERA over the
	shoulder of DON CORLEONE.  TOM HAGEN sits near a small
	table, examining some paperwork, and SONNY CORLEONE stands
	impatiently by the window nearest his father, sipping from a
	glass of wine.  We can HEAR music, and the laughter and
	voices of many people outside.

				DON CORLEONE
		Bonasera, we know each other for
		years, but this is the first time
		you come to me for help.  I don't
		remember the last time you invited
		me to your house for coffee...even
		though our wives are friends.

				BONASERA
		What do you want of me?  I'll give
		you anything you want, but do what
		I ask!

				DON CORLEONE
		And what is that Bonasera?

	BONASERA whispers into the DON's ear.

				DON CORLEONE
		No.  You ask for too much.

				BONASERA
		I ask for Justice.

				DON CORLEONE
		The Court gave you justice.

				BONASERA
		An eye for an eye!

				DON CORLEONE
		But your daughter is still alive.

				BONASERA
		Then make them suffer as she
		suffers.  How much shall I pay you.

	Both HAGEN and SONNY react.

				DON CORLEONE
		You never think to protect yourself
		with real friends.  You think it's
		enough to be an American.  All
		right, the Police protects you,
		there are Courts of Law, so you
		don't need a friend like me.
		But now you come to me and say Don
		Corleone, you must give me justice.
		And you don't ask in respect or
		friendship.  And you don't think to
		call me Godfather; instead you come
		to my house on the day my daughter
		is to be married and you ask me to
		do murder...for money.

				BONASERA
		America has been good to me...

				DON CORLEONE
		Then take the justice from the
		judge, the bitter with the sweet,
		Bonasera.  But if you come to me
		with your friendship, your loyalty,
		then your enemies become my enemies,
		and then, believe me, they would
		fear you...

	Slowly, Bonasera bows his head and murmurs.

				BONASERA
		Be my friend.

				DON CORLEONE
		Good.  From me you'll get Justice.

				BONASERA
		Godfather.

				DON CORLEONE
		Some day, and that day may never
		come, I would like to call upon you
		to do me a service in return.

	EXT DAY: MALL (SUMMER 1945)

	A HIGH ANGLE of the CORLEONE MALL in bright daylight.  There
	are at least five hundred guests filling the main courtyard
	and gardens.  There is music and laughing and dancing and
	countless tables covered with food and wine.

	DON CORLEONE stands at the Gate, flanked on either side by a
	son: FREDO and SONNY, all dressed in the formal attire of
	the wedding party.  He warmly shakes the hands, squeezes the
	hands of the friends and guests, pinches the cheeks of the
	children, and makes them all welcome.  They in turn carry
	with them gallons of homemade wine, cartons of freshly baked
	bread and pastries, and enormous trays of Italian delicacies.

	The entire family poses for a family portrait: DON CORLEONE,
	MAMA, SONNY, his wife, SANDRA, and their children, TOM HAGEN
	and his wife, THERESA, and their BABY; CONSTANZIA, the
	bride, and her bridegroom, CARLO RIZZI.  As they move into
	the pose, THE DON seems preoccupied.

				DON CORLEONE
		Where's Michael?

				SONNY
		He'll be here Pop, it's still early.

				DON CORLEONE
		Then the picture will wait for him.

	Everyone in the group feels the uneasiness as the DON moves
	back to the house.  SONNY gives a delicious smile in the
	direction of the Maid-of-Honor, LUCY MANCINI.  She returns
	it.  Then he moves to his wife.

				SONNY
		Sandra, watch the kids.  They're
		running wild.

				SANDRA
		You watch yourself.

	HAGEN kisses his WIFE, and follows THE DON, passing the wine
	barrels, where a group of FOUR MEN nervously wait.  TOM
	crooks a finger at NAZORINE, who doublechecks that he is
	next, straightens, and follows HAGEN.

	EXT DAY: MALL ENTRANCE (SUMMER 1945)

	Outside the main gate of the Mall, SEVERAL MEN in suits,
	working together with a MAN in a dark sedan, walk in and out
	of the rows of parked cars, writing license plate numbers
	down in their notebooks.  We HEAR the music and laughter
	coming from the party in the distance.

	A MAN stops at a limousine and copies down the number.

	BARZINI, dignified in a black homburg, is always under the
	watchful eyes of TWO BODYGUARDS as he makes his way to
	embrace DON CORLEONE in the courtyard.

	The MEN walk down another row of parked cars.  Put another
	number in the notebook.  A shiney new Cadillac with wooden
	bumpers.

	PETER CLEMENZA, dancing the Tarantella joyously, bumping
	bellies with the ladies.

				CLEMENZA
		Paulie...wine...WINE.

	He mops his sweating forehead with a big handkerchief.
	PAULIE hustles, gets a glass of icy black wine, and brings
	it to him.

				PAULIE
		You look terrif on the floor!

				CLEMENZA
		What are you, a dance judge?  Go do
		your job; take a walk around the
		neighborhood... see everything is
		okay.

	PAULIE nods and leaves; CLEMENZA takes a breath, and leaps
	back into the dance.

	The MEN walk down another row of parked cars.  Put another
	number in the notebook.

	TESSIO, a tall, gentle-looking man, dances with a NINE-YEAR-
	OLD GIRL, her little black party shoes planted on his
	enormous brown shoes.

	The MEN move on to other parked cars, when SONNY storms out
	of the gate, his face flushed with anger, followed by
	CLEMENZA and PAULIE.

				SONNY
		Buddy, this is a private party.

	The MAN doesn't answer, but points to the DRIVER of the
	sedan.  SONNY menacingly thrusts his reddened face at him.
	The DRIVER merely flips open his wallet to a greed card,
	without saying a word.  SONNY steps back, spits on the
	ground, turns, and walks away, followed by CLEMENZA, PAULIE,
	and another TWO MEN.  He doesn't say a thing for most of the
	walk back into the courtyard, and then, muttered to PAULIE.

				SONNY
		Goddamn FBI...don't respect nothing.

	INT DAY: DON'S OFFICE (SUMMER 1945)

	DON CORLEONE sits quietly behind his massive desk in the
	dark study.

				NAZORINE
		...a fine boy from Sicily, captured
		by the American Army, and sent to
		New Jersey as a prisoner of war...

				DON CORLEONE
		Nazorine, my friend, tell me what I
		can do.

				NAZORINE
		Now that the war is over, Enzo,
		this boy is being repatriated to
		Italy.  And you see, Godfather...
			  (he wrings his hands,
			  unable to express himself)
		He...my daughter...they...

				DON CORLEONE
		You want him to stay in this country.

				NAZORINE
		Godfather, you understand everything.

				DON CORLEONE
		Tom, what we need is an Act of
		Congress to allow Enzo to become a
		citizen.

				NAZORINE
			  (impressed)
		An Act of Congress!

				HAGEN
			  (nodding)
		It will cost.

	The DON shrugs; such are the way with those things; NAZORINE
	nods.

				NAZORINE
		Is that all?  Godfather, thank
		you...
			  (backing out, enthusiastically)
		Oh, wait till you see the cake I
		made for your beautiful daughter!

	NAZORINE backs out, all smiles, and nods to the GODFATHER.
	DON CORLEONE rises and moves to the Venetian blinds.

				HAGEN
		Who do I give this job to?

	The DON moves to the windows, peeking out through the blinds.

				DON CORLEONE
		Not to one of our paisans...give it
		to a Jew Congressman in another
		district.  Who else is on the list
		for today?

	The DON is peeking out to the MEN around the barrel, waiting
	to see him.

				HAGEN
		Francesco Nippi.  His nephew has
		been refused parole.  A bad case.

	EXT DAY: MALL (SUMMER 1945)

	WHAT HE SEES:

	NIPPI waits nervously by the barrel.

				HAGEN (O.S.)
		His father worked with you in the
		freight yards when you were young.

	LUCA BRASI sitting alone, grotesque and quiet.

				HAGEN (O.S.)
		He's not on the list, but Luca
		Brasi wants to see you.

	INT DAY: DON'S OFFICE (SUMMER 1945)

	The DON turns to HAGEN.

				DON CORLEONE
		Is it necessary?

				HAGEN
		You understand him better than
		anyone.

	The DON nods to this.  Turns back to the blinds and peeks out.

	EXT DAY: MALL (SUMMER 1945)

	WHAT HE SEES:

	MICHAEL CORLEONE, dressed in the uniform of a Marine Captain,
	leads KAY ADAMS through the wedding crowd, occasionally
	stopped and greeted by FRIENDS of the family.

	INT DAY: DON'S OFFICE (SUMMER 1945)

	The DON, inside the office, peering through the blinds,
	following them.

	EXT DAY: MALL (SUMMER 1945)

	MICHAEL moves through the crowd, embraces MAMA and introduces
	her to his GIRL.

	EXT DAY: OFFICE WINDOW (SUMMER 1945)

	The DON's eyes peering through the blinds.

	EXT DAY: MALL TABLES (SUMMER 1945)

	KAY and MICHAEL settle by a table on the edge of the wedding,
	burdened down with plates of food and glasses and wine.  She
	is exhilarated by the enormity of the affair, the music and
	the vitality.

				KAY
		I've never seen anything like it.

				MICHAEL
		I told you I had a lot of relatives.

	KAY looking about, a young and lively thing in a gift shop.
	We see what she sees:

	Her interest is caught by THREE MEN standing by the wine
	barrels.

				KAY
			  (amused)
		Michael, what are those men doing?

				MICHAEL
		They're waiting to see my father.

				KAY
		They're talking to themselves.

				MICHAEL
		They're going to talk to my father,
		which means they're going to ask
		him for something, which means they
		better get it right.

				KAY
		Why do they bother him on a day
		like this?

				MICHAEL
		Because they know that no Sicilian
		will refuse a request on his
		daughter's wedding day.

	EXT DAY: WEDDING PARTY (SUMMER 1945)

	CONNIE CORLEONE, the Bride, is pressing the bodice of her
	overly-fluffy white gown against the groom, CARLO RIZZI.  He
	is bronzed, with curly blondish hair and lovely dimples.
	She absolutely adores him and can barely take her eyes from
	him long enough to thank the various GUESTS for the white
	envelopes they are putting into the large white purse she
	holds.  In fact, if we watch carefully, we can see that one
	of her hands is slid under his jacket, and into his shirt,
	where she is provocatively rubbing the hair on his chest.
	CARLO, on the other hand, has his blue eyes trained on the
	bulging envelopes, and is trying to guess how much cash the
	things hold.

	Discreetly, he moves her hand off of his skin.

				CARLO
			  (whispered)
		Cut it out, Connie.

	The purse, looped by a ribbon of silk around CONNIE's arm,
	is fat with money.

				PAULIE (O.S.)
		What do you think?  Twenty grand?

	A little distance away, a young man, PAULIE GATTO, catches a
	prosciutto sandwich thrown by a friend, without once taking
	eyes from the purse.

				PAULIE
		Who knows?  Maybe more.  Twenty,
		thirty grand in small bills cash in
		that silk purse.  Holy Toledo, if
		this was somebody else's wedding!

	SONNY is sitting at the Wedding Dias, talking to LUCY
	MANCINI, the Maid of Honor.  Every once in a while he
	glances across the courtyard, where his WIFE is talking with
	some WOMEN.

	He bends over and whispers something into LUCY's ear.

	SANDRA and the WOMEN are in the middle of a big, ribald laugh.

				WOMAN
		Is it true what they say about your
		husband, Sandra?

	SANDRA's hands separate with expanding width further and
	further apart until she bursts into a peal of laughter.
	Through her separated hands she sees the Wedding Dais.
	SONNY and LUCY are gone.

	INT DAY: DON'S HALL & STAIRS (SUMMER 1945)

	The empty hallway.  The bathroom door opens and LUCY
	surreptitiously steps out.

	She looks up where SONNY is standing on the second landing,
	motioning for her to come up.

	She lifts her petticoats off the ground and hurries upstairs.

	EXT DAY: MALL TABLES (SUMMER 1945)

	KAY and MICHAEL.

				KAY
			  (in a spooky low tone)
		Michael, that scarey guy...Is he a
		relative?

	She has picked out LUCA BRASI.

				MICHAEL
		No.  His name is Luca Brasi.  You
		wouldn't like him.

				KAY
			  (Excited)
		Who is he?

				MICHAEL
			  (Sizing her up)
		You really want to know?

				KAY
		Yes.  Tell me.

				MICHAEL
		You like spaghetti?

				KAY
		You know I love spaghetti.

				MICHAEL
		Then eat your spaghetti and I'll
		tell you a Luca Brasi story.

	She starts to eat her spaghetti.

	She begins eating, looking at him eagerly.

				MICHAEL
		Once upon a time, about fifteen
		years ago some people wanted to
		take over my father's olive oil
		business.  They had Al Capone send
		some men in from Chicago to kill my
		father, and they almost did.

				KAY
		Al Capone!

				MICHAEL
		My Father sent Luca Brasi after
		them.  He tied the two Capone men
		hand and foot, and stuffed small
		bath towels into their mouths.
		Then he took an ax, and chopped one
		man's feet off...

				KAY
		Michael...

				MICHAEL
		Then the legs at the knees...

				KAY
		Michael you're trying to scare me...

				MICHAEL
		Then the thighs where they joined
		the torso.

				KAY
		Michael, I don't want to hear
		anymore...

				MICHAEL
		Then Luca turned to the other man...

				KAY
		Michael, I love you.

				MICHAEL
		...who out of sheer terror had
		swallowed the bath towel in his
		mouth and suffocated.

	The smile on his face seems to indicate that he is telling a
	tall story.

				KAY
		I never know when you're telling me
		the truth.

				MICHAEL
		I told you you wouldn't like him.

				KAY
		He's coming over here!

	LUCA comes toward them to meet TOM HAGEN halfway, just near
	their table.

				MICHAEL
		Tom...Tom, I'd like you to meet Kay
		Adams.

				KAY
			  (having survived LUCA)
		How do you do.

				MICHAEL
		My brother, Tom Hagen.

				HAGEN
		Hello Kay.  Your father's inside,
		doing some business.
			  (privately)
		He's been asking for you.

				MICHAEL
		Thanks Tom.

	HAGEN smiles and moves back to the house, LUCA ominously
	following.

				KAY
		If he's your brother, why does he
		have a different name?

				MICHAEL
		My brother Sonny found him living
		in the streets when he was a kid,
		so my father took him in.  He's a
		good lawyer.

	INT DAY: DON'S OFFICE (SUMMER 1945)

	DON CORLEONE at the window.  He has seen the intimacy of the
	YOUNG COUPLE.

				LUCA (O.S.)
		Don Corleone...

	THE DON turns to the stiffly formal LUCA, and he moves
	forward to kiss his hand.  He takes the envelope from his
	jacket, holds it out, but does not release it until he makes
	a formal speech.

				LUCA
			  (with difficulty)
		Don Corleone...I am honored, and
		grateful...that you invited me to
		your home...on the wedding day of
		your...daughter.
		May their first child...be a
		masculine child.  I pledge my never
		ending loyalty.
			  (he offers the envelope)
		For your daughter's bridal purse.

				DON CORLEONE
		Thank you, Luca, my most valued
		friend.

	THE DON takes it, and then LUCA's hand, which he squeezes so
	tightly we might imagine it to be painful.

				LUCA
		Let me leave you, Don Corleone.  I
		know you are busy.

	He turns, almost an about-face, and leaves the study with
	the same formality he entered with.  DON CORLEONE breathes
	more easily, and gives the thick envelope to HAGEN.

				DON CORLEONE
		I'm sure it's the most generous
		gift today.

				HAGEN
		The Senator called--apologized for
		not coming personally, but said
		you'd understand.  Also, some of
		the Judges...they've all sent gifts.
		And another call from Virgil
		Sollozzo.

	DON CORLEONE is not pleased.

				HAGEN
		The action is narcotics.  Sollozzo
		has contacts in Turkey for the
		poppy, in Sicily for the plants to
		process down to morphine or up to
		heroin.  Also he has access to this
		country.  He's coming to us for
		financial help, and some sort of
		immunity from the law.  For that we
		get a piece of the action, I
		couldn't find out how much.
		Sollozzo is vouched for by the
		Tattaglia family, and they may have
		a piece of the action.  They call
		Sollozzo the Turk.
		He's spent a lot of time in Turkey
		and is suppose to have a Turkish
		wife and kids.  He's suppose to be
		very quick with the knife, or was,
		when he was younger.  Only in
		matters of business and with some
		reasonable complaint.  Also he has
		an American wife and three children
		and he is a good family man.

	THE DON nods.

				HAGEN
		He's his own boss, and very
		competent.

				DON CORLEONE
		And with prison record.

				HAGEN
		Two terms; one in Italy, one in the
		United States.  He's known to the
		Government as a top narcotics man.
		That could be a plus for us; he
		could never get immunity to testify.

				DON CORLEONE
		When did he call?

				HAGEN
		This morning.

				DON CORLEONE
		On a day like this.  Consiglero, do
		you also have in your notes the the
		Turk made his living from
		Prostitution before the war, like
		the Tattaglias do now.  Write that
		down before you forget it.  The
		Turk will wait.

	We now begin to hear a song coming over the loud-speakers
	from outside.  In Italian, with unmistakable style.

				DON CORLEONE
		What that?  It sounds like Johnny.

	He moves to the window, pulls the blinds up, flooding the
	room with light.

				DON CORLEONE
		It is Johnny.  He came all the way
		from California to be at the wedding.

				HAGEN
		Should I bring him in.

				DON CORLEONE
		No.  Let the people enjoy him.  You
		see?  He is a good godson.

				HAGEN
		It's been two years.  He's probably
		in trouble again.

	EXT DAY: MALL (SUMMER 1945)

	JOHNNY FONTANE on the bandstand, singing to the delight and
	excitement of the wedding GUESTS.

				KAY
		I didn't know your family knew
		Johnny Fontane.

				MICHAEL
		Sure.

				KAY
		I used to come down to New York
		whenever he sang at the Capitol and
		scream my head off.

				MICHAEL
		He's my father's godson; he owes
		him his whole career.

	JOHNNY finishes the song and the CROWD screams with delight.
	They call out for another when DON CORLEONE appears.

				DON CORLEONE
		My Godson has come three thousand
		miles to do us honor and no one
		thinks to wet his throat.

	At once a dozen wine glasses are offered to JOHNNY, who
	takes a sip from each as he moves to embrace his GODFATHER.

				JOHNNY
		I kept trying to call you after my
		divorce and Tom always said you
		were busy.  When I got the Wedding
		invitation I knew you weren't sore
		at me anymore, Godfather.

				DON CORLEONE
		Can I do something for you still?
		You're not too rich, or too famous
		that I can't help you?

				JOHNNY
		I'm not rich anymore, Godfather,
		and...my career, I'm almost washed
		up...

	He's very disturbed.  The GODFATHER indicates that he come
	with him to the office so no one will notice.  He turns to
	HAGEN.

				DON CORLEONE
		Tell Santino to come in with us.
		He should hear some things.

	They go, leaving HAGEN scanning the party looking for SONNY.

	INT DAY: DON'S OFFICE (SUMMER 1945)

	HAGEN glances up the staircase.

				HAGEN
		Sonny?

	Then he goes up.

	INT DAY: DON'S UPSTAIRS ROOM (SUMMER 1945)

	SONNY and LUCY are in a room upstairs; he has lifted her
	gown's skirts almost over her head, and has her standing
	against the door.  Her face peeks out from the layers of
	petticoats around it like a flower in ecstasy.

				LUCY
		Sonnyeeeeeeee.

	Her head bouncing against the door with the rhythm of his
	body.  But there is a knocking as well.  They stop, freeze
	in that position.

				HAGEN (O.S.)
		Sonny?  Sonny, you in there?

	INT DAY: DON'S UPSTAIRS HALLWAY (SUMMER 1945)

	Outside, HAGEN by the door.

				HAGEN
		The old man wants you; Johnny's
		here...he's got a problem.

				SONNY (O.S.)
		Okay.  One minute.

	HAGEN hesitates.  We HEAR LUCY's head bouncing against the
	door again.  TOM leaves.

	INT DAY: DON'S OFFICE (SUMMER 1945)

				DON CORLEONE
		ACT LIKE A MAN!  By Christ in
		Heaven, is it possible you turned
		out no better than a Hollywood
		finocchio.

	Both HAGEN and JOHNNY cannot refrain from laughing.  The DON
	smiles.  SONNY enters as noiselessly as possible, still
	adjusting his clothes.

				DON CORLEONE
		All right, Hollywood...Now tell me
		about this Hollywood Pezzonovanta
		who won't let you work.

				JOHNNY
		He owns the studio.  Just a month
		ago he bought the movie rights to
		this book, a best seller.  And the
		main character is a guy just like
		me.  I wouldn't even have to act,
		just be myself.

	The DON is silent, stern.

				DON CORLEONE
		You take care of your family?

				JOHNNY
		Sure.

	He glances at SONNY, who makes himself as inconspicuous as
	he can.

				DON CORLEONE
		You look terrible.  I want you to
		eat well, to rest.  And spend time
		with your family.  And then, at the
		end of the month, this big shot
		will give you the part you want.

				JOHNNY
		It's too late.  All the contracts
		have been signed, they're almost
		ready to shoot.

				DON CORLEONE
		I'll make him an offer he can't
		refuse.

	He takes JOHNNY to the door, pinching his cheek hard enough
	to hurt.

				DON CORLEONE
		Now go back to the party and leave
		it to me.

	He closes the door, smiling to himself.  Turns to HAGEN.

				DON CORLEONE
		When does my daughter leave with
		her bridegroom?

				HAGEN
		They'll cut the cake in a few
		minutes...leave right after that.
		Your new son-in-law, do we give him
		something important?

				DON CORLEONE
		No, give him a living.  But never
		let him know the family's business.
		What else, Tom?

				HAGEN
		I've called the hospital; they've
		notified Consiglere Genco's family
		to come and wait.  He won't last
		out the night.

	This saddens the DON.  He sighs.

				DON CORLEONE
		Genco will wait for me.  Santino,
		tell your brothers they will come
		with me to the hospital to see
		Genco.  Tell Fredo to drive the big
		car, and ask Johnny to come with us.

				SONNY
		And Michael?

				DON CORLEONE
		All my sons.
			  (to HAGEN)
		Tom, I want you to go to California
		tonight.  Make the arrangements.
		But don't leave until I come back
		from the hospital and speak to you.
		Understood?

				HAGEN
		Understood.

	EXT DAY: MALL (SUMMER 1945)

	Now all the wedding GUESTS excitedly clap their hands over
	the entrance of the cake: NAZORINE is beaming as he wheels
	in a serving table containing the biggest, gaudiest, most
	extravagant wedding cake ever baked, an incredible monument
	of his gratitude.  The CROWD is favorably impressed: they
	begin to clink their knives or forks against their glasses,
	in the traditional request for the Bride to cut the cake and
	kiss the Groom.  Louder and louder, five hundred forks
	hitting five hundred glasses.

	EXT DAY: MALL (SUMMER 1945)

	Silence.

	HIGH ANGLE ON THE MALL, late day.  The GUESTS are gone.  A
	single black car is in the courtyard.  FREDDIE is behind the
	driver's seat: the DON enters the car, looks at MICHAEL, who
	sits between SONNY and JOHNNY in the rear seat.

				DON CORLEONE
		Will your girl friend get back to
		the city all right?

				MICHAEL
		Tom said he'd take care of it.

	The DON pulls the door shut; and the car pulls out, through
	the gate of the great Corleone Mall.

	INT DAY: HOSPITAL CORRIDOR (SUMMER 1945)

	A long white hospital corridor, at the end of which we can
	see a grouping of FIVE WOMEN, some old and some young, but
	all plump and dressed in black.

	DON CORLEONE and his SONS move toward the end.  But then the
	DON slows, putting his hand on MICHAEL's shoulder.  MICHAEL
	stops and turns toward his FATHER.  The two looks at one
	another for some time.  SILENCE.  DON CORLEONE then lifts
	his hand, and slowly touches a particular medal on MICHAEL's
	uniform.

				DON CORLEONE
		What was this for?

				MICHAEL
		For bravery.

				DON CORLEONE
		And this?

				MICHAEL
		For killing a man.

				DON CORLEONE
		What miracles you do for strangers.

				MICHAEL
		I fought for my country.  It was my
		choice.

				DON CORLEONE
		And now, what do you choose to do?

				MICHAEL
		I'm going to finish school.

				DON CORLEONE
		Good.  When you are finished, come
		and talk to me.  I have hopes for
		you.

	Again they regard each other without a word.  MICHAEL turns,
	and continues on.  DON CORLEONE watches a moment, and then
	follows.

	INT DAY: HOSPITAL ROOM (SUMMER 1945)

	DON CORLEONE enters the hospital room, moving closest to OUR
	VIEW.  He is followed by his SONS, JOHNNY and the WOMEN.

				DON CORLEONE
			  (whispered)
		Genco, I've brought my sons to pay
		their respects.  And look, even
		Johnny Fontane, all the way from
		Hollywood.

	GENCO is a tiny, wasted skeleton of a man.  DON CORLEONE
	takes his bony hand, as the others arrange themselves around
	his bed, each clasping the other hand in turn.

				GENCO
		Godfather, Godfather, it's your
		daughter's wedding day, you cannot
		refuse me.  Cure me, you have the
		power.

				DON CORLEONE
		I have no such power...but Genco,
		don't fear death.

				GENCO
			  (with a sly wink)
		It's been arranged, then?

				DON CORLEONE
		You blaspheme.  Resign yourself.

				GENCO
		You need your old Consigliere.  Who
		will replace me?
			  (suddenly)
		Stay with me Godfather.  Help me
		meet death.  If he sees you, he
		will be frightened and leave me in
		peace.  You can say a word, pull a
		few strings, eh?  We'll outwit that
		bastard as we outwitted all those
		others.
			  (clutching his hand)
		Godfather, don't betray me.

	The DON motions all the others to leave the room.  They do.
	He returns his attention to GENCO, holding his hand and
	whispering things we cannot hear, as they wait for death.

	INT NIGHT: AIRPLANE (SUMMER 1945)

	FADE IN:

	The interior of a non-stop Constellation.  HAGEN is one of
	the very few passengers on this late flight.  He looks like
	any young lawyer on a business trip.  He is tired from the
	difficult preparation and duties that he has just executed
	during the wedding.  On the seat next to him is an enormous,
	bulging briefcase.  He closes his eyes.

	INT NIGHT: HONEYMOON HOTEL (SUMMER 1945)

	The honeymoon hotel: CARLO and CONNIE.  CARLO is in his
	undershorts, sitting up on the bed, anxiously taking the
	envelopes out of the silk bridal purse and counting the
	contents.  CONNIE prepares herself in the large marble
	bathroom.  She rubs her hands over his bronze shoulders, and
	tries to get his interest.

	INT NIGHT: DON'S OFFICE (SUMMER 1945)

	DON CORLEONE in his office.  LUCA BRASI sitting near to him.

				DON CORLEONE
		Luca, I am worried about this man
		Sollozzo.  Find out what you can,
		through the Tattaglias.  Let them
		believe you could be tempted away
		from the Corleone Family, if the
		right offer was made.  Learn what
		he has under his fingernails...

	INT NIGHT: MANCINI APT. HALL (SUMMER 1945)

	The hallway of an apartment building.  SONNY enters, climbs
	two steps at a time.  He knocks, and then whispers.

				SONNY
		It's me, Sonny.

	The door opens, and two lovely arms are around him, pulling
	him into the apartment.

	INT NIGHT: LUCA'S ROOM (WINTER 1945)

	LUCA BRASI's tiny room.  He is partly dressed.  He kneels
	and reaches under his bed and pulls out a small, locked
	trunk.  He opens it, and takes out a heavy, bullet-proof
	vest.  He puts it on, over his wool undershirt, and then
	puts on his shirt and jacket.  He takes his gun, quickly
	disassembles, checks, and reassembles it.  And leaves.

	INT NIGHT: DON'S OFFICE (SUMMER 1945)

	A CLOSE VIEW of DON CORLEONE thinking quietly.

	INT NIGHT: MOVING TRAIN (SUMMER 1945)

	MICHAEL and KAY on a train, speeding on their way to New
	Hampshire.

	INT NIGHT: SUBWAY (WINTER 1945)

	LUCA, in his bulky jacket, sitting quietly on an empty
	subway train.

	INT NIGHT: AIRPLANE (SUMMER 1945)

	HAGEN on the Constellation.  He reaches into his briefcase,
	and takes out several pictures and papers.

	One photograph is of a smiling man, JACK WOLTZ, linked arm
	in arm with fifteen movie stars on either side, including a
	lovely young child star to his immediate right.

	HAGEN considers other papers.

	INT NIGHT: DON'S OFFICE (SUMMER 1945)

	DON CORLEONE looks, and then moves HAGEN into an embrace.
	He straightens his arms and looks at TOM deeply.

				DON CORLEONE
		Remember my new Consigliere, a
		lawyer with his briefcase can steal
		more than a hundred men with guns.

	EXT DAY: WOLTZ ESTATE GATE (SUMMER 1945)

	JACK WOLTZ ESTATE.  HAGEN stands before the impressive gate,
	armed only with his briefcase.  A GATEMAN opens the gate,
	and TOM enters.

	EXT DAY: WOLTZ GARDENS (SUMMER 1945)

	HAGEN and WOLTZ comfortably stroll along beautiful formal
	gardens, martinis in hand.

				WOLTZ
		You should have told me your boss
		was Corleone, Tom, I had to check
		you out.  I thought you were just
		some third rate hustler Johnny was
		running in to bluff me.
			  (a piece of statuary)
		Florence, thirteenth century.
		Decorated the garden of a king.

	They cross the garden and head toward the stables.

				WOLTZ
		I'm going to show you something
		beautiful.

	They pass the stables, and come to rest by a stall with a
	huge bronze plaque attached to the outside wall: "KHARTOUM."
	TWO SECURITY GUARDS are positioned in chairs nearby; they
	rise as WOLTZ approaches.

				WOLTZ
		You like horses?  I like horses, I
		love 'em.  Beautiful, expensive
		Racehorses.

	The animal inside is truly beautiful.  WOLTZ whispers to him
	with true love in his voice.

				WOLTZ
		Khartoum...Kartoum...You are
		looking at six hundred thousand
		dollars on four hoofs.  I bet even
		Russian Czars never paid that kind
		of dough for a single horse.  But
		I'm not going to race him I'm going
		to put him out to Stud.

	INT NIGHT: WOLTZ DINING ROOM (SUMMER 1945)

	HAGEN and WOLTZ sit at an enormous dining room table,
	attended by SEVERAL SERVANTS.  Great paintings hang on the
	walls.  The meal is elaborate and sumptuous.

				HAGEN
		Mr. Corleone is Johnny's Godfather.
		That is very close, a very sacred
		religious relationship.

				WOLTZ
		Okay, but just tell him this is one
		favor I can't give.  But he should
		try me again on anything else.

				HAGEN
		He never asks a second favor when
		he has been refused the first.
		Understood?

				WOLTZ
		You smooth son of a bitch, let me
		lay it on the line for you, and
		your boss.  Johnny Fontane never
		gets that movie.  I don't care how
		many Dago, Guinea, wop Greaseball
		Goombahs come out of the woodwork!

				HAGEN
		I'm German-Irish.

				WOLTZ
		Okay my Kraut-Mick friend, Johnny
		will never get that part because I
		hate that pinko punk and I'm going
		to run him out of the Movies.  And
		I'll tell you why.  He ruined one
		of Woltz Brothers' most valuable
		proteges.  For five years I had
		this girl under training; singing
		lessons!  Acting lessons!  Dancing
		lessons!  We spent hundreds of
		thousands of dollars--I was going
		to make her a star.  I'll be even
		more frank, just to show you that
		I'm not a hard-hearted man, that it
		wasn't all dollars and cents.  That
		girl was beautiful and young and
		innocent and she was the greatest
		piece of ass I've ever ad and I've
		had them all over the world.  Then
		Johnny comes along with that olive
		oil voice and guinea charm and she
		runs off.  She threw it all away to
		make me look ridiculous.  A MAN IN
		MY POSITION CANNOT AFFORD TO BE
		MADE TO LOOK RIDICULOUS!

	EXT DAY: GENCO OLIVE OIL CO. (SUMMER 1945)

	An unimposing little building in New York City on Mott
	Street with a large old sign: "GENCO OLIVE OIL IMPORTS,
	INC." next to an open-faced fruit market.

	A dark Buick pulls up, and a single small man, whom we
	cannot see well because of the distance, gets out and enters
	the building.  This is VIRGIL SOLLOZZO.

	INT DAY: OLIVE OIL OFFICES (SUMMER 1945)

	Looking toward the staircase we can hear SOLLOZZO's footsteps
	before he actually rises into view.  He is a small man, very
	dark, with curly black hair.  But wiry, and tight and hard,
	and obviously very dangerous.  He is greeted at the head of
	the stairs by SONNY, who takes his hand and shakes it,
	introducing himself.  For a moment, there is a complex of
	handshaking quite formal, and whispered respectful
	introductions.  Finally, SOLLOZZO is taken into the DON's
	glass paneled office; the two principals are introduced.
	They are very respectful of one another.  Folding chairs are
	brought in by FREDDIE, and soon they are all sitting around
	in a circle; the DON, SOLLOZZO, SONNY, HAGEN, FREDDIE,
	CLEMENZA and TESSIO.  The DON is the slightest bit foolish
	with all his compatriots, whereas SOLLOZZO has brought no
	one.  Throughout all that transpires, however, it is clear
	that this scene is between two men: SOLLOZZO and DON CORLEONE.

				SOLLOZZO
		My business is heroin, I have poppy
		fields, laboratories in Narseilles
		and Sicily, ready to go into
		production.  My importing methods
		are as safe as these things can be,
		about five per cent loss.  The risk
		is nothing, the profits enormous.

				DON CORLEONE
		Why do you come to me?  Why do I
		deserve your generosity?

				SOLLOZZO
		I need two million dollars in
		cash...more important, I need a
		friend who has people in high
		places; a friend who can guarantee
		that if one of my employees be
		arrested, they would get only light
		sentences.  Be my friend.

				DON CORLEONE
		What percentages for my family?

				SOLLOZZO
		Thirty per cent.  In the first year
		your share would be four million
		dollars; then it would go up.

				DON CORLEONE
		And what is the percentage of the
		Tattaglia family?

	SOLLOZZO nods toward HAGEN.

				SOLLOZZO
		My compliments.  I'll take care of
		them from my share.

				DON CORLEONE
		So.  I receive 30 per cent just for
		finance and legal protection.  No
		worries about operations, is that
		what you tell me?

				SOLLOZZO
		If you think two million dollars in
		cash is just finance, I congratulate
		you Don Corleone.

	There is a long silence; in which each person present feels
	the tension.  The DON is about to give his answer.

				DON CORLEONE
		I said I would see you because I've
		heard you're a serious man, to be
		treated with respect...
			  (pause)
		But I'll say no to you.

	We feel this around the room.

				DON CORLEONE
		I'll give you my reasons.  I have
		many, many friends in Politics.
		But they wouldn't be so friendly if
		my business was narcotics instead
		of gambling.  They think gambling
		is something like liquor, a harmless
		vice...and they think narcotics is
		dirty business.

	SOLLOZZO takes a breath.

				DON CORLEONE
		No...how a man makes his living is
		none of my business.  But this
		proposition of yours is too risky.
		All the people in my family lived
		well the last ten years, I won't
		risk that out of greed.

				SOLLOZZO
		Are you worried about security for
		your million?

				DON CORLEONE
		No.

				SOLLOZZO
		The Tattaglias will guarantee your
		investment also.

	This startles SONNY; he blurts out.

				SONNY
		The Tattaglia family guarantees our
		investment?

	SOLLOZZO hears him first, and then very slowly turns to face
	him.  Everyone is the room knows that SONNY has stepped out
	of line.

				DON CORLEONE
		Young people are greedy, and they
		have no manners.  They speak when
		they should listen.  But I have a
		sentimental weakness for my
		children, and I've spoiled them, as
		you see.  But Signor Sollozzo, my
		no is final.

	SOLLOZZO nods, understands that this is the dismissal.  He
	glances one last time at SONNY.  He rises; all the others do
	as well.  He bows to the DON, shakes his hand, and formally
	takes his leave.  When the footsteps can no longer be heard:

	The DON turns to SONNY.

				DON CORLEONE
		Santino, never let anyone outside
		the family know what you are
		thinking.  I think your brain is
		going soft from all that comedy you
		play with that young girl.

	TWO OFFICE WORKERS are carrying an enormous floral display
	with the word "THANK YOU" spelled out in flowers.

				DON CORLEONE
		What is this nonsense?

				HAGEN
		It's from Johnny.  It was announced
		this morning.  He's going to play
		the lead in the new Woltz Brothers
		film.

	INT DAY: WOLTZ'S BEDROOM (SUMMER 1945)

	It is large, dominated by a huge bed, in which a man,
	presumably WOLTZ, is sleeping.  Soft light bathes the room
	from the large windows.  We move closer to him until we see
	his face, and recognize JACK WOLTZ.  He turns uncomfortably;
	mutters, feels something strange in his bedsheets.  Something
	wet.

	He wakens, feels the sheets with displeasure; they are wet.
	He looks at his hand; the wetness is blood.  He is
	frightened, pulls aside the covers, and sees fresh blood on
	his sheets and pajamas.  He grunts, pulls the puddle of
	blood in his bed.  He feels his own body frantically,
	moving, down, following the blood, until he is face to face
	with the great severed head of Khartoum lying at the foot of
	his bed.  Just blood from the hacked neck.  White reedy
	tendons show.  He struggles up to his elbows in the puddle
	of blood to see more clearly.  Froth covers the muzzle, and
	the enormous eyes of the animal are yellowed and covered
	with blood.

	WOLTZ tries to scream; but cannot.  No sound comes out.
	Then, finally and suddenly an ear-splitting scream of pure
	terror escapes from WOLTZ, who is rocking on his hands and
	knees in an uncontrolled fit, blood all over him.

	INT DAY: OLIVE OIL OFFICES (SUMMER 1945)

	CLOSE VIEW on the GODFATHER.  Nodding.

				DON CORLEONE
		Send Johnny my congratulations.

	----------------------------------------FADE OUT--------

	(SCENES 12 & 12 OMITTED)

	FADE IN:

	EXT DAY: FIFTH AVENUE (WINTER 1945)

	Fifth Avenue in the snow.  Christmas week.  People are
	bundled up with rosy faces, rushing to buy presents.

	KAY and MICHAEL exit a Fifth Avenue department store,
	carrying a stack of gaily wrapped gifts, arm in arm.

				KAY
		We have something for your mother,
		for Sonny, we have the tie for
		Fredo and Tom Hagen gets the
		Reynolds pen...

				MICHAEL
		And what do you want for Christmas?

				KAY
		Just you.

	They kiss.

	INT DAY: HOTEL ROOM (WINTER 1945)

	CLOSE ON a wooden radio, playing quiet Music.  THE VIEW PANS
	AROUND the dark hotel room, curtained against the daylight.

				MICHAEL (O.S.)
		We'll have a quiet, civil ceremony
		at the City Hall, no big fuss, no
		family, just a couple of friends as
		witnesses.

	The two are in each other's arms in a mess of bedsheets on
	the two single beds that they have pushed together.

				KAY
		What will your father say?

				MICHAEL
		As long as I tell him beforehand he
		won't object.  He'll be hurt, but
		he won't object.

				KAY
		What time do they expect us?

				MICHAEL
		For dinner.  Unless I call and tell
		them we're still in New Hampshire.

				KAY
		Michael.

				MICHAEL
		Then we can have dinner, see a
		show, and spend one more night.

	He moves to the telephone.

				MICHAEL (CONT'D.)
		Operator.  Get me
			  (fill in number)


				KAY
		Michael, what are you doing?

				MICHAEL
		Shhh, you be the long distance
		operator.  Here.

				KAY
		Hello...this is Long Distance.  I
		have a call from New Hampshire.  Mr.
		Michael Corleone.  One moment please.

	She hands the phone to MICHAEL who continues the deception.

				MICHAEL
		Hello, Tom?  Michael.  Yeah...
		listen, we haven't left yet.  I'm
		driving down to the city with Kay
		tomorrow morning.  There's something
		important I want to tell the old
		man before Christmas.  Will he be
		home tomorrow night?

	INT DAY: OLIVE OIL OFFICE (WINTER 1945)

	HAGEN in the Olive Oil Company office.  In the background,
	through the glass partitions, we can see the DON, at work in
	his office.  TOM is tired, and steeped in paperwork.

				HAGEN (O.S.)
		Sure.  Anything I can do for you.

				MICHAEL (O.S.)
		No.  I guess I'll see you Christmas.
		Everyone's going to be out at Long
		Beach, right?

				HAGEN
		Right.

	He smiles.  MICHAEL has hung up.  He looks at the piles of
	work, and can't face it.  He rises, puts on his coat and
	hat, and continues out.

	He peeks into the DON's office.

				HAGEN
		Michael called; he's not leaving
		New Hampshire until tomorrow
		morning.  I've got to go, I promised
		Theresa I'd pick up some toys for
		the kids.

	The DON smiles and nods.

	TOM smiles, and leaves; OUR VIEW remaining with DON CORLEONE.
	FREDDIE is sitting on a bench in the corner, reading the
	afternoon paper.  He puts aside the papers the office
	manager has prepared for him, and then moves to FREDDIE,
	raps his knuckles on his head to take his nose out of the
	paper.

				DON CORLEONE
		Tell Paulie to get the car from the
		lot; I'll be ready to go home in a
		few minutes.

				FREDO
		I'll have to get it myself; Paulie
		called in sick this morning.

				DON CORLEONE
		That's the third time this month.
		I think maybe you'd better get a
		healthier bodyguard for me.  Tell
		Tom.

				FREDO
			  (going)
		Paulie's a good kid.  If he's sick,
		he's sick.  I don't mind getting
		the car.

	FREDDIE leaves.  He slowly puts on his jacket.  Looks out
	his window.

	EXT DUSK: OLIVE OIL CO. (WINTER 1945)

	FREDDIE crosses the street.

	INT DUSK: OLIVE OIL OFFICE (WINTER 1945)

				OFFICE MANAGER
		Buon Watale, Don Corleone.

	The MANAGER helps him on with his overcoat.  Once again, the
	DON glances out his window.

	The black car pulls up; FREDDIE driving.

				DON CORLEONE
		Merry Christmas.
			  (handing the MANAGER
			  an envelope)


	And he starts down the stairs.

	EXT DUSK: OLIVE OIL CO. (WINTER 1945)

	The light outside is very cold, and beginning to fail.  When
	FREDDIE sees his FATHER coming, he moves back into the
	driver's seat.  The DON moves to the car, and is about to
	get in when he hesitates, and turns back to the long, open
	fruit stand near the corner.

	The PROPRIETOR springs to serve him.  The DON walks among
	the trays and baskets, and merely points to a particular
	piece of fruit.  As he selects, the MAN gingerly picks the
	pieces of fruit up and puts them into a paper bag.  The DON
	pays with a five dollar bill, waits for his change, and then
	turns back to the car.

	EXT DUSK: POLKS TOY STORE (WINTER 1945)

	TOM HAGEN exits carrying a stack of presents, all gift
	wrapped.  He continues past the windows.  As he walks,
	someone walks right in his way.  He looks up.  It is SOLLOZZO.

	He takes TOM by the arm and walks along with him.

				SOLLOZZO
			  (quietly)
		Don't be frightened.  I just want
		to talk to you.

	A car parked at the curb suddenly flings its rear door open.

				SOLLOZZO
			  (urgently)
		Get in; I want to talk to you.

	HAGEN pulls his arm free.  He is frightened.

				HAGEN
		I haven't got time.

	TWO MEN suddenly appear on either side of him.

				SOLLOZZO
		Get in the car.  If I wanted to
		kill you you'd be dead already.
		Trust me.

	HAGEN, sick to his stomach, moves with his ESCORTS, leaving
	our VIEW on the Mechanical windows gaily bobbing the story
	of Hansel and Gretel.  We HEAR the car doors shut, and the
	car drive off.

	EXT NIGHT: RADIO CITY - PHONE BOOTH (WINTER 1945)

	RADIO CITY MUSIC HALL during the Christmas show.  KAY and
	MICHAEL exit; tears are still streaming down her cheeks, and
	she sniffles, and dries her tears with Kleenex.  KAY
	nostalgically hums "The Bells of Saint Mary's," as they walk
	arm in arm.

				KAY
		Would you like me better if I were
		a nun?

				MICHAEL
		No.

				KAY
		Would you like me better if I were
		Ingrid Bergman?

	They have passed a little enclosed newsstand.  KAY sees
	something that terrifies her.  She doesn't know what to do.
	MICHAEL still walks, thinking about her question.

				KAY
			  (a little voice)
		Michael?

				MICHAEL
		I'm thinking about it.

				KAY
		Michael...

				MICHAEL
		No, I would not like you better if
		you were Ingrid Bergman.

	She cannot answer him.  Rather she pulls him by the arm,
	back to the newsstand, and points.  His face goes grave.

	The headlines read: "VITO CORLEONE SHOT, CHIEFTAN GUNNED
	DOWN."

	MICHAEL is petrified; quickly he takes each edition, drops a
	dollar in the tray, and hungrily reads through them.  KAY
	knows to remain silent.

				MICHAEL
			  (desperately)
		They don't say if he's dead or alive.

	EXT DUSK: OLIVE OIL CO. (WINTER 1945)

	DON CORLEONE by the fruit stand; he is about to move to the
	car, when TWO MEN step from the corner.  Suddenly, the DON
	drops the bag of fruit and darts with startling quickness
	toward the parked car.

				DON CORLEONE
		Fredo, Fredo!

	The paper bag has hit the ground, and the fruit begins
	rolling along the sidewalk, as we HEAR gunshots.

	Five bullets catch the DON in the back; he arches in pain,
	and continues toward the car.

	The PROPRIETOR of the fruit stand rushes for cover, knocking
	over an entire case of fruit.

	The TWO GUNMEN move in quickly, anxious to finish him off.

	Their feet careful to avoid the rolling fruit.  There are
	more GUNSHOTS.

	FREDDIE is hysterical; he tries to get out of the car;
	having difficulty opening the door.  He rushes out, a gun
	trembling in his hand; his mouth open.  He actually drops
	the gun.

	The gun falls amid the rolling fruit.

	The GUNMEN are panicked.  They fire once more at the downed
	DON CORLEONE.  His leg and arm twitch where they are hit;
	and pools of blood are beginning to form.

	The GUNMEN are obviously in a state of panic and confusion;
	they disappear around the corner as quickly as they came.

	The PEOPLE about the avenue have all but disappeared:
	rather, we catch glimpses of them, poking their heads safely
	from around corners, inside doorways and arches, and from
	windows.  But the street itself is now empty.

	FREDDIE is in shock; he looks at his FATHER; now great
	puddles of blood have formed, and the DON is lifeless and
	face down in them.

	FREDDIE falls back on to the curb and sits there, saying
	something we cannot understand.  He begins to weep profusely.

	INT NIGHT: SUBWAY (WINTER 1945)

	LUCA BRASI riding alone on a subway car, late at night.  He
	gets off.

	He emerges at a subway terminal, proceeds out.

	EXT NITE: NIGHT CLUB STREET (WINTER 1945)

	LUCA walks down the late night street.  He approaches an
	elegant New York Nightclub, whose gaudy neon sign is still
	winking this late at night.  He waits and watches.  Then the
	sign goes out; and he proceeds into the club.

	INT NITE: NIGHTCLUB (WINTER 1945)

	The main floor of the Nightclub is very large, with endless
	glistening wooden floors.  Now, at this late time, the
	chairs have been stacked on the tables and a NEGRO JANITOR
	is waxing them.  A single HAT-CHECK GIRL is counting her
	receipts.  LUCA moves past the empty bandstand, and sits at
	the bar.  ANOTHER MAN, dark and very well-built, moves
	behind the bar.

				MAN
		Luca...I'm Bruno Tattaglia.

				LUCA
		I know.

	LUCA looks up; and out of the shadows emerges SOLLOZZO.

				SOLLOZZO
		Do you know who I am?

	LUCA Nods.

				SOLLOZZO
		You've been talking to the
		Tattaglias.  They thought we could
		do business.

	LUCA listens.

				SOLLOZZO
		I need somebody strong to protect
		my operation, physically.  I've
		heard you're not happy with your
		family, you might make a switch.

				LUCA
		If the money is good enough.

				SOLLOZZO
		On the first shipment, I can
		guarantee you fifty thousand dollars.

	LUCA looks at him; he had no idea the offer would be so good.

	SOLLOZZO extends his hand, but LUCA pretends not to see it,
	rather, he busies himself putting a cigarette in his mouth.
	BRUNO TATTAGLIA, behind the bar, makes a cigarette lighter
	magically appear, and holds it to LUCA's cigarette.  Then,
	he does an odd thing; he drops the lighter on the bar, and
	puts his hand lightly on LUCA's, almost patting it.

	INT NITE: SONNY'S LIVING ROOM (WINTER 1945)

	The telephone in SONNY's house is ringing.  He approaches
	it, obviously fresh from a nap.

				SONNY
		Yeah.

				VOICE (O.S.)
		Do you recognize my voice?

				SONNY
		I think so.  Detective squad?

				VOICE (O.S.)
		Right.  Don't say my name, just
		listen.  Somebody shot your father
		outside his place fifteen minutes
		ago.

				SONNY
		Is he alive?

				VOICE (O.S.)
		I think so, but I can't get close
		enough.  There's a lot of blood.
		I'll try to find out more.

				SONNY
		Find out anything you can...you got
		a Grand coming.
			  (click)


	SONNY cradles the phone.  An incredible rage builds up in
	him, his face actually turning red.  He would like to rip
	the phone to pieces in his bare hands.  Then he controls it.
	Quickly, he dials another number.

				SONNY
		Theresa, let me talk to Tom.  Not
		yet?  Have him call me as soon as
		he gets home.

	He hangs up.

				SANDRA (O.S.)
		Sonny?  Sonny, who is it?
			  (she enters the room)
		What is it?

				SONNY
			  (calmly)
		They shot the old man.

				SANDRA
		Oh God...

				SONNY
		Honey...don't worry.  Nothing else
		is going to happen.

	There is a POUNDING on the door.  A BABY starts crying.

				SANDRA
			  (really frightened)
		SONNY?

	SONNY reaches into a cabinet drawer, takes out a gun, and
	moves quickly.  He opens the front door quickly.  It is
	CLEMENZA.  He enters, SONNY closes the door.  SANDRA goes to
	look after the baby.

				CLEMENZA
			  (excited)
		You heard about your father?

				SONNY
		Yeah.

				CLEMENZA
		The word is out in the streets that
		he's dead.

				SONNY
		Where the hell was Paulie, why
		wasn't he with the Don?

				CLEMENZA
		Paulie's been a little sick all
		winter...he was home.

				SONNY
		How many times did he stay home the
		last couple of months?

				CLEMENZA
		Maybe three, four times.  I always
		asked Freddie if he wanted another
		bodyguard, but he said no.  Things
		have been so smooth the last ten
		years...

				SONNY
		Go get Paulie, I don't care how
		sick he is.  Pick him up yourself,
		and bring him to my father's house.

				CLEMENZA
		That's all?  Don't you want me to
		send some people over here?

				SONNY
		No, just you and Paulie.

	CLEMENZA leaves; SONNY moves to SANDRA, who sits on the
	couch weeping quietly, comforting her BABY.

				SONNY
		A couple of our people will come to
		stay here.  Do whatever they say;
		I'm going over to the main house.
		If you want me, use Pop's special
		phone.

	The telephone rings again.  SONNY answers it.

				SONNY
		Hello.

				SOLLOZZO (O.S.)
		Santino Corleone?

	SANDRA moves behind him, anxious to know who it is.  SONNY
	indicates that she be quiet.

				SONNY
		Yeah.

				SOLLOZZO (O.S.)
		We have Tom Hagen.  In about three
		hours he'll be released with our
		proposition.  Don't do anything
		until you've heard what he has to
		say.  You can only cause a lot of
		trouble.  What's done is done.
			  (a pause)
		Don't lose that famous temper of
		yours.

				SONNY
			  (quietly)
		I'll wait.

	EXT NITE: MALL (WINTER 1945)

	FULL VIEW OF THE CORLEONE MALL.  It is night, but the
	courtyard is bathed with white light from floodlights on the
	tops of all the houses.  It is very cold.  We see the figure
	of SONNY cross the Mall, and let himself into the main house.

	INT NITE: DON'S KITCHEN (WINTER 1945)

	SONNY walks into the empty, darkened house.  Then he calls
	out.

				SONNY
		Ma?  Ma, where are you.

	The kitchen door swings open.  He moves quickly and takes
	her by the arm.  He is deliberately calm.

				SONNY
		Ma, I just got a call.  Pop's
		hurt...I don't know how bad.

				MAMA
			  (quietly)
		Santino?  Have they killed him?

				SONNY
			  (almost in tears)
		We don't know yet, Ma.

				MAMA
		I'll get dressed.  In case we can
		see him...

	She moves out of the kitchen, and continues upstairs.  SONNY
	turns the gas from the pan of peppers she was frying.  He
	takes some bread without thinking, and dips it in the oil,
	and sloppily eats some of the peppers, as he moves into his
	father's office.

	INT NITE: DON'S OFFICE (WINTER 1945)

	He switches the lights on in the DON's office.  The massive
	desk dominates the room.  SONNY moves quickly to the
	telephone, pulling a small chair to the side of the desk,
	and dials a number.

				SONNY
		Tessio...This is Santino Corleone.
		I want fifty reliable men out here.

				TESSIO (O.S.)
		I heard, Sonny...but what about
		Clemenza's regime?

				SONNY
		I don't want to use Clemenza's
		people right now.  Understood?

	He hangs up.  He moves quickly to a wall safe; operates the
	dial, and removes a small notebook.  He takes it back to the
	desk, and runs over the list of numbers with his forefinger.
	We follow the names, until the finger stops at one: LUCA
	BRASI.  SONNY dials the number.  There is no answer.

				SONNY
		Luca.

	INT NITE: BUILDING (WINTER 1945)

	The interior of an abandoned building.  SEVERAL MEN in suits
	and ties sit around in the booths.

	HAGEN sits in one: SOLLOZZO sits across from him.

				SOLLOZZO
		I know you're not in the muscle end
		of the family--so I don't want you
		to be afraid.  I want you to help
		the Corleones and I want you to
		help me.

	HAGEN's hands are trembling as he tries to put a cigarette
	in his mouth.  ONE of the BUTTON MEN brings a bottle of rye
	to the table, and pours a little into a delicate, flowered
	china cup.  HAGEN sips gratefully.

				SOLLOZZO
		Your boss is dead...

	HAGEN is overwhelmed: actual tears spring to his eyes.
	SOLLOZZO pauses respectfully.

				SOLLOZZO
			  (pushing the bottle)
		Have some more.  We got him outside
		his office, just before I picked
		you up.  You have to make the peace
		between me and Santino.

	HAGEN still is focused on the grief of losing the old man.

				SOLLOZZO
		Sonny was hot for my deal, right?
		You know it's the smart thing to
		do, too.  I want you to talk Sonny
		into it.

				HAGEN
			  (pulling himself together)
		Sonny will come after you with
		everything he's got.

	SOLLOZZO rises, impatiently.

				SOLLOZZO
		That's going to be his first
		reaction.  You have to talk some
		sense into him.  The Tattaglia
		family stands behind me with all
		their people.  The other New York
		Families will go along with anything
		that prevents a full scale war.

	He leans close to HAGEN.

				SOLLOZZO
		The Don was slipping; in the old
		days I could never have gotten to
		him.  Now he's dead, nothing can
		bring him back.  Talk to Sonny,
		talk to the Caporegimes, Clemenza
		and Tessio...it's good business.

				HAGEN
		Even Sonny won't be able to call
		off Luca Brasi.

				SOLLOZZO
		I'll worry about Luca.  You take
		care of Sonny and the other two kids.

				HAGEN
		I'll try...It's what the Don would
		want us to do.

				SOLLOZZO
			  (lifting his hands in
			  an expression of harmlessness)
		Good...then you can go...
			  (he escorts him to
			  the door)
		I don't like violence.  I'm a
		businessman, and blood is a big
		expense.

	He opens the door; they step out together.

	EXT NITE: BUILDING

	HAGEN, SOLLOZZO exit.

	But a car pulls up, and ONE of SOLLOZZO'S MEN rushes out.
	He indicates with some urgency that he wants to talk to
	SOLLOZZO in private.

	Then SOLLOZZO moves with a grave expression.  He opens the
	door, indicating that HAGEN should be led back in.

				SOLLOZZO
		The old man is still alive.  Five
		bullets in his Sicilian hide and
		he's still alive.
			  (he gives a fatalistic
			  shrug)
		Bad luck for me, bad luck for you.

	EXT NITE: MALL (WINTER 1945)

	MICHAEL driving during the night.  There is a little fog in
	the air, and moisture has formed on the windshield, making
	it difficult to see well.  The wipers move across the view,
	as the gate of the Corleone Mall appears before us, still
	decorated for Christmas.  The courtyard is bathed with white
	floodlight, giving this place a cold and isolated look.  The
	narrow entrance mouth of the Mall is sealed off with a link
	chain.  There are strange cars parked along the curving
	cement walk.  SEVERAL MEN are congregated about the gate and
	chain; ONE of them approaches MICHAEL's car.

				MAN
		Who're you?

	ANOTHER peeks his ugly face almost right up to MICHAEL, and
	then turns.

				MAN 2
		It's the Don's kid; take the car,
		I'll bring him inside.

	The FIRST MAN opens the car door, and MICHAEL steps out.

	INT NITE: HALL (WINTER 1945)

	The Hallway of the main house is filled with MEN MICHAEL
	doesn't recognize.  They pay little attention to him.  Most
	of them are waiting; sitting uncomfortably; no one is talking.

	INT NITE: DON'S LIVING ROOM (WINTER 1945)

	MICHAEL moves into the living room; there is a Christmas
	tree, and countless greeting cards taped to the walls.

	THERESA HAGEN is sitting stiffly on the sofa, smoking a
	cigarette; on the coffee table in front of her is a water
	glass half filled with whiskey.  On the other side of the
	sofa sits CLEMENZA; his face is impassive, but he is
	sweating, and the cigar in his hand glistens slickly black
	with his saliva.  PAULIE GATTO sits tensely and alone on the
	other side of the room.  CLEMENZA sees MICHAEL, looks up at
	him.

				CLEMENZA
		Your mother's at the hospital with
		the old man: He's gonna pull through.

	MICHAEL nods his relief.

				MICHAEL
		Thanks.

	He moves to THERESA.

				MICHAEL
			  (gently)
		You heard from Tom yet?

	Without looking up, she clings to him for a moment, and
	trembles.  Occasionally, STRANGE MEN will cross through the
	room; everyone speaks in a whisper.

				MICHAEL
			  (taking her hand)
		C'mon.

	He leads her into his father's office without knocking.

	INT NITE: DON'S OFFICE (WINTER 1945)

	SONNY and TESSIO are huddled around a yellow pad.  They look
	up, startled.

				SONNY
		Don't worry, Theresa; they just
		want to give Tom the proposition,
		then they're going to turn him loose.

	He reassuringly hugs THERESA, and then to MICHAEL's surprise,
	he kisses him on the cheek.

				SONNY
		I was worried when we couldn't get
		in touch with you in that hick town.

				MICHAEL
		How's Mom?

				SONNY
		Good.  She's been through it before.
		Me too.  You were too young to know
		about it.  You better wait outside;
		there're some things you shouldn't
		hear.

				MICHAEL
		I can help you out...

				SONNY
		Oh no you can't, the old man'd be
		sore as hell if I let you get mixed
		up in this.

				MICHAEL
		Jesus Christ, he's my father, Sonny.

				SONNY
		Theresa.

	She understands, and leaves them alone.

				SONNY
		All right, Mikey...who do we have
		to hit, Clemenza or Paulie?

				MICHAEL
		What?

				SONNY
		One of them fingered the old man.

	MICHAEL didn't realize that the men waiting outside were on
	trial for their lives.

				MICHAEL
		Clemenza?  No, I don't believe it.

				SONNY
		You're right, kid, Clemenza is okay.
		It was Paulie.

				MICHAEL
		How can you be sure?

				SONNY
		On the three days Paulie was sick
		this month, he got calls from a
		payphone across from the old man's
		building.  We got people in the
		phone company.
			  (he shrugs)
		Thank God it was Paulie...we'll
		need Clemenza bad.

	MICHAEL is just realizing the gravity and extent of the
	situation.

				MICHAEL
		Is it going to be all-out war, like
		last time?

				SONNY
		Until the old man tells me different.

				MICHAEL
		Then wait, Sonny.  Talk to Pop.

				SONNY
		Sollozzo is a dead man, I don't
		care what it costs.  I don't care
		if we have to fight all the five
		families in New York.  The Tattaglia
		family's going to eat dirt.  I
		don't care if we all go down
		together.

				MICHAEL
			  (softly)
		That's not how Pop would have
		played it.

				SONNY
		I know I'm not the man he was.  But
		I'll tell you this and he'll tell
		you too.  When it comes to real
		action, I can operate as good as
		anybody short range.

				MICHAEL
			  (calmly)
		All right, Sonny.  All right.

				SONNY
		Christ, if I could only contact Luca.

				MICHAEL
		Is it like they say?  Is he that
		good?

	Outside, we HEAR THERESA cry out, almost a scream of relief.
	Then open the door and rush out.

	Everyone is standing: in the doorway, TOM HAGEN is wrapped
	in a tight embrace with his WIFE.

				HAGEN
		If I plead before the Supreme
		Court, I'll never do better than I
		did tonight with that Turk.

	EXT NITE: MALL, FEATURING DON'S HOUSE (WINTER 1945)

	The windows of the main house are dark except for the DON's
	study.  It stands out against the cold, dark night.

	INT NITE: DON'S LIVING ROOM (WINTER 1945)

	The living room is empty, save for PAULIE GATTO sitting on
	the edge of the sofa.  The clock reads: 4:00 a.m.

	INT NITE: DON'S OFFICE (WINTER 1945)

	SONNY, MICHAEL, HAGEN, CLEMENZA and TESSIO; all exhausted,
	in shirtsleeves, about to fall asleep.  It is four in the
	morning; there is evidence of many cups of coffee and many
	snacks.  They can barely talk anymore.

				HAGEN
		Is the hospital covered?

				SONNY
		The cops have it locked in and I
		got my people there visiting Pop
		all the time.  What about the hit
		list.

	HAGEN widens his sleepy eyes, and looks at the yellow pad.

				HAGEN
		Too much, too far, too personal.
		The Don would consider this all
		purely a business dispute: Get rid
		of Sollozzo, and everything falls
		in line.  YOU don't have to go
		after the Tattaglias.

	CLEMENZA nods.

				HAGEN
		What about Luca?  Sollozzo didn't
		seem worried about Luca.  That
		worries me.

				SONNY
		If Luca sold out we're in real
		trouble.

				HAGEN
		Has anyone been able to get in
		touch with him?

				SONNY
		No, and I've been calling all night.
		Maybe he's shacked up.

				HAGEN
		Luca never sleeps over with a broad.
		He always goes home when he's
		through.  Mike, keep ringing Luca's
		number.

	MICHAEL, very tired, picks up the phone, and dials the
	number once again.  He can hear the phone ringing on the
	other end but no one answers.  Then hangs up.

				HAGEN
		Keep trying every fifteen minutes.
			  (exhausted)


				SONNY
		Tom, you're the Consigliere, what
		do we do if the old man dies?

				HAGEN
		Without your father's political
		contacts and personal influence,
		the Corleone family loses half its
		strength.  Without your father, the
		other New York families might wind
		up supporting Sollozzo, and the
		Tattaglias just to make sure there
		isn't a long destructive war.  The
		old days are over, this is 1946;
		nobody wants bloodshed anymore.  If
		your father dies...make the deal,
		Sonny.

				SONNY
			  (angry)
		That's easy to say; it's not your
		father.

				HAGEN
			  (quietly)
		I was as good a son to him as you
		or Mike.

				SONNY
		Oh Christ Tom, I didn't mean it
		that way.

				HAGEN
		We're all tired...

				SONNY
		OK, we sit tight until the old man
		can give us the lead.  But Tom, I
		want you to stay inside the Mall.
		You too, Mike, no chances.  Tessio,
		you hold your people in reserve,
		but have them nosing around the
		city.  The hospital is yours; I
		want it tight, fool-proof, 24 hours
		a day.

	There is a timid knock on the door.

				SONNY
		What is it?

	PAULIE GATTO looks in.

				CLEMENZA
		I tol' you to stay put, Paulie...

				PAULIE
		The guy at the gate's outside...says
		there's a package...

				SONNY
		Tessio, see what it is.

	TESSIO gets up, leaves.

				PAULIE
		You want me to hang around?

				SONNY
		Yeah.  Hang around.

				PAULIE
		Outside?

				CLEMENZA
		Outside.

				PAULIE
		Sure.

	He closes the door.

				SONNY
		Clemenza.  You take care of Paulie.
		I don't ever want to see him again.
		Understood?

				CLEMENZA
		Understood.

				SONNY
		Okay, now you can move your men
		into the Mall, replace Tessio's
		people.  Mike, tomorrow you take a
		couple of Clemenza's people and go
		to Luca's apartment and wait for
		him to show.  That crazy bastard
		might be going after Sollozzo right
		now if he's heard the news.

				HAGEN
		Maybe Mike shouldn't get mixed up
		in this so directly.  You know the
		old man doesn't want that.

				SONNY
		OK forget it, just stay on the phone.

	MICHAEL is embarrassed to be so protected.  He dials Luca
	Brasi's number once again.  The ring repeats, but no one
	answers.

	TESSIO comes back, carrying Luca Brasi's bullet-proof vest
	in his hand.  He unwraps it; there is a large fish wrapped
	inside.

				CLEMENZA
		A Sicilian message: Luca Brasi
		sleeps with the fishes.

	INT. NITE: NIGHTCLUB (WINTER 1945)

	LUCA sits at the Bar of the Tattaglia Nightclub, as we
	remember him.  BRUNO TATTAGLIA had just patted his hand.
	LUCA looks up at him.

	Then SOLLOZZO pats the other hand, almost affectionately.
	LUCA is just about to twist his hands away, when they both
	clamp down as hard as they can.  Suddenly, a garrote is
	thrown around his neck, and pulled violently tight.  His
	face begins to turn to purple blotches, and then totally
	purple, right before our eyes; his tongue hangs out, in a
	far more extreme way than a normal tongue could.  His eyes
	bulge.

	ONE of the MEN looks down at him in disgust as LUCA's
	strength leaves him.

				BRUNO
			  (making an ugly face)
		Oh Christ...all over the floor.

	SOLLOZZO lets LUCA's hand go with a victorious smile on his
	face.

	LUCA falls to the floor.

				SOLLOZZO
		The Godfather is next.

	----------------------------------------FADE OUT--------

	FADE IN:

	EXT DAY: CLEMENZA'S HOUSE (WINTER 1945)

	Morning in a simple Brooklyn suburb.  There are rows of
	pleasant houses; driveway after driveway, down the block.  A
	dark, somber young man of thirty-one or two walks with a
	noticeable limp down the sidewalk, and rings the bell.  This
	is ROCCO LAMPONE.  The woman of the house, MRS. CLEMENZA,
	talks to him through the screen door, and then points to the
	side of the house.  ROCCO moves to the garage, which is
	specially heated, and in which CLEMENZA is busy at work
	washing a shiny brand new Lincoln.  LAMPONE admires the car.

				LAMPONE
		Nice.

				CLEMENZA
		Crazy Detroit delivered it with a
		wooden bumper.  They're going to
		send me the chrome bumpers in a
		couple months.  I waited two years
		for this car to come with wooden
		bumpers!

	He scrubs and polishes with great affection.

				CLEMENZA
		Today you make your bones on Paulie.
		You understand everything?

				LAMPONE
		Sure.

	As he scrubs around the glove compartment, he opens it,
	unwraps a gun and gives it to LAMPONE.

				CLEMENZA
		.22 soft-nosed load.  Accurate up
		to five feet.

	LAMPONE expertly puts the gun away.  GATTO's car pulls into
	the driveway, and he sounds the horn.

	The two men walk to the car.  GATTO is driving, a bit
	nervous, like he doesn't know what is up.  LAMPONE gets in
	the rear seat; CLEMENZA in the front, making a grunt of
	recognition.  He looks at his wristwatch, as though wanting
	to chide PAULIE for being late.  PAULIE flinches a little
	when he sees LAMPONE will ride behind him; he half turns:

				PAULIE
		Rocco, sit on the other side.  A
		big guy like you blocks my rearview
		mirror.

	CLEMENZA turns sourly to PAULIE.

				CLEMENZA
		Goddamn Sonny.  He's running scared.
		He's already thinking of going to
		the mattresses.  We have to find a
		place on the West Side.  Paulie,
		you know a good location?

	PAULIE relaxes a bit; he thinks he's off any possible hook
	he was on.  Also there's the money he can make by selling
	Sollozzo any secret location.

				PAULIE
		I'll think about it.

				CLEMENZA
			  (grunting)
		Drive while you thinking; I wanna
		get to the City this month!

	The car pulls out.

	EXT DAY: PAULIE'S CAR - ON ROAD (WINTER 1945)

	Inside PAULIE drives; and CLEMENZA sits in a grump.  OUR
	VIEW does not show LAMPONE in the rear seat.

	EXT DAY: PAULIE'S CAR AT TUNNEL (WINTER 1945)

	The Car crosses to the Midtown Tunnel in the late Winter
	light.

	INT DAY: PAULIE'S CAR IN TUNNEL (WINTER 1945)

	Inside the tunnel; GATTO doesn't like not seeing LAMPONE.
	He tries to adjust his rearview mirror to catch a glimpse of
	him.

				CLEMENZA
		Pay attention!

	EXT DAY: PAULIE'S CAR AT MATTRESS (WINTER 1945)

	The car is parked in the City.  PAULIE comes down from an
	available apartment and gets back into the car.

				PAULIE
		Good for ten men...

				CLEMENZA
		OK, go to Arthur Avenue; I'm
		suppose to call when I found
		somethin'.

	The car pulls off.

	EXT DAY: RESTAURANT (WINTER 1945)

	New part of the city; the car pulls up in a parking lot.
	CLEMENZA get outs, glances at LAMPONE, then to PAULIE.

				CLEMENZA
		You wait; I'll call.

	He walks, tucking his shirt into his pants, around the
	corner and enters the Luna Restaurant.

	INT DAY: RESTAURANT (WINTER 1945)

	CLEMENZA enters the little restaurant, sits down at a table.
	The WAITERS know him; immediately put a bottle of wine, some
	bread--and then a plate of veal on his table.  He eats.

	EXT DAY: RESTAURANT (WINTER 1945)

	CLEMENZA exits the restaurant, belches, adjusts his pants;
	he is well fed.

	We move with him around the corner, not knowing what to
	expect has happened to Paulie.

	There is the car; PAULIE is still sitting behind the wheel,
	LAMPONE in the rear seat.  CLEMENZA steps in.

				CLEMENZA
		He talked my ear off.  Want us to
		go back to Long Beach; have another
		job for us.  Rocco, you live in the
		City, can we drop you off?

				LAMPONE (O.S.)
		Ah, I left my car at your place.

				CLEMENZA
		OK, then you gotta come back.

	The car pulls out.  By now, PAULIE is completely relaxed and
	secure.

				PAULIE
		You think we'll go for that last
		place?

				CLEMENZA
		Maybe, or you gotta know now.

				PAULIE
		Holy cow, I don't gotta know nothing.

	EXT DAY: PAULIE'S CAR ON CAUSEWAY (WINTER 1945)

	The car moves along the ready beach area of the causeway.
	Inside, CLEMENZA turns to PAULIE.

				CLEMENZA
		Paulie, pull over.  I gotta take a
		leak.

	The car pulls off the Causeway, into the reeds.  CLEMENZA
	steps out of the car, OUR VIEW MOVING with him.

	He turns his back three quarters from us (we can no longer
	see the car), unzips, and we hear the sound of urine hitting
	the ground.  We wait on this for a moment; and then there
	are two GUNSHOTS.  CLEMENZA finishes his leak, zips up and
	turns, moving back to the car.

	PAULIE is dead, bleeding from the mouth; the windows behind
	him are shattered.

				CLEMENZA
		Leave the gun.

	LAMPONE gets out, the two men walk through the reeds a few
	feet where there is another car.  They get in, and drive off.

	---------------------------------------FADE OUT---------

	EXT DAY: MALL (WINTER 1945)

	HIGH ANGLE OF THE MALL.  It is late afternoon.  Many strange
	cars are parked on the nearby streets.  We can see the group
	of BUTTON MEN, stationed here and there, obviously sentries
	with concealed weapons.

	MICHAEL walks along in the rear yard.

	He is bundled in a warm marine coat.  He looks at the
	strange men, regarding them with an uncertain awe.  They
	look back at him, at first suspiciously and then with the
	respect of his position.  He is like an exile Prince.  He
	wanders past them, and hesitates and looks at the yard.

	A rusted set of garden swings; and other home playground
	equipment.  The basketball ring now half coming off.  This
	is where he was a child.  Then a shout.

				CLEMENZA (O.S.)
		Mike.  Hey Mikey; telephone.

	CLEMENZA had shouted from the kitchen window.  MICHAEL
	hurries into the house.

	INT DAY: DON'S KITCHEN (WINTER 1945)

	CLEMENZA is in the kitchen, cooking over an enormous pot.
	He points to the kitchen wall phone which is hanging off the
	hook.

				CLEMENZA
		Some dame.

	MICHAEL picks it up.

				MICHAEL
		Hello.  Kay?

				KAY (O.S.)
		How is your father?

				MICHAEL
		He'll be OK.

				KAY (O.S.)
			  (pause)
		I love you.

	He glances at the THUGS in the kitchen.  Tries to shield the
	phone.

				KAY (O.S.)
		I LOVE YOU.

				MICHAEL
		Yeah Kay, I'm here.

				KAY (O.S.)
		Can you say it?

				MICHAEL
		Huh?

				KAY (O.S.)
		Tell me you love me.

	MICHAEL glances at the HOODS at the kitchen table.  He curls
	up in a corner, and in a quarter voice:

				MICHAEL
		I can't...

				KAY (O.S.)
		Please say it.

				MICHAEL
		Look.  I'll see you tonight, OK?

				KAY (O.S.)
		OK.
			  (click)


	CLEMENZA is getting ready to build a tomato sauce for all
	the button men stationed around the house.

				CLEMENZA
		How come you don't tell that nice
		girl you love her...here, learn
		something... you may have to feed
		fifty guys some day.  You start
		with olive oil...fry some garlic,
		see.  And then fry some sausage...or meat
		balls if you like...then you throw
		in the tomatoes, the tomato
		paste...some basil; and a little
		red wine...that's my trick.

	SONNY peeks into the kitchen; sees CLEMENZA.

				SONNY
		You take care of Paulie?

				CLEMENZA
		You won't see Paulie anymore.  He's
		sick for good this winter.

	MICHAEL starts to leave.

				SONNY
		Where are you going?

				MICHAEL
		To the city.

				SONNY
			  (to Clemenza; dipping
			  bread into the sauce)
		Send some bodyguards.

				MICHAEL
		I don't need them, Sonny.  I'm just
		going to see Pop in the hospital.
		Also, I got other things.

				CLEMENZA
		Sollozzo knows Mike's a civilian.

				SONNY
		OK, but be careful.

	EXT NITE: CAR

	MICHAEL sits in the rear seat, calmly, as he is being driven
	into the city.  THREE BUTTONMEN are crowded into the front
	seat.

	INT NITE: HOTEL LOBBY

	MICHAEL crosses the lobby, past lines of servicemen trying
	to book rooms.

	INT NITE: HOTEL

	MICHAEL and KAY eating a quiet dinner at the hotel.  He is
	preoccupied, she's concerned.

				MICHAEL
		Visiting hour ends at eight thirty.
		I'll just sit with him; I want to
		show respect.

				KAY
		Can I go to the hospital with you?

				MICHAEL
		I don't think so.  You don't want
		to end up on page 3 of the Daily
		News.

				KAY
		My parents don't read the Daily
		News.  All right, if you think I
		shouldn't.  I can't believe the
		things the papers are printing.
		I'm sure most of it's not true.

				MICHAEL
		I don't think so either.
			  (silence)
		I better go.

				KAY
		When will I see you again?

				MICHAEL
		I want you to go back to New
		Hampshire...think things over.

	He leans over her; kisses her.

				KAY
		When will I see you again?

				MICHAEL
		Goodbye.

	Quietly, he moves out the door.

	KAY lies on the bed a while, and then, to herself:

				KAY
		Goodbye.

	EXT NITE: DON'S HOSPITAL (WINTER 1945)

	A taxi pulls up in front of a hospital, marked clearly with
	a neon sign "HOSPITAL--EMERGENCY."  MICHAEL steps out, pays
	the fare...and then stops dead in his tracks.

	MICHAEL looks.

	He sees the hospital in the night; but it is deserted.  He
	is the only one on the street.  There are gay, twinkling
	Christmas decorations all over the building.  He walks,
	slowly at first, and then ever so quickly, up the steps.  He
	hesitates, looks around.  This area is empty.  He checks the
	address on a scrap of paper.  It is correct.  He tries the
	door, it is empty.

	He walks in.

	INT NITE: HOSPITAL LOBBY (WINTER 1945)

	MICHAEL stands in the center of an absolutely empty hospital
	lobby.  He looks to the right; there is a long, empty
	corridor.  To the left: the same.

	HIGH FULL ANGLE, as MICHAEL walks through the desolated
	building lit by eerie green neon lighting.  All we hear are
	his sole footsteps.

	He walks up to a desk marked "INFORMATION".  No one is there.
	He moves quickly to a door marked "OFFICE"; swings into it;
	no one is there.  He looks onto the desk:  There is half a
	sandwich, and a half-filled bottle of coke.

				MICHAEL
		Hello?  Hello?

	Now he knows something is happening, he moves quickly,
	alertly.  MICHAEL walking down the hospital corridors; all
	alone.  The floors have just been mopped.  They are still wet.

	INT NITE: HOSPITAL STAIRS

	Now he turns onto a staircase; ever quickening; up several
	flights.

	INT NITE: 4TH FLOOR CORRIDOR

	He steps out onto the fourth floor.  He looks.  There are
	merely empty corridors.  He takes out his scrap of paper;
	checks it.  "Room 4A."  Now he hurries, trying to follow the
	code of hospital rooms; following the right arrows, quicker
	and quicker they flash by him.  Now he stops, looks up "4A--
	Corleone".

	There is a special card table set up there with some
	magazines...and some smoking cigarettes still in the
	ashtray--but no detectives, no police, no bodyguards.

	INT NITE: DON'S ROOM 4A

	Slowly he pushes the door open, almost afraid at what he
	will find.  He looks.  Lit by the moonlight through the
	window, he can see a FIGURE in the hospital bed alone in the
	room, and under a transparent oxygen tent.  All that can be
	heard is the steady though strained breathing.  Slowly
	MICHAEL walks up to it, and is relieved to see his FATHER,
	securely asleep.  Tubes hang from a steel gallows beside the
	bed, and run to his nose and mouth.

				VOICE (O.S.)
		What are you doing here?

	This startles MICHAEL; who almost jumps around.  It is a
	NURSE lit from the light behind her in the hallway.

				NURSE
		You're not supposed to be here now.

	MICHAEL calms himself, and moves to her.

				MICHAEL
		I'm Michael Corleone--this is my
		father.  What happened to the
		detectives who were guarding him?

				NURSE
		Oh your father just had too many
		visitors.  It interfered with the
		hospital service.  The police came
		and made them all leave just ten
		minutes ago.
			  (comfortingly)
		But don't worry.  I look in on him.

				MICHAEL
		You just stand here one minute...

	Quickly he moves to the telephone, dials a number.

				MICHAEL
		Sonny...Sonny--Jesus Christ, I'm
		down at the hospital.  I came down
		late.  There's no one here.  None
		of Tessio's people--no detectives,
		no one.  The old man is completely
		unprotected.

				SONNY (O.S.)
		All right, get him in a different
		room; lock the door from the inside.
		I'll have some men there inside of
		fifteen minutes.  Sit tight, and
		don't panic.

				MICHAEL
			  (furiously, but kept inside)
		I won't panic.

	He hangs up; returns to the NURSE...

				NURSE
		You cannot stay here...I'm sorry.

				MICHAEL
			  (coldly)
		You and I are going to move my
		father right now...to another room
		on another floor...Can you
		disconnect those tubes so we can
		wheel the bed out?

				NURSE
		Absolutely not!  We have to get
		permission from the Doctor.

				MICHAEL
		You've read about my father in the
		papers.  You've seen that no one's
		here to guard him.  Now I've just
		gotten word that men are coming to
		this hospital to kill him.  Believe
		me and help me.

				NURSE
			  (frightened)
		We don't have to disconnect them,
		we can wheel the stand with the bed.

	She does so...and they perform the very difficult task of
	moving the bed and the apparatus, out of the room.

	INT NITE: 4TH FLOOR HOSPITAL (WINTER 1945)

	They roll the bed, the stand, and all the tubes silently
	down the corridor.  We hear FOOTSTEPS coming up the stairs.
	MICHAEL hears them, stops.

				MICHAEL
		Hurry, into there.

	They push it into the first available room.  MICHAEL peeks
	out from the door.  The footsteps are louder; then they
	emerge.  It is ENZO, NAZORINE's helper, carrying a bouquet
	of flowers.

				MICHAEL
			  (stepping out)
		Who is it?

				ENZO
		Michael...do you remember me, Enzo,
		the baker's helper to Nazorine, now
		his son-in-law.

				MICHAEL
		Enzo, get out of here.  There's
		going to be trouble.

	A look of fear sweeps through ENZO's face.

				ENZO
		If there...will be trouble...I stay
		with you, to help.  I owe it to the
		Godfather.

	MICHAEL thinks, realizes he needs all the help he can get.

				MICHAEL
		Go outside; stand in front...I'll
		be out in a minute.

	INT NITE: DON'S SECOND HOSPITAL ROOM (WINTER 1945)

	They part.  MICHAEL moves into the hospital room where they
	put his FATHER.

				NURSE
			  (frightened)
		He's awake.

	MICHAEL looks at the OLD MAN, his eyes are open, though he
	cannot speak.  MICHAEL touches his face tenderly.

				MICHAEL
		Pop...Pop, it's me Michael.  Shhhh,
		don't try to speak.  There are men
		who are coming to try to kill you.
		But I'm with you...I'm with you
		now...

	The OLD MAN tries to speak...but cannot.  MICHAEL tenderly
	puts his finger to his FATHER's lips.

	EXT NITE: DON'S HOSPITAL STREET (WINTER 1945)

	Outside the hospital is empty save for a nervous ENZO,
	pacing back and forth brandishly the flowers as his only
	weapon.  MICHAEL exits the hospital and moves to him.  They
	both stand under a lamppost in the cold December night.
	They are both frightened; MICHAEL gives ENZO a cigarette,
	lights it.  ENZO's hands are trembling, MICHAEL's are not.

				MICHAEL
		Get rid of those and look like
		you've got a gun in your pocket.

	The windows of the hospital twinkle with Christmas
	decorations.

				MICHAEL
		Listen...

	We HEAR the sound of a single automobile coming.  MICHAEL
	and ENZO look with fear in their eyes.  Then MICHAEL takes
	the bouquet of flowers and stuffs them under his jacket.
	They stand, hands in their pockets.

	A long low black car turns the corner and cruises by them.
	MICHAEL's and ENZO's faces are tough, impassive.  The car
	seems as though it will stop; and then quickly accelerates.
	MICHAEL and ENZO are relieved.  MICHAEL looks down; the
	BAKER's hands are shaking.  He looks at his own, and they
	are not.

	Another moment goes by and we can hear the distant sound of
	police sirens.  They are clearly coming toward the hospital,
	getting louder and louder.  MICHAEL heaves a sigh of relief.

	In a second, a patrol car makes a screaming turn in front of
	the hospital; then two more squad cars follow with uniformed
	POLICE and DETECTIVES.  He smiles his relief and starts
	toward them.  TWO huge, burly POLICEMEN suddenly grab his
	arms while ANOTHER frisks him.  A massive POLICE CAPTAIN,
	spattered with gold braid and scrambled eggs on his hat,
	with beefy red face and white hair seems furious.  This is
	McCLUSKEY.

				MCCLUSKEY
		I thought I got all you guinea
		hoods locked up.  Who the hell are
		you and what are you doing here?

	ANOTHER COP standing nearby:

				COP
		He's clean, Captain.

	MICHAEL studies McCLUSKEY closely.

				MICHAEL
			  (quietly)
		What happened to the detectives who
		were supposed to be guarding my
		father?

				MCCLUSKEY
			  (furious)
		You punk-hood.  Who the hell are
		you to tell me my business.  I
		pulled them off.  I don't care how
		many Dago gangsters kill each other.
		I wouldn't lift a finger to keep
		your old man from getting knocked
		off.  Now get the hell out of here;
		get off this street you punk, and
		stay away from this hospital.

	MICHAEL stands quiet.

				MICHAEL
		I'll stay until you put guards
		around my father's room.

				MCCLUSKEY
		Phil, lock this punk up.

				A DETECTIVE
		The Kid's clean, Captain...He's a
		war hero, and he's never been mixed
		up in the rackets...

				MCCLUSKEY
			  (furious)
		Goddam it, I said lock him up.  Put
		the cuffs on him.

				MICHAEL
			  (deliberately, right
			  to McCLUSKEY's face,
			  as he's being handcuffed)
		How much is the Turk paying you to
		set my father up, Captain?

	Without any warning, McCLUSKEY leans back and hits MICHAEL
	squarely on the jaw with all his weight and strength.
	MICHAEL groans, and lifts his hand to his jaw.  He looks at
	McCLUSKEY; we are his VIEW and everything goes spinning, and
	he falls to the ground, just as we see HAGEN and CLEMENZA'S
	MEN arrive.

	---------------------------------------FADE OUT---------

	EXT DAY: MALL (WINTER 1945)

	HIGH ANGLE VIEW of THE CORLEONE MALL.  The gateway now has a
	long black car blocking it.  There are more BUTTON MEN
	stationed more formally; and some of them visibly carrying
	rifles; those of the houses close to the courtyard have MEN
	standing by open windows.  It is clear that the war is
	escalating.  A car pulls up and out get CLEMENZA, LAMPONE,
	MICHAEL and HAGEN.  MICHAEL's jaw is wired and bandaged.  He
	stops and looks up at the open window.  We can see MEN
	holding rifles.

				MICHAEL
		Christ, Sonny really means business.

	They continue walking.  TESSIO joins them.  The various
	BODYGUARDS make no acknowledgment.

				CLEMENZA
		How come all the new men?

				TESSIO
		We'll need them now.  After the
		hospital incident, Sonny got mad.
		We hit Bruno Tattaglia four o'clock
		this morning.

	INT DAY: DON'S HALLWAY

	They enter the house past the scores of new and strange faces.

	INT DAY: DON'S OFFICE (WINTER 1945)

	SONNY is in the DON's office; he is excited and exuberant.

				SONNY
		I've got a hundred button men on
		the streets twenty-four hours a day.
		If Sollozzo shows one hair on his
		ass he's dead.

	He sees MICHAEL, and holds his bandaged face in his hand,
	kiddingly.

				SONNY
		Mikey, you look beautiful!

				MICHAEL
		Cut it out.

				SONNY
		The Turk wants to talk!  The nerve
		of that son of a bitch!  After he
		craps out last night he wants a meet.

				HAGEN
		Was there a definite proposal?

				SONNY
		Sure, he wants us to send Mike to
		meet him to hear his proposition.
		The promise is the deal will be so
		good we can't refuse.

				HAGEN
		What about that Tattaglias?  What
		will they do about Bruno?

				SONNY
		Part of the deal: Bruno cancels out
		what they did to my father.

				HAGEN
		We should hear what they have to say.

				SONNY
		No, no Consiglere.  Not this time.
		No more meetings, no more
		discussions, no more Sollozzo
		tricks.  Give them one message: I
		WANT SOLLOZZO.  If not, it's all
		out war.  We go to the mattresses
		and we put all the button men out
		on the street.

				HAGEN
		The other families won't sit still
		for all out war.

				SONNY
		Then THEY hand me Sollozzo.

				HAGEN
		Come ON Sonny, your father wouldn't
		want to hear this.  This is not a
		personal thing, this is Business.

				SONNY
		And when they shot me father...

				HAGEN
		Yes, even the shooting of your
		father was business, not personal...

				SONNY
		No no, no more advice on how to
		patch it up Tom.  You just help me
		win.  Understood?

	HAGEN bows his head; he is deeply concerned.

				HAGEN
		I found out about this Captain
		McCluskey who broke Mike's jaw.
		He's definitely on Sollozzo's
		payroll, and for big money.
		McCluskey's agreed to be the Turk's
		bodyguard.  What you have to
		understand is that while Sollozzo
		is guarded like this, he's
		invulnerable.  Nobody has ever
		gunned down a New York Police
		Captain.  Never.  It would be
		disastrous.  All the five families
		would come after you Sonny; the
		Corleone family would be outcasts;
		even the old man's political
		protection would run for cover.  So
		just...take that into consideration.

				SONNY
			  (still fuming)
		McCluskey can't stay with the Turk
		forever.  We'll wait.

				MICHAEL
		We can't wait.  No matter what
		Sollozzo say about a deal, he's
		figuring out how to kill Pop.  You
		have to get Sollozzo now.

				SONNY
		The kid's right.

				HAGEN
		What about McCluskey?

				MICHAEL
		Let's say now that we have to kill
		McCluskey.  We'll clear that up
		through our Newspaper contacts later.

				SONNY
		Go on Mike.

				MICHAEL
		They want me to go to the conference
		with Sollozzo.  Set up the meeting
		for two days from now.  Sonny, get
		our informers to find out where the
		meeting will be held.
		Insist it has to be a public place:
		a bar or restaurant at the height
		of the dinner hour.  So I'll feel
		safe.  They'll check me when I meet
		them so I won't be able to carry a
		weapon; but Clemenza, figure out a
		way to have one planted there for
		me.
			  (pause)
		Then I'll kill them both.

	Everyone in the room is astonished; they all look at MICHAEL.
	Silence.  SONNY suddenly breaks out in laughter.  He points
	a finger at MICHAEL, trying to speak.

				SONNY
		You?  You, the high-class college
		kid.  You never wanted to get mixed
		up in the family business.  Now you
		wanta gun down a police Captain and
		the Turk just because you got
		slapped in the face.  You're taking
		it personal, it's just business and
		he's taking it personal.

	Now CLEMENZA and TESSIO are also smiling; only HAGEN keeps
	his face serious.

				MICHAEL
			  (angrily, but cold)
		Sonny, it's all personal, and I
		learned it from him, the old man,
		the Godfather.  He took my joining
		the Marines personal.  I take
		Sollozzo trying to kill my father
		personal, and you know I'll kill
		them Sonny.

	MICHAEL radiates danger...SONNY stops laughing.

	INT DAY: CLEMENZA'S CELLAR (WINTER 1945)

	CLOSE on a revolver.

				CLEMENZA (O.S.)
		It's as cold as they come,
		impossible to trace.
			  (he turns it upside down)
		Don't worry about prints Mike, I
		put a special tape on the trigger
		and butt.  Here.
			  (he hands the gun to
			  another pair of hands)
		Whatsamatter?  Trigger too tight.
			  (it fires: very LOUD)
		I left it noisy, so it'll scare any
		pain-in-the-neck innocent bystander
		away.

	MICHAEL is alone with CLEMENZA in a cellar workshop.

				CLEMENZA
		Just let your hand drop to your
		side, and let the gun slip out.
		Everybody will still think you got
		it.  They'll be starin' at your
		face, see?  Then walk out of the
		place real fast, but don't run.
		Don't look anybody directly in the
		eye, but don't look away from them
		neither.  Hey, they'll be scared
		stiff o you, believe me.  Nobody's
		gonna bother with you.  Don't worry
		about nothing; you'd be surprised
		how good these things go.  O.K.,
		put your hat on, let's see how you
		look.  Helps with identification.

	They put the hat on; CLEMENZA adjusts it.

				CLEMENZA
		Mostly it gives witnesses an excuse
		to change their identification when
		we make them see the light.  Then
		you take a long vacation and we
		catch the hell.

				MICHAEL
		How bad will it be?

				CLEMENZA
		Probably all the other families
		will line up against us.  But, it's
		alright.  These things have to
		happen once every ten years or
		so...gets rid of the bad blood.
		You gotta stop 'em at the beginning.
		Like they shoulda stopped Hitler at
		Munich, they shoulda never let him
		get away with that, they were just
		asking for big trouble...

	INT DAY: DON'S HALL & LIVING ROOM (WINTER 1945)

	MICHAEL steps into the foyer of the main house.  A card
	table is set up with a man playing cards with three of the
	Corleone buttonmen.

	He continues into the living room.  It's a mess.  SONNY
	asleep on the sofa.  On the coffee table are the remains of
	a take-out Chinese food dinner, and a half-empty bottle of
	whisky.  The radio is playing.

				MICHAEL
		Why don't you stop living like a
		bum and get this place cleaned up.

				SONNY
		What are you, inspecting the
		barracks?
			  (SONNY sits up with
			  his head in his hands)
		You ready?  Did Clemenza tell you
		be sure to drop the gun right away?

				MICHAEL
		A million times.

				SONNY
		Sollozzo and McCluskey are going to
		pick you up in an hour and a half
		on Times Square, under the big
		Camels sign.

				HAGEN
		We don't let Mike go until we have
		the hostage, Sonny.

				CLEMENZA
		It's okay...the hostage is outside
		playing pinochle with three of my
		men.

	The phone rings in the DON's office.

				SONNY
		That could be a Tattaglia informer
		with the meeting place.

	INT DAY: DON'S OFFICE (WINTER 1945)

	HAGEN has hurried into the Den to get the phone; the OTHERS
	move in.

	HAGEN's on the phone; he writes something down.

				SONNY
		One of Tattaglia's people?

				HAGEN
		No.  Our informer in McCluskey's
		precinct.  Tonight at 8:00 he
		signed out for Louis' Restaurant in
		the Bronx.  Anyone know it.

				TESSIO
		Sure, I do.  It's perfect for us.
		A small family place with big
		booths where people can talk in
		private.  Good food.  Everybody
		minds their business.  Perfect.
			  (he moves to the desk
			  and makes a crude drawing)
		This is the entrance, Mike.  When
		you finish just walk out and turn
		left, then turn the corner.
		Clemenza, you gotta work fast to
		plant the gun.  They got an old-
		fashioned toilet with a space
		between the water container and the
		wall.  We can tape the gun behind
		there.

				CLEMENZA
		Mike, they're gonna frisk you in
		the car.  You'll be clean so they
		won't worry 'bout nothing.  In the
		restaurant, wait and talk a while,
		and then ask permission to go.  See?
		Then when you come out, don't waste
		time; don't sit down...you come out
		blasting.  And don't take chances.
		In the head, two shots apiece.  And
		out as fast as your legs can move.

				SONNY
		I want somebody very good, very
		safe to plant that gun.  I don't
		want my brother coming out of that
		toilet with just his dick in his
		hand.

				CLEMENZA
		The gun will be there.

				SONNY
			  (to MICHAEL, warmly)
		You're on, kid...I'll square it
		with Mom your not seeing her before
		you left.  And I'll get a message
		to your girl friend when I think
		the time is right.

				CLEMENZA
		We gotta move...

				MICHAEL
		O.K.  How long do you think before
		I can come back?

				SONNY
		Probably a year...

				HAGEN
			  (starting to crack)
		Jesus, I don't know...

				SONNY
		Can you do it Mike?

	MICHAEL moves out.

	EXT NITE: CAMELS SIGN (WINTER 1945)

	The enormous "CAMELS" sign, puffing smoke, below it stands
	MICHAEL, dressed in a warm overcoat, and wearing the hat
	CLEMENZA had given him.  A long black car pulls around the
	corner and slows before him.  The DRIVER, leaning over, open
	the front door.

				DRIVER
		Get in, Mike.

	He does, the car drives off.

	EXT NITE: SOLLOZZO'S CAR (WINTER 1945)

	Inside the car, SOLLOZZO reaches his hand over the back seat
	and shakes MIKE's hand.

				SOLLOZZO
		I'm glad you came, Mike.  I hope we
		can straighten everything out.  All
		this is terrible, it's not the way
		I wanted things to happen at all.
		It should never have happened.

				MICHAEL
		I want to settle things tonight.  I
		want my father left alone.

				SOLLOZZO
		He won't be; I swear to you be my
		children he won't be.  Just keep an
		open mind when we talk.  I hope
		you're not a hothead like your
		brother, Sonny.  It's impossible to
		talk business with him.

	McCLUSKEY grunts.

				MCCLUSKEY
		He's a good kid.  He's all right.
		Turn around, up on your knees,
		facing me.

	He gives MICHAEL a thorough frisk.

				MCCLUSKEY
		I'm sorry about the other night
		Mike.  I'm getting too old for my
		job, too grouchy.  Can't stand the
		aggravation.  You know how it is.
		He's clean.

	EXT NITE: SOLLOZZO'S CAR - WEST SIDE HIGHWAY (WINTER 1945)

	MICHAEL looks at the DRIVER and then ahead to see where
	they're heading.

	The car takes the George Washington Bridge.  MICHAEL is
	concerned.

				MICHAEL
		We're going to New Jersey?

				SOLLOZZO
			  (sly)
		Maybe.

	MICHAEL closes his eyes.

	EXT NITE: SOLLOZZO'S CAR ON G.W. BRIDGE (WINTER 1945)

	The car speeds along the George Washington Bridge on its way
	to New Jersey.  Then suddenly it hits the divider,
	temporarily lifts into the air, and bounces over into the
	lanes going back to New York.  It then hits it very fast, on
	the way back to the city.

	EXT NITE: SOLLOZZO'S CAR (WINTER 1945)

	SOLLOZZO checks to see the cars that had been following, and
	then leans to the DRIVER.

				SOLLOZZO
		Nice work; I'll remember it.

	MICHAEL is relieved.

	EXT NITE: LUNA AZURA RESTAURANT (WINTER 1945)

	The car pulls up in front of a little family restaurant in
	the Bronx:  The "LUNA AZURA".  There is no one on the street.
	MICHAEL looks to see if the DRIVER is going to get out with
	them.  He gets out, and opens the door.  SOLLOZZO, McCLUSKEY
	and MICHAEL get out; the DRIVER remains leaning against the
	car.  They enter the restaurant.

	INT NITE: LUNA AZURA (WINTER 1945)

	A very small family restaurant with a mosaic tile floor.
	SOLLOZZO, MICHAEL and McCLUSKEY sit around a rather small
	round table near the center of the room.  There are empty
	booths along the side walls; with a handful of CUSTOMERS,
	and ONE or TWO WAITERS.  It is very quiet.

				MCCLUSKEY
		Is the Italian food good here?

				SOLLOZZO
		Try the veal; it's the finest in
		New York.

	The solitary WAITER brings a bottle of wine to the table.
	They watch him silently as he uncorks it and pours three
	glasses.  Then, when he leaves, SOLLOZZO turns to McCLUSKEY:

				SOLLOZZO
		I am going to talk Italian to Mike.

				MCCLUSKEY
		Sure, you two go right ahead; I'll
		concentrate on my veal and my
		spaghetti.

	SOLLOZZO now begins in rapid Sicilian.  MICHAEL listening
	carefully and nodding every so often.  Then MICHAEL answers
	in Sicilian, and SOLLOZZO goes on.  The WAITER occasionally
	brings food; and they hesitate while he is there; then go on.
	Then MICHAEL, having difficulty expressing himself in
	Italian, accidentally lapses into English.

				MICHAEL
			  (using English for emphasis)
		Most important...I want a sure
		guarantee that no more attempts
		will be made on my father's life.

				SOLLOZZO
		What guarantees can I give you?  I
		am the hunted one.  I've missed my
		chance.  You think too highly of
		me, my friend...I am not so
		clever...all I want if a truce...

	MICHAEL looks long and hard at SOLLOZZO, who is smiling
	holding his open hands up as if to say: "I have no tricks up
	my sleeve".  Then he looks away and makes a distressed look
	on his face.

				SOLLOZZO
		What is it?

				MICHAEL
		Is it all right if I go to the
		bathroom?

	SOLLOZZO is intuitively suspicious.  He studies MICHAEL with
	his dark eyes.  Then he thrusts his hand onto MICHAEL's
	thigh feeling in and around, searching for a weapon.

				MCCLUSKEY
		I frisked him; I've frisked
		thousands of young punks; he's clean.

	He looks at a MAN sitting at a table opposite them;
	indicating the bathroom with his eyes.  The MAN nods,
	indicating no one is there.

				SOLLOZZO
		Don't take too long.

	MICHAEL gets up and calmly walks to the bathroom, and
	disappears inside.

	INT NITE: LUNA AZURA TOILET (WINTER 1945)

	MICHAEL steps into the small bathroom; he is breathing very
	hard.  He actually uses the urinal.  Then he washes his
	hands with the bar of pink soap; and dries them thoroughly.
	Then he moves to the booth, up to the old-fashioned toilet.
	Slowly he reaches behind the water tank; he panics when he
	cannot feel the gun.  We see behind the tank his hand is
	just a few inches from the gun...he gropes
	searchingly...finally coming to rest on the gun.

	CLOSE ON MICHAEL; the feel of it reassures him.  Then he
	breaks it loose from the tape holding it; he takes a deep
	breath and shoves it under his waistband.  For some
	unexplainable reason he hesitates once again, deliberately
	washes his hands and dries them.  Then he goes out.

	INT NITE: LUNA AZURA (WINTER 1945)

	He hesitates by the bathroom door; and looks at his table.
	McCLUSKEY is eating a plate of spaghetti and veal.  SOLLOZZO
	turns around upon hearing the door, and looks directly at
	MICHAEL.  MICHAEL looks back.  Then he smiles and continues
	back to the table.  He sits down.

				MICHAEL
		Now I can talk.  I feel much better.

	The MAN by the far wall had been stiff with attention; now
	he too relaxes.  SOLLOZZO leans toward MICHAEL who sits down
	comfortably and his hands move under the table and unbutton
	his jacket.  SOLLOZZO begins to speak in Sicilian once again
	but MICHAEL's heart is pounding so hard he can barely hear
	him.

	The WAITER comes to ask about the order, SOLLOZZO turns to
	speak, and without warning, MICHAEL shoves the table away
	from him with his left hand, and with his right hand puts
	the gun right against SOLLOZZO's head, just touching his
	temple.  He pulls the trigger, and we see part of SOLLOZZO's
	head blown away, and a spray of fine mist of blood cover the
	entire area.

	The WAITER looks in amazement; suddenly his white jacket is
	sprayed and stained with blood.

	SOLLOZZO seems in a perpetual fall to the floor; through he
	seems to hang in space suspended.

	MICHAEL pivots, and looks:

	There is McCLUSKEY, frozen, the fork with a piece of veal
	suspended in air before his gaping mouth.

	MICHAEL fires; catching McCLUSKEY in his thick bulging
	throat.  He makes a horrible, gagging, choking sound.  Then
	coolly, and deliberately, MICHAEL fires again, fires right
	through McCLUSKEY's white-topped skull.

	The air is filled with pink mist.
	MICHAEL swings toward the MAN standing by the bathroom wall.
	He does not make a move, seemingly paralyzed.
	Now he carefully shows his hands to be empty.
	The WAITER steps backward through the mist of blood, an
	expression of horror on his face.
	MICHAEL looks at his two victims:
	SOLLOZZO still in his chair, side of his body propped up by
	the table.
	McCLUSKEY finally falls from the chair to the table.
	MICHAEL is wildly at a peak.  He starts to move out.  His
	hand: is frozen by his side, STILL GRIPPING THE GUN.
	He moves, not letting the gun go.

	MICHAEL's face; frozen in its expression.

	His hand: still holding the gun.

	His face: finally he closes his eyes.

	His hand relaxes, the gun falls to the floor with a dull thud.

	He walks quickly out of the restaurant, looks back.

	He sees a frozen tableau of the murder; as though it had
	been recreated in wax.

	Then he leaves.

	---------------------------------------FADE OUT---------

	FADE IN:

	INT DAY: MATTRESS (WINTER 1945)

	A MAN is his shirtsleeves plays a sentimental tune on an old
	upright piano, while his cigarette burns on the edge.
	ANOTHER stands nearby, listening quietly.

	A little distance away, TEN MEN sit around a crude table,
	quietly eating.  They talk in low, relaxed voices, and there
	is an occasional laugh.

	ROCCO LAMPONE stands by a window, which has been covered
	with a heavy-mesh wire grating, gazing out.

	A large bowl of pasta is passed, and the MEN eat heartily.

	The sentimental tune is continued over the following:

	INT DAY: BODIES IN CAR (WINTER 1945)

	A MAN and a WOMAN, blood coming out of their noses, lie
	still together in a bullet-riddled automobile.

	INT DAY: BODY IN BARBER SHOP (WINTER 1945)

	A MAN is covered by a sheet on the floor of a barber shop.

	INT DAY: MATTRESS

	Ten mattresses are spread out around the otherwise empty
	living room of an apartment.  THREE or FOUR MEN including
	CLEMENZA, are taking naps.

	An arsenal of hand guns are spread out on a card table.

	The MEN at the table continue their dinner; passing and
	pouring the wine.

	Trash is thrown in 2 or 3 garbage cans kept in the apartment.

	INT DAY: BODY IN OFFICE (WINTER 1945)

	A MAN, his clothes soaked in blood, lies on the floor of an
	office building, dead, under an enormous portrait of Harry S.
	Truman.

	EXT DAY: BODY ON STOOP (WINTER 1945)

	ANOTHER MAN, his trousers soaked in blood, lies spanning
	three steps of a front stoop.

	INT NITE: MATTRESS (WINTER 1945)

	TESSIO, sits in a simple straight-backed chair, doing a
	crossword puzzle.

	A thin, boyish BUTTON MAN, writes a letter.

	Six or seven empty mattresses, with tossed unmade blankets.
	Coffee cans beside them serve as ash trays.

	A MAN by the table pulls the cork on another bottle of
	Ruffino, and wine is poured as the MEN eat.

	EXT DAY: BODY IN ALLEY (WINTER 1945)

	A CORPSE is half out of an overturned garbage can in a quiet
	alley.

	INT DAY: BODY AT TABLE (WINTER 1945)

	A MAN in a formal jacket and tie is slumped over a table, in
	a pool of blood on the tablecloth.

	INT DAY: MATTRESS (WINTER 1945)

	A neatly stacked pile of newspapers in the corner of an
	apartment.  We catch a glimpse of one headline: "Five Family
	War..."

	The table.  The MEN are sitting around cracking nuts.  ONE
	has fallen asleep on his arms at the table.

	SEVERAL MEN are taking naps on the Mattresses.

	The PIANO PLAYER finishes the tune with finesse.  Picks up
	and takes a drag from his cigarette.  The OTHER MAN nods
	appreciatively.

				MAN
		Nice Augie...nice.

	EXT DAY: MANCINI BLDG. (SPRING '46)

	Several cars are parked in front of a pleasant New York
	apartment building.  We recognize a couple of SONNY's
	bodyguards loafing by the cars, pitching playing cards
	against the curb.

	Inside the building, two others wait quietly by the rows of
	brass mailboxes: they have been there quite awhile.

	Up one flight of stairs, a single man sits on the step,
	smoking a cigarette.

	One of the men by the mailboxes checks his pocketwatch,
	which is attached to a key chain.  We HEAR the sound of a
	door opening; they look up.

	The man sitting on the stop stands; and looks.

	SONNY backs out of an apartment, the arms of LUCY MANCINI
	wrapped around him.  She doesn't want to let go of him; she
	draws him back into the apartment for a moment, and then he
	comes out alone, adjusting his clothes.

	He jauntily skips down the steps, trailed by the bodyguard
	on the first floor, and moves outside toward his car.  The
	men quickly take up their positions.  As he gets in his car:

				DRIVER
		Pick up your sister?

				SONNY
		Yeah.

	The car drives off; accompanied and escorted by the
	bodyguards in their cars.

	INT DAY: CONNIE'S HALL (SPRING '46)

	He knocks on the door.  No answer.  Then again.

				CONNIE'S VOICE
		Who is it?

				SONNY
		It's me, Sonny.

	We hear the bolt slide back, and see the door open.  SONNY
	enters, but CONNIE has quickly moved into the hallway, her
	back to him.

				SONNY
			  (tenderly)
		Connie, what is it?

	He turns her around in his arms.

	Her face is swollen and bruised; and we can tell from her
	rough, red eyes that she has been crying for a long time.
	As soon as he realizes what's happened, his face goes red
	with rage.  She sees it coming, and clings to him, preventing
	him from running out of the apartment.

				CONNIE
			  (desperately)
		It was my fault!  I started a fight
		with him and I tried to hit him so
		he hit me.  He didn't even try to
		hit me hard Sonny, I walked into it.

	Sonny listens, and calms himself.  He touches her shoulder,
	the thin silk robe.

				SONNY
		I'm goin' to have the doctor come
		over and take a look at you.

	He starts to leave.

				CONNIE
		Oh Sonny, please don't do anything.
		Please don't.

	He stops, and then laughs good naturedly.

				SONNY
		Hey.  Con.  What'm I goin' to do?
		Make your kid a orphan before he's
		born.

	She laughs with him.  He kisses her reassuringly, and leaves.

	EXT DAY: CONNIE'S STREET

	CARLO settles down on the front steps of the 112th St.
	"Book" with SALLY RAGS and COACH, who have been drinking
	beer out of glasses and a pitcher of beer from around the
	corner.  The ball game is blaring from the radio; and the
	kids on the street are still playing stickball.

	CARLO has barely settled down, when the kids in the street
	suddenly scatter, and a car comes screeching up the block
	and to a halt in front of the candy store.  The tires
	scream, and before it seems as though it has even stopped, a
	MAN comes hurtling out of the driver's seat, moving so fast
	the everyone is paralyzed.  It is a moment before we
	recognize that it is SONNY.

	His face is contorted with anger; in a split second he is on
	the stoop and has CARLO by the throat.

	He pulls CARLO away from the others, trying to get him down
	into the street.  But CARLO reaches out for the iron railing,
	and hangs on, his hand in a lock, cringing away, trying to
	hide his head and face in the hollow of the his shoulders.
	His shirt is ripped away in SONNY's hand.

	SALLY RAGS and COACH, merely sit, watching, stunned.

	SONNY is pounding the cowered CARLO with all his strength,
	in a continuous monologue of indistinguishable cursing.  His
	blows are powerful; and begin to draw blood.

	The kids who have been playing stickball, move up, watching
	in fascination.

	CARLO's hands are clenched tight around the railing.

	SONNY beats him mercilessly.

	Now SONNY's bodyguards' car pulls up, and they too become
	spectators.

	SONNY's tight fists are going down like hammers, into
	CARLO's face and body.

	CARLO's nose is bleeding profusely; but still he does
	nothing, other than hang onto the railing.

	SONNY grabs hold of CARLO's massive body, and tries to drag
	him off of the hold on the railing, his teeth clenched in
	the effort.  Then he tries loosening CARLO's locked hands;
	even biting them.  CARLO screams but he does not let go.

	It's clear that CARLO is much stronger than he is, and will
	not be moved.  SONNY knees him in the mouth, and beats him
	more; but he is exhausted.  Totally out of breath, he
	stammers haltingly to the bleeding CARLO.

				SONNY
		You...bastard...You...hurt my
		sister... again...and I'll
		kill...you.

	He wipes the sweat from his face, and then turns suddenly.
	and hurries back to the car, in a moment his car is gone,
	leaving even his bodyguards in confusion.  We notice ONE MAN
	with a sports jacket in the group of spectators especially
	interested.

	CARLO finally relaxes the clenched, locked hands.  He slumps
	onto the stoop.

	---------------------------------------FADE OUT---------

	FADE IN:

	EXT DAY: MALL (SPRING 1946)

	HIGH ANGLE on the Corleone Mall.  It is a gray, rainy day.
	Young BUTTON MEN in raincoats stand in quiet groups of
	various points around the main house and compound.  Things
	have changed; one house has been extensively enlarged; a new
	and secure gate house has been built.  Security measures
	that had been make-shift and temporarily have now been made
	a permanent part of the Mall, evolving it into a Medieval
	Fortress.  We notice a huge crater in the courtyard; the
	result of a recent bomb attempt.  The house nearest the
	crater is damaged by fire.

	A taxi arrives; KAY ADAMS steps out, huddled in a bright
	yellow raincoat; she lets the cab go, and hurries to the
	shelter of the gate house.

	They are not expecting her, and ask her to wait while they
	call the main house.

	KAY looks at the imposing, depressing Mall, while rain still
	runs down onto her face.

	She notices the bomb crater, and the fire damage; and the
	sullen faces of the BUTTON MEN.

	TOM HAGEN exits the Main House, and hurries toward her.

				HAGEN
		Kay, we weren't expecting you.  You
		should call...

				KAY
		I've tried calling and writing.  I
		want to reach Michael.

				HAGEN
		Nobody knows where he is.  We know
		he's all right, but that's all.

	KAY looks in the direction of the crater, filling with
	rainwater.

				KAY
		What was that?

				HAGEN
		An accident.  No one was hurt.

				KAY
		Listen Tom, I let my cab go; can I
		come in to call another one?

	TOM is clearly reluctant to involve her any more than he has
	to.

				HAGEN
		Sure...I'm sorry.

	They hurry through the rain and into the Main House.

	INT DAY: DON'S LIVING ROOM (SPRING 1946)

	In the living room, KAY shakes the water from her coat and
	takes her rainhat off.

				KAY
		Will you give this to him.

				HAGEN
		If I accept that letter and you
		told a Court of Law I accepted it,
		they would interpret it as my
		having knowledge of his whereabouts.
		Just wait Kay, he'll contact you.

	We hear footsteps descending the staircase; MAMA CORLEONE
	enters the room; the OLD WOMAN squints at KAY, evaluating her.

				MAMA
		You're Mikey's little girl.

	KAY nods yes; there are still tears in her eyes.

				MAMA
		You eat anything?

	KAY shakes her head.

				MAMA
			  (to HAGEN)
		Disgrazia, you don't even give the
		poor girl a cup of coffee?

	HAGEN shrugs helplessly; on an impulse, KAY quickly moves
	toward MAMA, the letter extended.

				KAY
		Will you give this letter to Michael.

				HAGEN
		Mama, no.

				MAMA
		You tell me what to do?  Even he
		don't tell me what to do.

	She takes the letter from KAY, who is grateful and relieved.

				KAY
		Why did they blame Michael?

				MAMA
		You listen to me, you go home to
		your family, and you find a good
		young man and get married.  Forget
		about Mikey; he's no good for you,
		anymore.

	She looks directly into KAY's eyes; and KAY understands what
	that means.

	EXT DAY: DON'S HOSPITAL (SPRING 1946)

	A hospital in New York City.  POLICE and teams of PRIVATE
	DETECTIVES are stationed guarding the area.  An ambulance
	with a team of DETECTIVES and BUTTON-MEN GUARDS exit the
	hospital with rifles in hand; followed by SEVERAL HOSPITAL
	ASSISTANTS wheeling a hospital stretcher, presumably carrying
	the DON.

	TESSIO and CLEMENZA emerge, with OTHER BUTTON MEN bringing
	up the rear.  HAGEN walks with the stretcher, and for a
	moment they disappear behind the ambulance.  Then suddenly,
	siren blasting, it speeds off, accompanied by dark low-slung
	cars.

	EXT DAY: MALL (SPRING 1946)

	The Corleone Mall.

	Equally impressive security stands ready at the Corleone
	Mall.  EXTRA BUTTON MEN, as well as SOME POLICE, and PRIVATE
	DETECTIVES.

	It all seems to be under the supervision of ROCCO LAMPONE.
	All is silent.  The WOMEN and CHILDREN, dressed in Sunday
	clothes, wait.

	EXT DAY: AMBULANCE (SPRING 1946)

	One ambulance, speeding along the Grand Central Parkway,
	preceded and followed by a dark car, each one carrying a
	team of BUTTON MEN.

	Sitting next to the DRIVER of the ambulance is a GUARD with
	a rifle on his lap.

	INT DAY: DON'S HALL (SPRING 1946)

	Inside the Main CORLEONE House:

	Hospital ORDERLIES carry the DON on his stretcher carefully
	under the watchful eyes of CLEMENZA, TESSIO, LAMPONE and
	various GUARDS and BUTTON MEN.

	All the CORLEONE family is here today: MAMA, FREDO, SANDRA,
	THERESA, CONNIE, CARLO; the various CORLEONE CHILDREN.

	INT DAY: DON'S BEDROOM (SPRING 1946)

	The DON is made comfortable in his room, which has all but
	been converted into a hospital room, with complete and
	extensive equipment.  The various CHILDREN get a turn to
	kiss the OLD MAN, as he is made comfortable... and then
	SONNY indicates that all the CHILDREN, WOMEN, and CARLO
	should leave.

	They do, the door is closed.

	INT DAY: DON'S DINING ROOM (SPRING 1946)

	The mood is quite happy downstairs, as the WOMEN prepare the
	Sunday dinner, and set the table.

	CARLO sits alone among them, a frown on his face.

				CONNIE
		What's the matter, Carlo?

				CARLO
		Shut up.

	INT DAY: DON'S BEDROOM (SPRING 1946)

	All the MEN of the family stand around the hospital bed with
	grim faces, SONNY and HAGEN closest to the OLD MAN.  The DON
	does not speak, yet he asks questions with his looks and
	glances, as clearly as if they were verbalized.  HAGEN is
	the spokesman for the family.

				HAGEN
		...since McCluskey's killing, the
		police have cracked down on most of
		our operations...on the other
		families too.  There's been a lot
		of bad blood.

	The OLD MAN glances at SONNY.

				SONNY
		Pop, they hit us and we hit them
		back.

				HAGEN
		We put out a lot of material
		through our contacts in the
		Newspapers...about McCluskey's
		being tied up with Sollozzo in the
		Drug Rackets...things are starting
		to loosen up.

	The OLD MAN nods.

				SONNY
		Freddie's gonna go to Las
		Vegas...under the protection of Don
		Francesco of L.A.  I want him to
		rest...

				FREDO
		I'm goin' to learn the casino
		business.

	The DON nods approvingly.  Then he searches around the room
	for a face he does not see.  HAGEN knows who he's looking for.

				HAGEN
		Michael...
			  (he takes a breath)
		It was Michael who killed Sollozzo.

	The DON closes his eyes, and then reopens them in anger and
	rage.

				HAGEN
		He's safe now...we're already
		working on ways to bring him back.

	The DON is very angry, he motions with a weak hand that they
	leave him alone.

	INT. DAY: DON'S STAIRS AND HALL (SPRING 1946)

	HAGEN is very upset as he comes down the Stairs; SONNY is
	expansive and optimistic.

				SONNY
		We'll let the old man take it easy
		for a couple of weeks.  I want to
		get things going good before he
		gets better.  What's the matter
		with you?

				HAGEN
		You start operating, the five
		families will start their raids
		again.  We're at a stalemate Sonny,
		your war is costing us a lot of
		money.

				SONNY
		No more stalemate Tom, we got the
		soldiers, we'll match them gun for
		gun if that's how they want it.
		They know me for what I am, Tom--
		and they're scared of me.

				HAGEN
		Yes.  That's true, you're getting a
		hell of a reputation.

				SONNY
		Well it's war!  We might not be in
		this shape if we had a real war-
		time Consiglere, a Sicilian.  Pop
		had Genco, who do I have?
			  (TOM starts to leave)
		Hey Tom, hey...hey.  It's Sunday,
		we're gonna have dinner.  Don't be
		sore.

	INT DAY: DON'S DINING ROOM (SPRING 1946)

	The FAMILY, WIVES, CHILDREN and all sit around the table
	over Sunday dinner.  SONNY is at the head of the table.

	EXT DAY: MALL (SPRING 1946)

	SOME of the CORLEONE GRANDCHILDREN play in the enclosed
	Mall, in the proximity of the BUTTON MEN stationed liberally
	by the gate.

	ONE CHILD misses a ball, it rolls by the gate house.  A
	young BUTTON MAN scoops it up and throws it back, smiling.

	-----------------------------------------FADE OUT-------

	INT DAY: CONNIE'S APT. (SPRING 1946)

	CONNIE and CARLO's apartment.  She's in a slip, on the phone.
	We HEAR the shower going in the bathroom.

				CONNIE
		Who is this?

				GIRL (O.S.)
			  (giggle)
		I'm a friend of Carlo's.  I just
		wanted to tell him I can't see him
		tonight; I have to go out of town.

	CONNIE's face turns red.

				CONNIE
		You lousy tramp bitch.
			  (click)


	She slams the phone down; just as CARLO is coming out of the
	bathroom drying his golden body.

				CARLO
		What was that?

				CONNIE
		Your girl friend.  She says she
		can't make it tonight.  You lousy
		bastard you have the nerve to give
		your whores my telephone number.
		I'll kill you, you bastard!

	She hauls off and punches him knowingly; he laughs, so then
	she flings herself at him, kicking and scratching; her heavy
	belly heaving under the thin slip.

				CARLO
			  (defending himself)
		You're crazy.  She was kidding
		around; I don't know, some nut.

	He pushes her aside, and moves into the bedroom to continue
	dressing.

				CONNIE
		You're staying home.  You're not
		going out.

				CARLO
		OK, OK.  You gonna make me something
		to eat at least?

	That calms her down; she stands there a moment, breathing
	heavily; and then she nods, and goes into the kitchen, and
	starts her wifely duties.

	CARLO is dressed; puts on some cologne; CONNIE appears in
	the doorway.

				CONNIE
		The food is on the table.

				CARLO
		I'm not hungry yet.

				CONNIE
		Eat it, it's on the table.

				CARLO
		Ba Fa Goulle.

				CONNIE
		BA FA GOULE YOU!

	She turns deliberately, goes out into the kitchen.  A moment
	later we begin to hear the sound of dishes breaking.  CARLO
	slowly walks out, where we can see CONNIE systematically
	smashing all the dishes against the sink, sending the greasy
	veal and peppers all over the apartment floor.

				CARLO
		You filthy guinea spoiled brat.
		Clean it up or I'll kick your head
		in.

				CONNIE
		Like hell I will.

	She stands there, solid, ready to punch him again.  Slowly,
	he slides his belt out of his trousers, and doubles it in
	his hand.

				CARLO
		Clean it up!

	He swings the belt against her heavy hips.  She moves back
	into the kitchen, and gets a kitchen knife, and holds it
	ready.

				CARLO
		Even the female Corleones are
		murderers.

	He puts the strap down on a table, and moves after her.  She
	makes a sudden thrust at his groin, which he avoids.  He
	pulls the knife away, cutting his hand in the process.  She
	gets away momentarily, but he pursues her around the table,
	gets her; and starts to slap her in the face.

	She breaks away from him, and rushes into the bedroom.

				CONNIE
		The baby!  The baby!

	INT DAY: CONNIE'S BEDROOM  (SPRING 1946)

	She runs into the bedroom; he follows.  She moves into a
	corner, and then like a desperate animal, tries to hide
	under the bed.

	He reaches under, and pulls her out by the hair.

	He slaps her in the face until she begins to weep; then he
	throws her on the bed, contemptuously.  He grabs part of her
	thigh, pinching it very hard.

				CARLO
		You're fat as a pig.

	Then he pushes her away, and walks out of the room, leaving
	her in tears.  She is crying; she pulls herself to the
	bedroom phone, and in a whisper:

				CONNIE
		Mama...mama, it's Connie.  Mama, I
		can't talk any louder.  No, I don't
		want to talk to Sonny.

	We can tell that the phone has been passed to SONNY.

	INT DAY: DON'S KITCHEN (SPRING 1946)

	In the kitchen at the Mall, MAMA cannot understand the
	whispering and she has given the phone to SONNY.

				SONNY
		Yeah Connie.

				CONNIE (O.S.)
		Sonny, just send a car to bring me
		home.  I'll tell you then, it's
		nothing Sonny, don't you come.
		Send TOM, please Sonny, it's
		nothing; I just want to come home.

	SONNY's face is turning red.

				SONNY
			  (in a controlled voice)
		You wait there.  You just wait there.

	He hangs up the phone; and just stands there for a moment.

				SONNY
			  (quietly)
		That sonofabitch; that sonofabitch...

	HAGEN enters the room; he knows what is happening, knows he
	cannot interfere.

	EXT DAY: MALL

	SONNY leaves the house.  HAGEN moves to the outside mall
	just as SONNY's car is driving off.  He moves to a group of
	BUTTON MEN.

				HAGEN
		Go after him.

	EXT DAY: CAUSEWAY (SPRING 1946)

	SONNY's car on the Jones Beach Causeway, speeds quickly by.
	After a pause, another car, with the CORLEONE BODYGUARDS, is
	trailing.

	SONNY is driving; he is very angry.

	EXT NITE: TOLL BOOTHS (SPRING 1946)

	SONNY in his car; driving back.  Still breathing hard and
	still furious.  Then he thinks it's funny; he enjoyed it.
	He starts laughing, louder and louder, as he pulls up to a
	toll booth, stops, and extends his hand with a coin to the
	COLLECTOR.

	---------------------------------------FADE OUT---------

	FADE IN:

	INT NITE: AMERIGO BONASERA'S APARTMENT

	The serious-faced UNDERTAKER is on the telephone.

				HAGEN (O.S.)
		This is Tom Hagen.  I'm calling for
		Don Corleone, at his request.

	BONASERA looks at his WIFE, with deep anxiety in his eyes.
	BONASERA's lips are suddenly dry.

				BONASERA
		Yes, I understand.  I'm listening.

				HAGEN (O.S.)
		You owe the Don a service.  In one
		hour, not before, perhaps later, he
		will be at your funeral parlor to
		ask for your help.  Be there to
		greet him.  If you have any
		objections speak now, and I'll
		inform him.

	Silence.  BONASERA stutters, then speaks in fright.

				BONASERA
		Anything...Anything the Godfather
		wishes.

				HAGEN (O.S.)
		Good.  He never doubted you.

				BONASERA
		The Don himself is coming to me
		tonight?

				HAGEN (O.S.)
		Yes.
			  (click)


	BONASERA is sweating; slowly he lowers the phone; his WIFE
	sees his pale expression, and follows him into the room.

	Silently, he begins the ritual of dressing.  His WIFE knows
	something serious is happening, and never takes her eyes
	from him.  He lights a cigarette.

				BONASERA
		For the last year, they have been
		killing one another.  So now, what?
		Your Godfather comes to me...Why?
			  (whispering, slyly)
		They've killed someone so important
		that they wish to make his body
		disappear.

				MRS. BONASERA
			  (frightened)
		Amerigo!

				BONASERA
		They could make me an accomplice to
		their murder.  They could send me
		to jail!

	He slips into his trousers.  Then he moves to his WIFE to
	tie his tie, as she has done for years.

				BONASERA
		And if the other families find
		out...they will make me their enemy.
		They could come here to our house.
		I curse the day I ever went to the
		Godfather.

	EXT NITE: FUNERAL PARLOR (SPRING 1946)

	With his ring of keys, he opens the funeral parlor, enters.

	INT NITE: FUNERAL PARLOR (SPRING 1946)

	BONASERA walks through the darkened funeral parlor, without
	turning on the lights; then into the rear, preparation room,
	past the tables, and equipment.  He operates the chain that
	lifts a large overhead garage type door.  And looks out into
	the alley.

	He sits on a bench, and waits.

	EXT NITE: FUNERAL PARLOR ALLEY (SPRING 1946)

	The tires of a car roll very quietly along the small alley;
	we notice a dark car approach the rear of BONASERA's funeral
	parlor.

	CLEMENZA gets out, and moves to the open, rear door.
	BONASERA greets him, too petrified to speak.  He notices TWO
	OTHER MEN get out of the car, and carry a stretcher with a
	CORPSE swaddled in a gray blanket, with yellowed feet
	protruding.

	BONASERA closes his eyes in fear, but indicates which way
	the MEN should carry their sinister burden.

	INT NITE: FUNERAL PARLOR EMBALMING ROOM (SPRING 1946)

	They carry the CORPSE to one of the tables in the embalming
	room.

	Then BONASERA turns to see ANOTHER MAN step out of the
	darkness somewhat uncertainly.  It is DON CORLEONE.

	He walks up to BONASERA, very close, without speaking.  His
	cold eyes looking directly at the frightened UNDERTAKER.
	Then, after a long gaze:

				DON CORLEONE
		Well my friend, are you ready to do
		me this service?

	BONASERA nods.  The DON moves to the CORPSE on the embalming
	table; he makes a gesture, and the OTHER MEN leave them alone.

				BONASERA
		What do you wish me to do?

				DON CORLEONE
			  (staring at the table)
		I want you to use all your powers,
		all your skill, as you love me.  I
		do not want his mother to see him
		as he is.

	He draws down the gray blanket.

	BONASERA lets out a gasp of horror at what he sees:

	The bullet-smashed face of SONNY CORLEONE.

	EXT NITE: TOLL BOOTHS (SPRING 1946)

	SONNY extends his hand with a coin at the toll booth.

	A car suddenly swerves in front of him, trapping him in the
	booth, and in incredible rally of machine gun fire greets
	him, coming through and smashing the windows of the toll
	booths on both side of him, and from the front window of the
	car blocking him.

	The windows of his car are shot out.

	Bullet holes puncture the doors of his car.

	His hand, with the coin in it, falls inside the car.

	His arms, shoulders are riddled by the fire, and still it
	continues, as though the ASSASSINS cannot take a chance that
	he will survive it.

	Suddenly, he lets out an enormous ROAR, like a bull, and
	actually, opens the door, and steps out of the car, UNDER
	fire.

	His face is hit; and finally he falls to the ground.

	A FULL SHOT...as the ASSASSINS scramble for their cars and
	make off in the distance.

	SONNY's BODYGUARDS stop a safe distance away, realizing they
	are too late.

	INT NITE: DON'S LIVING ROOM (SPRING 1946)

	View on HAGEN's ashen face in the living room.  He is silent
	a moment, and then:

				HAGEN
			  (quietly)
		OK.  Go to Clemenza's house and
		tell him to come here right away.
		He'll tell you what to do.

	The MEN leave him alone.  He is quiet, standing in the
	middle of the living room a moment.  He looks in the
	direction of the kitchen, where he can see fragments of MAMA
	moving around.

	INT NITE: UPSTAIRS (SPRING 1946)

	TOM proceeds up stairs, and quietly in the direction of the
	DON's room.  He opens the DON's door.  Looks in.

	INT NITE: DON'S BEDROOM (SPRING 1946)

	The DON in his hospital bed.  Asleep under sedation.  HAGEN
	hesitates.  He cannot go in; he cannot tell the OLD MAN.  He
	closes the door.

	INT NITE: DON'S OFFICE (SPRING 1946)

	HAGEN alone in the office.  He is drinking.  He looks up at
	the sound of cars; the CAPOREGIMES are arriving.  Then he
	hears footsteps.

	The door opens; and in a robe, with slippers, DON CORLEONE
	slowly enters the room.  He walks directly to his stuffed
	armchair, sits down.  His face is stern, as he looks into
	HAGEN's eyes.

				DON CORLEONE
		Give me a drop of anisette.

	HAGEN rises, and pours a glass for the OLD MAN.

				DON CORLEONE
		My wife was weeping before she fell
		asleep, outside my window I saw my
		caporegimes to the house, and it is
		midnight.  So, Consigliere of mine,
		I think you should tell your Don
		what everyone knows.

				HAGEN
			  (quietly)
		I didn't tell Mama anything.  I was
		about to come up and wake you and
		tell you.  Just now.

				DON CORLEONE
		But you needed a drink first.

				HAGEN
		Yes.

				DON CORLEONE
		Now you've had your drink.

	Pause.

				HAGEN
		They shot Sonny on the Causeway.
			  (pause)
		He's dead.

	DON CORLEONE blinks.  One feels that just for a second he
	loses all physical strength; he clasps his hands in front of
	him on the top of the desk and looks into HAGEN's eyes.

				DON CORLEONE
		I want no inquiries made.  No acts
		of vengeance.
			  (pause)
		Consigliere, arrange a meeting with
		the heads of the five
		families...this war stops now.

	He rises and unsteadily leaves the room, turns...

				DON CORLEONE
		Call Bonasera...he will do me a
		service.

	And leaves.  HAGEN moves to the phone; dials...

				HAGEN
		This is Tom Hagen; I'm calling for
		Don Corleone, at his request.

				BONASERA (O.S.)
		Yes, I understand I'm listening.

				HAGEN
		You owe the Don a service.  He has
		no doubt that you will repay it.

	EXT DAY: BANK BUILDING (SPRING 1946)

	Day in Manhattan.  An impressive Bank Building in the
	financial center of New York.  Many limousines are parked,
	uniforms and plain-clothed CHAUFFEURS waiting quietly.

	INT DAY: BOARD ROOM (SPRING 1946)

	The Board Room of a bank, daylight shines in the windows.

	CARLO TRAMONTI, an impressive, handsome middle-aged man,
	sits quietly, smoking a Di Napoli cigar, OUR VIEW moves to a
	MAN sitting to his left, and a little to the rear, and
	settles on JOSEPH ZALUCHI, a moon-faced amiable-looking man;
	as the view continues, around the table, we HEAR:

				DON CORLEONE (O.S.)
		I want to thank you all for coming.
		I consider it a service done to me
		personally and I am in the debt of
		each and every one of you.
		Especially those of you who have
		traveled from such distances as
		California, St. Louis, Kansas City;
		and New Orleans...

	The VIEW PASSES to FRANK FALCONE and ANTHONY MOLINARI, both
	younger than any of the others; then on to DOMENICK PANZA,
	short and squat sitting in a wheelchair; then around the
	table to DON VINCENENZO FORLENZA, who is whispering to his
	JEWISH ASSISTANT; the VIEW PASSES on to ANTHONY STRACCI, an
	older man, sipping from a drink and smoking a cigar; OTTILIO
	CUNEO, in his middle sixties with a jolly round face; then
	DON PHILLIP TATTAGLIA, a delicate older man with dyed hair
	and a pencil mustache; and finally, EMILIO BARZINI, in his
	early sixties, a man to 'respect'; whom we had seen at
	CONNIE's Wedding.

				DON CORLEONE
		Ah well, let's get down to business.
		We are all honorable men here, we
		don't have to give assurances as if
		we were lawyers.
			  (he sits, gazes out
			  at them, and sighs)
		How did things ever go so far?
		Well, no matter.  A lot of
		foolishness has come to pass.  It
		was so unfortunate, so unnecessary.

	The VIEW examines the room once again, as the DON speaks.  A
	large, clicking board is changing numbers at various times,
	and two tapes, showing the fluctuations of the Market during
	the day's trading, and projected above.

	DON CORLEONE pauses; and TOM HAGEN hands him a cold drink.

				DON CORLEONE
		Tattaglia has lost a son; I have
		lost a son.  We are quits.  Let
		there be a peace...
			  (he gestures
			  expressively,
			  submissively, with
			  his hands)
		That is all I want...

				BARZINI
		Don Corleone is too modest.  He had
		the judges and politicians in his
		pocket and he refused to share them.
		His refusal is not the act of a
		friend.  He takes the bread out of
		the mouths of our families.  Times
		have changed, it's not like the old
		days where everyone can go his own
		way.  If Don Corleone had all the
		judges and politicians in New York,
		then he must share them or let
		others use them.  Certainly he can
		present a bill for such services,
		we're not Communists, after all.
		But he has to let us draw water
		from the well.  It's that simple.

				DON CORLEONE
		My friends, I didn't refuse out of
		malice.  You all know me.  When
		have I ever refused an accommodation?
		But why, this time?  Because I
		think this drug business will
		destroy us in the years to come.
		It's not like whiskey or gambling
		or even women which most people
		want and is forbidden them by the
		pezzonovante of the Church and the
		Government.  But drugs?  No.  Even
		policemen, who help us in gambling
		and other things would refuse to
		help us in drugs.  But...I am
		willing to do whatever all of you
		think is necessary.

				DON ZALUCHI
		I don't believe in drugs.  For
		years I paid my people extra so
		they wouldn't do that kind of
		business...$200 a week.  But it
		didn't matter.  Somebody comes to
		them and says, "I have powders, if
		you put up three, four thousand
		dollar investment, we can make
		fifty thousand distributing."  Who
		can resist such a profit?
		There's no way to control it, as a
		business...to keep it respectable.
			  (rapping the table)
		I don't want it near schools!  I
		don't want it sold to children.
		That is an infamita.
			  (thinking)
		In my city I would try to keep the
		traffic in the dark people, the
		colored.  They are the best
		customers, the least troublesome,
		and they are animals anyway.  They
		have no respect for their wives or
		their families or themselves.  Let
		them lose their souls with drugs.
		But something has to be done, we
		can't have everybody running around
		doing just what they please, like a
		bunch of anarchists.

				BARZINI
		Then, are we agreed; the traffic in
		drugs will be permitted, but
		controlled; and Don Corleone agrees
		to give it protection in the East.

	DON CORLEONE nods.

				BARZINI
		That's the whole matter then, we
		have the peace, and let me pay my
		respects to Don Corleone, whom we
		have all known over the years as a
		man of his word.
			  (noticing TATTAGLIA
			  is uneasy)
		Don Philip?

				TATTAGLIA
		I agree to everything here, I'm
		willing to forget my own misfortune.
		But I must hear strict assurance
		from Corleone.  When time goes by
		and his position becomes stronger,
		will he attempt any individual
		vengeance?

	They all look at the DON; especially HAGEN, who feels that
	DON CORLEONE has given a great deal, and must have something
	else in mind.  Slowly the DON rises.

				DON CORLEONE
		I forego my vengeance for my dead
		son, for the common good.  But I
		have selfish reasons.  My youngest
		son had to flee, accused of
		Sollozzo's murder, and I must now
		make arrangements so that he can
		come home with safety, cleared of
		all those false charges.  That is
		my affair, and I will make those
		arrangements.
			  (with strength)
		But I am a superstitious man...and
		so if some unlucky accident should
		befall my youngest son, if some
		police officer should accidentally
		shoot him, or if he should hang
		himself in his cell, or if my son
		is struck by a bolt of lightning,
		then I will blame some of the
		people here.  That, I could never
		forgive, but...aside from that, let
		me swear by the souls of my
		Grandchildren that I will never be
		the one to break the peace we have
		made.

	EXT NITE: DON'S LIMO (SPRING 1946)

	The DON's black limousine.  He sits quietly in the padded
	rear seat; TOM HAGEN next to him.

	It is night.  Lights flash by them every so often.

				HAGEN
		When I meet with Tattaglia's
		people; should I insist that all
		his drug middle-men be clean?

				DON CORLEONE
		Mention it, don't insist.  Barzini
		is a man who will know that without
		being told.

				HAGEN
		You mean Tattaglia.

				DON CORLEONE
			  (shaking his head)
		Barzini.

				HAGEN
			  (a revelation)
		He was the one behind Sollozzo?

				DON CORLEONE
		Tattaglia is a pimp.  He could
		never have outfought Santino.  But
		I wasn't sure until this day.  No,
		it was Barzini all along.

	The black limousine speeds away from us in the night.

	------------------------------------------FADE OUT------

	FADE IN:

	EXT DAY: ESTABLISHING SICILY SHOT

	A CLOSE VIEW OF MICHAEL, moving as he walks, sullen and
	downcast, the left side of his face healed, but left
	grotesque and misshapen.

	GRADUALLY, THE VIEW LOOSENS, he wears a warm navy Pea
	jacket, and walks with his hands in his pockets.

	THE VIEW LOOSENS FURTHER, revealing a Sicilian SHEPHERD on
	either side of him, each carrying a shotgun slung over his
	shoulder, CALO, a squat and husky young man with a simple
	honest quality, and FABRIZZIO, slender and handsome, likable,
	and with a pleasing build.  Each of the SHEPHERDS  carry
	knapsacks.

	The THREE YOUNG MEN continue over the Sicilian landscape,
	overlooking an impressive view of land and sea.

	EXT DAY: SICILY ROAD

	The THREE move through a flock of wind-blown sheep, and make
	their way to a dusty rural road.  We HEAR a rinky horn
	sound, as a pre-war Italian automobile makes its way to them.
	An OLD MAN peeks from the window, waving to MICHAEL.  The
	car pulls in front of them and stops.  MICHAEL nods
	respectfully.

				MICHAEL
		Don Tommassino.

				DON TOMMASSINO
		Michael, why must you do this.  We
		have been lucky so far, all these
		months you've been here we've kept
		your name a secret.  It is from
		love for your father that I've
		asked you never to more than an
		hour from the Villa.

				MICHAEL
		Calo and Fabrizzio are with me;
		nothing will happen.

				DON TOMMASSINO
		You must understand that your
		Father's enemies have friends in
		Palermo.

				MICHAEL
		I know.

				DON TOMMASSINO
		Where are you going?

				MICHAEL
		Corleone.

				DON TOMMASSINO
		There is nothing there.  Not anymore.

				MICHAEL
		I was told that my Grandfather was
		murdered on its main street; and
		his murderers came to kill my
		father there when he was twelve
		years old.

				DON TOMMASSINO
		Long ago.  Now there is nothing:
		the men killed each other in family
		vendettas...the others escaped to
		America.

				MICHAEL
		Don Tommassino...I should see this
		place.

	DON TOMMASSINO thinks a moment, then concedes.

				DON TOMMASSINO
		That is your birthright...but
		Michael, use this car.

				MICHAEL
		No...I would like to walk to
		Corleone.

	The OLD MAN sighs, and then returns to his car.

				DON TOMMASSINO
		Be careful Michael, don't let them
		know your name.

	The old car sputters off; MICHAEL watches, and then continues
	on his journey.

	EXT DAY: COUNTRYSIDE

	The THREE pass through abundant areas of flowers and fruit
	trees, in bloom and bursting with life.

	EXT DAY: VILLAGE

	They continue in the empty streets of a little town; the
	post-war poverty is evident in the skinny dogs; and the
	empty streets.  Occasionally, a military vehicle, the only
	gasoline-powered vehicles on the road, will pass.  And there
	are many POLICE evident, most of them carrying machine guns.

	The THREE pass under an enormous banner slung over the main
	road "VOTA COMMUNISTA".

	EXT DAY: COUNTRY ROAD

	They continue through dusty country roads, where occasionally
	a donkey pulling a cart, or a lone horseman will pass them.

	EXT DAY: FIELD

	Out in a field, in the distance, they come upon a procession
	of peasants and activists, perhaps two hundred strong,
	marching, and singing, and in the lead, are five or six men
	carrying billowing red banners.

	EXT DAY: GROVE

	They are in an orange grove; on the other side of the trees
	is a deep, tall field of wild flowers.

	The Shepherds unsling their guns and knapsacks, and take out
	loaves of bread, some wine, sausage and cheese.

	MICHAEL rests against a tree, and uses his handkerchief.

				FABRIZZIO
		You tell us about America.

				MICHAEL
		How do you know I come from America?

				FABRIZZIO
		We hear.  We were told you were a
		Pezzonovanta...big shot.

				MICHAEL
		Only the son of a Pezzonovanta.

				FABRIZZIO
		Hey America!  Is she as rich as
		they say?

				MICHAEL
		Yes.

				FABRIZZIO
		Take me to America!  You need a
		good lupara in America?
			  (pats his shotgun)
		You take me, I'll be the best man
		you got.  "Oh say, can you
		seeee...By da star early light..."

	MICHAEL laughs.

	EXT DAY: ANOTHER ROAD

	The TRIO continues down a dirt road, as an American Military
	convoy speeds by; FABRIZZIO waves, and calls out to each of
	the U.S. drivers, as they move by.

				FABRIZZIO
		America.
		Hey America!
		Take me with you!
		Hey, take me to America G.I.!

	EXT DAY: CORLEONE HILL

	They continue their long hike, high on a promentory; until
	they hesitate, and look down.

				CALO
		Corleone.

	They can see a grim Sicilian village, almost devoid of people.

	EXT DAY: CORLEONE STREET

	MICHAEL and his bodyguards move through the empty streets of
	the village.  They walk behind him, and spread to either
	side about fifteen feet away from him.

	They move down ancient steps, past an old stone fountain.
	MICHAEL hesitates, cups his hands and drinks some water.
	They go on.

	They move up a very narrow old street.  MICHAEL looks at the
	doorways that they pass.

	MOVING VIEW: Each door has a plaque, with a ribbon or flower.

	CALO sees MICHAEL looking.

				CALO
		The names of the dead.

	MICHAEL hesitates in the center of the main street.  He looks.

	The street is empty, barren.  Occasionally, an old woman
	will pass.

	MICHAEL turns his head.

	The other side of the street: empty and deathly.

	A HIGH VIEW of MICHAEL standing in the center of the old
	street, the shepherds a respectful distance away.

	-------------------------------------FADE OUT-----------

	EXT DAY: BARONIAL ESTATE

	A green ribboned field of a baronial Estate.  Further ahead
	is a villa so Roman it looks as though it had just been
	discovered in the ruins of Pompeii.  There is a group of
	young village GIRLS accompanied by two stocky MATRONS,
	dressed in black.  They have been gathering the pink sulla,
	purple wisteria, and mixing them with orange and lemon
	blossoms.  They are singing, off in the distance as they work.

	MICHAEL, CALO and FABRIZZIO are silent as they watch this
	Fantasy-like scene.

				FABRIZZIO
			  (calling out to them)
		Hey, beautiful girls!

				MICHAEL
			  (sternly)
		Shhhhh.

	He settles down to watch.

	The GIRLS are dressed in cheap gaily painted frocks that
	cling to their bodies.  They are still in their teens, but
	developed and womanly.

	They are moving along the fields, picking blossoms, not
	aware of the three men watching them from the orange grove.
	Three or four of the girls begin chasing one of them
	playfully, in the direction of the grove.

	The GIRL being chased holds a bunch of purple grapes in her
	left hand and with the right, picks more grapes, and throws
	them back at her pursuers laughing.

	They come closer and closer.  Just short of the grove, she
	poses, startled, her large, oval shaped eyes catching the
	view of the THREE MEN.  She stands there on her toes about
	to run.

	MICHAEL sees her; now face to face.  He looks.

	Her face.  Incredibly beautiful with olive skin, black hair
	and a rich mouth.

				FABRIZZIO
			  (murmuring)
		Jesus Christ, take my soul.  I'm
		dying.

	Quickly, she turns, and runs away.

	MICHAEL stands up never taking his eyes from her.  We hold
	on him for a long while; and eventually hear the SHEPHERDS
	laughing.  Then he turns to them.

				FABRIZZIO
		You got hit by the thunderbolt, eh?

	CALO pats him on the shoulder.

				CALO
		Easy man.

				MICHAEL
		What are you talking about?

				FABRIZZIO
		You can't hide it when you're hit
		by the thunderbolt.

	EXT DAY: BARONIAL VILLAGE

	The little village built attendant to the Baronial Estate,
	is decked with the flowers the girls had been picking.

	MICHAEL, followed by the bodyguards, moves into the central
	square, and onto the balcony of a little cafe.

	The proprietor of the cafe, VITELLI, is a short burly man;
	he greets them cheerfully, and sets a dish of chickpeas at
	their table.

				FABRIZZIO
		You know all the girls in this
		town, eh?  We saw some beauties
		coming down the road.  One in
		particular got our friend hit with
		the Thunderbolt...
			  (he indicates MICHAEL)

	VITELLI gives a big knowing laugh, and looks at MICHAEL with
	new interest.

				VITELLI
		You had better bring a few bottles
		home with you, my friend; you'll
		need help sleeping tonight.
			  (he laughs)

				FABRIZZIO
		This one could seduce the devil.  A
		body! and eyes as big and black as
		olives.

				VITELLI
			  (laughing with
			  them...pouring more wine)
		I know about what you mean!

				FABRIZZIO
		This was a beauty.  Right, Calo?

				VITELLI
			  (laughing)
		Beautiful all over, eh?

				FABRIZZIO
		And hair.  Black and curly, like a
		doll.  And such a mouth.

	VITELLI does not laugh quite so much.

				VITELLI
		Yes, we have beautiful girls here...
		but virtuous.

	VITELLI is no longer drinking with them.

				MICHAEL
		She wore a red dress, and a red
		ribbon in her hair.  She looks more
		Greek than Italian.  Do you know a
		beauty like that?

	As MICHAEL describes her, VITELLI laughed less and less,
	until he wears a scowl.

				VITELLI
		No.

	Then he curtly leaves him, and walks into the back room.

				FABRIZZIO
		God in Heaven, I think I
		understand...

	He goes into the back room after the innkeeper.  Then he
	returns.

				FABRIZZIO
		Let's get out of here; he's boiling
		up his blood to do us mischief.
		It's his daughter.

	They start to leave; but MICHAEL doesn't move.

				CALO
		Come quickly.

				MICHAEL
		Innkeeper.  More wine!

				FABRIZZIO
			  (whispered)
		The old bastard mentioned two sons
		he only has to whistle up.

	MICHAEL turns to FABRIZZIO with his cold authority.

				MICHAEL
		Tell him to come to me.

	The two BODYGUARDS shoulder their luparas, and disappear in
	a moment they return with the red-faced angry VITELLI
	between them.

				MICHAEL
			  (quietly)
		I understand I've offended you by
		talking about your daughter.  I
		offer you my apologies, I'm a
		stranger in this country, I don't
		know the customs very well.  Let me
		say this, I meant no disrespect to
		you or her...

	CALO and FABRIZZIO are impressed.

				VITELLI
			  (shrugs)
		Who are you and what do you want
		from my daughter?

				MICHAEL
		I am an American hiding in Sicily
		from the police of my country.  My
		name is Michael.  You can inform
		the police and make your fortune
		but then your daughter would lose a
		father rather than gain a husband.
		In any case, I want to meet your
		daughter.  With your permission and
		under the supervision of your
		family.  With all decorum.  With
		all respect.  I am an honorable man.

	CALO and FABRIZZIO are stupefied; VITELLI pauses, and then
	asks:

				VITELLI
		Are you a friend of the friends?

				MICHAEL
		When the proper time comes, I'll
		tell you everything that a wife's
		father should know.

				FABRIZZIO
		It's the real Thunderbolt, then.

				VITELLI
			  (formally)
		Come Sunday morning:  My name is
		Vitelli and my house is up there on
		the hill, above the village.

				MICHAEL
		Your daughter's name?

				VITELLI
		Appolonia.

	-------------------------------------FADE OUT-----------

	EXT DAY: TOMMASSINO COURTYARD

	MUSIC comes up; as MICHAEL, dressed in new clothes from
	Palermo, and carrying a stack of wrapped gifts, gets into an
	Alfa Romeo.  CALO and FABRIZZIO each dressed in their Sunday
	best, are in the rear seat, huddled together, with their
	luparas on their shoulders.

	DON TOMMASSINO waves them off, as the little car drives off,
	rocky and bouncing on the dirt road.

	The Sunday churchbells ring.

	--------------------------------------DISSOLVE----------

	EXT DAY: VITELLI HOUSE

	MICHAEL is presented to each of the Vitelli relatives, by
	the yard of their little hilltop house; the BROTHERS; the
	MOTHER, who is given a gift; several UNCLES and AUNTS.
	Finally APPOLONIA enters, dressed beautifully in appropriate
	Sunday clothing.  Now he presents the wrapped gift to
	APPOLONIA.  She looks at her MOTHER, who with a nod gives
	her permission to open it.  She unwraps it.  Her eyes light
	at the sight of a heavy gold chain; to be worn as a necklace.

	She looks at him.

				APPOLONIA
		Grazia.

	--------------------------------------DISSOLVE----------

	EXT DAY: VITELLI CAFE

	Now the little Alpha drives into the village near VITELLI's
	cafe.

	MICHAEL is, as ever, accompanied with his two BODYGUARDS,
	though they are all dressed differently.

	They go up to the cafe...and sit with VITELLI, who is
	talking and talking.

	MICHAEL looks at APPOLONIA; who sits, respectfully quiet.
	She wears the gold necklace around her neck.

	--------------------------------------DISSOLVE----------

	EXT DAY: HILLTOP NEAR VITELLI HOME

	MICHAEL and APPOLONIA are walking through a hilltop path,
	seemingly alone, although a respectful distance apart.

	As the VIEW PANS with them, we notice that her MOTHER and a
	half dozen AUNTS are twenty paces behind them, and ten paces
	further behind are CALO and FABRIZZIO, their luparas on
	their shoulders.

	Further up the hill, APPOLONIA stumbles on a loose stone,
	and falls briefly onto MICHAEL's arm.  She modestly regains
	her balance, and they continue walking.

	Behind them, her MOTHER giggles to herself.

	--------------------------------------DISSOLVE----------

	EXT DAY: VITELLI VILLAGE CHURCH

	Church bells in an ancient belfry ring out.  Music, old and
	dissonant, plays.

	There is a bridal procession in the street of the village;
	the same in feeling and texture as it might have been five
	hundred years ago.

	Donkeys and other animals have been decorated with abundant
	flowers; children carrying candles and wearing white
	confirmation gowns walk in the procession, followed by
	countless townspeople, members of the clergy, even the police.

	We present the entire bridal procession and ceremony with
	all the ritual and pageantry, as it has always been, in
	Sicily.

	APPOLONIA is radiant as the Bride; MICHAEL is handsome
	despite the grotesque jaw and occasional white handkerchief.

	--------------------------------------DISSOLVE----------

	EXT NITE: VITELLI VILLAGE SQUARE

	CALO and FABRIZZIO dance wildly through the night of the
	great wedding celebration.  It is held in the Village
	Square; under the watchful eyes of SHEPHERDS above on the
	tops of buildings, carrying luparas.

	--------------------------------------DISSOLVE----------

	INT NITE: MICHAEL'S ROOM IN VILLA

	MICHAEL opens the shutters in his darkened room; moonlight
	fills the room.

	He turns, and there, in her wedding slip, is APPOLONIA.  A
	little frightened; but lovely.

	He moves to her; and for a moment just stands before her,
	looking at her incredible face; her lovely hair and body.

	Slowly and tenderly he kisses her.  Her tiny hands come up
	to his face; touch his cheek and embrace him.

	She lets her bridal slip fall to the floor.

	--------------------------------------FADE OUT----------

	INT DAY: MICHAEL'S ROOM AT VILLA

	Morning.  MICHAEL sits on the window ledge, gazing into the
	room.

	APPOLONIA is asleep; she is naked, and only partially
	covered by the bedsheets.

	He looks at her for a long time in the early morning light.

	EXT DAY: TOMMASSINO COURTYARD

	HIGH ANGLE ON DON TOMMASSINO'S VILLA

	We HEAR girlish laughter; the little Alpha is driving
	erratically, knocking down an occasional wall, and almost
	hitting th inner court wall.

	APPOLONIA is laughing, driving.  MICHAEL pretends to be
	frightened, as he teaches her to drive.

	Outside the walls, we notice SHEPHERDS with luparas, walking
	guard duty.

	The car stops and a laughing MICHAEL gets out.

				MICHAEL
		It's safer to teach you English.

				APPOLONIA
		Monday, Tuesday, Wednesday,
		Thursday, Friday...See, I learned
		it.  Now teach me to drive!

	DON TOMMASSINO enters the Courtyard.  He seems tired and
	concerned.

				MICHAEL
		Ciao, Don Tommassino.

	APPOLONIA kisses him.

				MICHAEL
		Things went badly in Palermo?

				DON TOMMASSINO
		The younger men have no respect.
		Things are changing; I don't know
		what will happen.  Michael, because
		of the wedding, people now know
		your name.

				MICHAEL
		Is that why there are more men on
		the walls?

				DON TOMMASSINO
		Even so, I don't think it is safe
		here anymore.  I've made plans to
		move you to a villa near Siracuse.
		You must go right away.

				MICHAEL
		What is it?

				DON TOMMASSINO
		Bad news from America.  Your
		brother, Santino.  He has been
		killed.

	For a moment, the whole world of New York, Sollozzo, the
	Five Family War, all comes back to MICHAEL.

	EXT DAY: VILLA COURTYARD

	Morning.  MICHAEL leans out of the bedroom window.

	Below, FABRIZZIO is sitting in one of the garden chairs,
	combing his thick hair.

	MICHAEL whistles and FABRIZZIO looks up to his window.

				MICHAEL
		Get the car.  I'll be leaving in
		ten minutes.  Where's Calo?

				FABRIZZIO
		Calo is having a cup of coffee in
		the kitchen.  Is your wife coming
		with you?

				MICHAEL
		No, she's going home to her family.
		She'll join me in a few weeks...

	INT DAY: VILLA KITCHEN

	MICHAEL, dressed, crosses from the hallway, and into the
	kitchen.  CALO is just finishing a bite.  He rises when he
	sees MICHAEL.

				CALO
		Should I get your bag?

				MICHAEL
		No, I'll get it.  Where's Appolonia?

				CALO
			  (smiling)
		She is sitting in the driver's seat
		of the car, dying to step on the
		gas.  She'll be a real American
		woman before she gets to America.

	MICHAEL smiles.

				MICHAEL
		Tell Fabrizzio and wait for me in
		the car.

	He leaves the kitchen, after a quick sip of coffee.

	He looks out from the opening in the doorway.

	EXT DAY: VILLA COURTYARD

	There is the car, with APPOLONIA sitting in the driver's
	seat, playing with the wheel like a child.

	CALO moves to the car, and puts a lunch basket in the rear
	seat.

	Then MICHAEL seems disturbed.

	Over, on the other side of the courtyard, he sees FABRIZZIO
	disappear through the gate.

				MICHAEL
			  (muttering to himself)
		Where the hell is he going?

	MICHAEL goes down the hallway, and outside.

	MICHAEL steps out into the bright sunlight of the outer
	courtyard, causing him to shade his eyes.

	APPOLONIA sees him, and waves, motioning that he should stay
	where he is.

				APPOLONIA
			  (calling out)
		I'll drive to you.

	He smiles affectionately.

	CALO stands beside the car, smiling, with his lupara dangling
	by his side.  There is no sight of FABRIZZIO.  Suddenly the
	smile fades from MICHAEL's face.  He steps forward and holds
	out his hand.

				MICHAEL
		No.  No!

	His shout is drowned in the roar of a tremendous EXPLOSION,
	as she switched on the ignition.

	Part of the wall is caved in, the kitchen door is blown off;
	and there is nothing left of the Alpha, or of Appolonia.

	MICHAEL is thrown against the wall, and knocked unconscious.

	INT DAY: VILLA BEDROOM

	MICHAEL is unconscious in a darkened room.  We hear
	whispering around him, but can't make any of it out.  A soft
	cloth is applied to his face; gradually his eyes open.  DON
	TOMMASSINO is there, close to him.  He looks at them and
	from their grave expressions, he knows his wife is dead.

				MICHAEL
		Fabrizzio.  Let your shepherds know
		that the one who gives me Fabrizzio
		will own the finest pastures in
		Sicily.

	--------------------------------------FADE OUT----------

	FADE IN:

	EXT DAY: MALL (SPRING 1951)

	Easter.

	A HIGH VIEW ON THE CORLEONE MALL in the springtime.  Hordes
	of little CHILDREN including many of the Corleone Children
	and Grandchilren, rush about carrying little Easter baskets,
	searching here and there for candy treasures and hidden
	Easter eggs.

	The DON himself, much older, much smaller in size, wearing
	baggy pants and a plaid shirt and an old hat, moves around
	his garden, tending rows and rows of rich tomato plants.

	Suddenly, he stops and looks.

	MICHAEL stands there, still holding his suitcase.

	Great emotion comes over the DON, who takes a few steps in
	MICHAEL's direction.

	MICHAEL leaves his suitcase and walks to his favorite son
	and embraces him.

				DON CORLEONE
		Be my son...

	INT DAY: THE OLIVE OIL FACTORY

	DON CORLEONE leads MICHAEL through the corridors of the
	building.

				DON CORLEONE
		This old building has seen its day.
		No way to do business...too small,
		too old.

	They enter the DON's glass-panelled office.

				DON CORLEONE
		Have you thought about a wife?  A
		family?

				MICHAEL
			  (pained)
		No.

				DON CORLEONE
		I understand, Michael.  But you
		must make a family, you know.

				MICHAEL
		I want children, I want a family.
		But I don't know when.

				DON CORLEONE
		Accept what's happened, Michael.

				MICHAEL
		I could accept everything that's
		happened; I could accept it, but
		that I never had a choice.  From
		the time I was born, you had laid
		this all out for me.

				DON CORLEONE
		No, I wanted other things for you.

				MICHAEL
		You wanted me to be your son.

				DON CORLEONE
		Yes, but sons who would be
		professors, scientists,
		musicians...and grandchildren who
		could be, who knows, a Governor, a
		President even, nothing's impossible
		here in America.

				MICHAEL
		Then why have I become a man like
		you?

				DON CORLEONE
		You are like me, we refuse to be
		fools, to be puppets dancing on a
		string pulled by other men.  I
		hoped the time for guns and killing
		and massacres was over.  That was
		my misfortune.  That was your
		misfortune.  I was hunted on the
		streets of Corleone when I was
		twelve years old because of who my
		father was.  I had no choice.

				MICHAEL
		A man has to choose what he will be.
		I believe that.

				DON CORLEONE
		What else do you believe in?

	MICHAEL doesn't answer.

				DON CORLEONE
		Believe in a family.  Can you
		believe in your country?  Those
		Pezzonovante of the State who
		decide what we shall do with our
		lives?  Who declare wars they wish
		us to fight in to protect what they
		own.  Do you put your fate in the
		hands of men whose only talent is
		that they tricked a bloc of people
		to vote for them?  Michael, in five
		years the Corleone family can be
		completely legitimate.  Very
		difficult things have to happen to
		make that possible.  I can't do
		them anymore, but you can, if you
		choose to.

	MICHAEL listens.

				DON CORLEONE
		Believe in a family; believe in a
		Code of Honor, older and higher,
		believe in Roots that go back
		thousands of years into your Race.
		Make a family, Michael, and protect
		it.  These are our affairs, sono cosa
		nostra, Governments only protect
		men who have their own individual
		power.  Be one of those men...you
		have the choice.

	--------------------------------------FADE OUT----------

	EXT DAY: STOCK FOOTAGE LAS VEGAS (1955)

	A MOVING VIEW, driving up the Las Vegas Strip of 1955.

				FREDO (O.S.)
		There's a new one.  Construction
		going on everywhere.

	MORE VIEWS, showing new hotels and casinos being built; the
	bill marquees read: "MARTIN AND LEWIS", "PATTI PAGE", etc.

				FREDO (O.S.)
		That's one of the family's new ones.
		Not bad, eh?

	EXT DAY: FLAMINGO (1955)

	The car pulls up at the Flamingo Hotel.

	Inside the car: MICHAEL, FREDO, TOM HAGEN and a new man,
	NERI, quiet and sinister.

				MICHAEL
		Why didn't Moe Green meet us at the
		airport?

				FREDO
		He had business at the hotel, but
		he'll drop in for dinner.

	From the expression on MICHAEL's face we know this is a
	discourtesy.

	INT DAY: FLAMINGO HOTEL SUITE (1955)

	A whole entourage precedes FREDO and his V.I.P. party of
	MICHAEL, HAGEN and NERI.  Great fuss is made.  They are
	being shown into the hotel's 'special' suite.

				FREDO
		You look wonderful, kid; really
		wonderful.  That doctor did some
		job on your face.

				MICHAEL
		You look good, too.

	They enter the suite.

				FREDO
		Nice, eh?

	FREDO is as excited as a kid, snapping orders at the
	bellboys, waiters and maids.

				FREDO
			  (hurrying into the bedroom)
		Kid, take a look-see.

	MICHAEL gives a look to HAGEN, and continues into the bedroom.

	There is an enormous circular bed on a huge platform,
	mirrors to each side.  FREDO points upward.

	A VIEW into a large CEILING mirror.

				FREDO
		Ever seen anything like that before?

				MICHAEL
			  (dryly)
		No.

	INT NITE: FLAMINGO SUITE BEDROOM (1955)

	MICHAEL is alone in the bedroom.  He is just finishing
	dressing; he puts on his jacket.  From the window, with the
	lights blinking, we can tell it's late at night.  MICHAEL
	passes into the other room.

	He stops, looks.  He is disturbed.

	INT NITE: FLAMINGO SUITE (1955)

	A magnificent, circular table has been set up in his suite;
	a lavish table setting for eight.  Standing by the table are
	HAGEN, JOHNNY FONTANE, looking wonderful, a little heavier,
	beautifully dressed; FREDO, a dandy, and TWO LAS VEGAS GIRLS.
	NERI stands quietly by the door.

				FREDO
		Mike!  The party starting!

				MICHAEL
		Come here a minute, Fredo.

	FREDO goes to him, a big smile all over his face.

				MICHAEL
		Who are those girls?

				FREDO
			  (jokingly)
		That's for you to find out.

				MICHAEL
		Give them some money and send them
		home.

				FREDO
		Mike!

				MICHAEL
		Get rid of them...

	INT NITE: FLAMINGO SUITE (1955)

	They are seated around the lavish table in Michael's suite.
	MICHAEL is speaking to JOHNNY.

				MICHAEL
		Johnny, the Corleone family is
		thinking of selling out all our
		interests in the Olive Oil business
		and settling here.  Moe Greene will
		sell us his interest so it can be
		wholly owned by friends of the
		family.

	FREDDIE seems anxious.

				FREDO
		Mike, you sure about Moe selling.
		He never mentioned it to me and he
		loves the business.

				MICHAEL
		I'll make him an offer he can't
		refuse.

	MICHAEL turns to JOHNNY.

				MICHAEL
		Johnny, the Don wants you to help
		us get started.  We figure
		entertainment will be the big
		factor in drawing gamblers.  We
		hope you'll sign a contract to
		appear five times a year for maybe
		a week long engagement.
		We hope your friends in the movies
		will do the same.  We count on you
		to convince them.

				JOHNNY
		Sure, I'll do anything for my
		Godfather.  You know that, Mike.

	There is knock on the door.  NERI rises, looks at MICHAEL,
	who nods.  NERI opens the door, and MOE GREENE enters,
	followed by TWO BODYGUARDS.  He is a handsome hood, dressed
	in the Hollywood style.  His BODYGUARDS are more West Coast
	style.

				MOE
		Mike, good to see you.  Got
		everything you want?

				MICHAEL
		Thanks.

				MOE
		The chef cooked for you special;
		the dancers will kick your tongue
		out and you credit is good!
			  (to his BODYGUARDS)
		Draw chips for all these people so
		they can play on the house.

				MICHAEL
		Is my credit good enough to buy you
		out?

	MOE laughs.

				MOE
		Buy me out?...

				MICHAEL
		The hotel, the casino.  The Corleone
		family wants to buy you out.

	GREENE stops laughing; the room becomes tense.  NERI eyes
	the BODYGUARDS.

				MOE
			  (furious)
		The Corleone family wants to buy me
		out.  I buy you out.  You don't buy
		me out.

				MICHAEL
		Your casino loses money.  Maybe we
		can do better.

				MOE
		You think I scam?

				MICHAEL
			  (the worst insult)
		You're unlucky.

				MOE
		You goddamn dagos.  I do you a
		favor and take Freddie in when
		you're having a bad time, and then
		you try to push me out.

				MICHAEL
		You took Freddie in because the
		Corleone family bankrolled your
		casino.  You and the Corleone
		family are evened out.  This is for
		business; name your price.

				MOE
		The Corleone family don't have that
		kind of muscle anymore.  The
		Godfather is sick.  You're getting
		chased out of New York by Barzini
		and the other families, and you
		think you can find easier pickings
		here.  I've talked to Barzini; I
		can make a deal with him and keep
		my hotel!

				MICHAEL
			  (quietly, deadly)
		Is that why you thought you could
		slap Freddie around in public?

				FREDO
			  (his face turns red)
		Ah Mike, that was nothing.  Moe
		didn't mean anything.  He flies off
		the handle sometimes; but me and
		him are good friends.  Right, Moe?

				MOE
		Yeah sure.  Sometimes I gotta kick
		asses to make this place run right.
		Freddie and I had a little argument
		and I had to straighten him out.

				MICHAEL
		You straightened my brother out?

				MOE
		Hell, he was banging cocktail
		waitresses two at a time.  Players
		couldn't get a drink.

	MICHAEL rises from his chair, and says in a tone of dismissal:

				MICHAEL
		I have to go back to New York
		tomorrow.  Think of your price.

				MOE
		You son of a bitch, you think you
		can brush me off like that?  I made
		my bones when you were going out
		with cheerleaders.

				FREDO
			  (frightened)
		Tom, you're the Consigliere; you
		can talk to the Don and advise him.

				MICHAEL
		The Don has semi-retired.  I'm
		running the Family business now.
		So anything you have to say, say it
		to me.

	Nobody answers.  MICHAEL nods to NERI, who opens the door.
	MOE exits angrily.

				MICHAEL
		Freddie, you're my older brother.
		I love you.  But don't ever take
		sides with anybody against the
		Family again.

	EXT DAY: N.Y. AIRPORT (1955)

	KAY sits in the back of a limousine parked by the Newark
	AIRPORT.  ROCCO LAMPONE is leaning against it.

	She has a little three year old boy; MICHAEL's son, who
	plays with a cardboard bird on a string.

	Two other cars are stationed discreetly, with men we have
	learned to tell are bodyguards.

	MICHAEL, HAGEN and NERI exit the airport with TWO NEGRO
	PORTERS carrying luggage.

	NERI sees something, and taps MICHAEL on the shoulder.

	MICHAEL turns, and sees KAY.

	LAMPONE opens the car door; KAY steps out with the BOY, and
	MICHAEL embraces her, and kisses his son.  Automatically,
	the luggage is put in.  NERI replaces LAMPONE as the driver;
	and LAMPONE joins the other men.  HAGEN gets into one of the
	other cars.

	And the limo drives off, preceded and followed by the other
	sedans.

	INT DAY: LIMO (1955)

	The little BOY looks out the window as they drive.

				MICHAEL
		I have to see my father and his
		people when we get back to the Mall.

				KAY
		Oh Michael.

				MICHAEL
		We'll go to the show tomorrow
		night--we can change the tickets.

				KAY
		Don't you want dinner first?

				MICHAEL
		No, you eat...don't wait up for me.

				KAY
		Wake me up when you come to bed?

	The little BOY flies his cardboard bird out of the speeding
	limousine window.

	EXT DAY: MALL (1955)

	The limousine arrives at the Mall.  We are inside.

				KAY
		Your sister wants to ask you
		something.

				MICHAEL
		Let HER ask.

	NERI opens the door.  KAY wants to talk just a little more.

				KAY
		She's afraid to.  Michael...

	MICHAEL nods to NERI; who gives them their privacy a moment
	longer.

				KAY
		Why are you so cold to her and
		Carlo?  They live with us on the
		Mall now, but you never get close
		to them.

				MICHAEL
		I'm busy.

				KAY
		Connie and Carlo want you to be
		godfather to their little boy.

	NERI opens the door; MICHAEL starts to get out; KAY too.

	He smiles at her, tired, and a little sad.

				KAY
		Will you?

				MICHAEL
		Let me think about it, O.K.?

	She smiles; MICHAEL goes with NERI to the Main House; KAY
	and the little BOY move to the house that was Sonny's.

	INT DAY: DON'S OFFICE (1955)

	VIEW ON DON CORLEONE, much older, much smaller in size.  He
	wears baggy pants, and a warm plaid shirt.  He sits in a
	chair, gazing out through the window, into the garden.

				TESSIO (O.S.)
		Barzini's people chisel my territory
		and we do nothing about it.  Pretty
		soon there won't be one place in
		Brooklyn I can hang my hat.

				MICHAEL (O.S.)
		Just be patient.

				TESSIO
		I'm not asking you for help, Mike.
		Just take off the handcuffs.

				MICHAEL (O.S.)
		Be patient.

				CLEMENZA (O.S.)
		We gotta fight sometime.  Let us at
		least recruit our regimes to full
		strength.

				MICHAEL (O.S.)
		No, I don't want to give Barzini an
		excuse to start fighting.

				TESSIO (O.S.)
		Mike, you're wrong.

				CLEMENZA (O.S.)
		Don Corleone...Don Corleone.

	The OLD MAN looks up.  CLEMENZA stand before him in the Den.
	Beside him is an anxious TESSIO.  NERI stands by the door;
	HAGEN is seated; MICHAEL sits behind the big desk.

				CLEMENZA
		You said there would come a day
		when Tessio and me could form our
		own Families.  Only with your
		benediction, of course.  I ask
		permission...

				DON CORLEONE
		My son is head of the Family now.
		If you have his permission, you
		have my good will.

				MICHAEL
		In six months you can break off
		from the Corleone Family and go on
		your own.  Carlo, I'm counting on
		you to make the move to Nevada;
		you'll be my right-hand man out
		there.  Tom Hagen is no longer the
		Consigliere.

	Everyone is a bit surprised; look to see HAGEN's reaction.
	He remains inexpressive.

				MICHAEL
		He's going to be our lawyer in
		Vegas.  Nobody goes to him with any
		other business as of now, this
		minute.  No reflection on Tom;
		that's the way I want it.  Besides,
		if I ever need any advice, who's a
		better Consigliere than my father.

				CLEMENZA
		Then in a six month time we're on
		our own; is that it?

				MICHAEL
		Maybe less...

				TESSIO
		Let us fill up our Regimes.

				MICHAEL
		No.  I want things very calm for
		another six months.

				TESSIO
		Forgive me, Godfather, let our
		years of friendship be my excuse.
		How can you hope for success there
		without your strength here to back
		you up?  The two  go hand in hand.
		And with you gone from here the
		Barzini and the Tattaglias will be
		too strong for us.

				CLEMENZA
		And I don't like Barzini.  I say
		the Corleone Family has to move
		from strength, not weakness.  We
		should build our Regimes and take
		back our lost territories in Staten
		Island, at least.

				DON CORLEONE
		Do you have faith in my judgement?

				CLEMENZA
		Yes, Godfather...

				DON CORLEONE
		Then do what Michael says...

				MICHAEL
		All I can say is that things are
		being resolved that are more
		effective than a thousand buttonmen
		on the streets.  Understood?

	There are uneasy looks all around.

				CARLO
		Understood.  I just wish I was
		doing more to help out.

				MICHAEL
		I'll come to you when I need you.

	He looks at CLEMENZA, TESSIO and HAGEN.  They all nod,
	reluctantly.

				MICHAEL
		All right, then it's resolved.

	NERI knows the meeting is over, he opens the Den's door.

	CLEMENZA and TESSIO pay their respects to the DON and leave,
	then CARLO.  NERI watches CARLO as he walks down the
	corridor, casting a nervous look back at the sinister man.

	Then NERI closes the door.

	MICHAEL relaxes.

				HAGEN
		Mike, why are you cutting me out of
		the action?

				MICHAEL
		Tom, we're going to be legitimate
		all the way, and you're the legal
		man.  What could be more important
		than that.

				HAGEN
		I'm not talking about that.  I'm
		talking about Rocco Lampone building
		a secret regime.  Why does Neri
		report directly to you, rather than
		through me or a caporegime?

				DON CORLEONE
		I told you that it wouldn't escape
		his eye.

				MICHAEL
		How did you find out?

				HAGEN
		Bookkeepers know everything.
		Rocco's men are all a little too
		good for the jobs they're supposed
		to be doing.  They get a little
		more money than the job's worth.
			  (pause)
		Lampone's a good man; he's operating
		perfectly.

				MICHAEL
		Not so perfectly if you noticed.

				HAGEN
		Mike, why am I out?

				MICHAEL
		You're not a wartime Consigliere.
		Things may get tough with the move
		we're trying.

				HAGEN
		OK, but then I agree with Tessio.
		You're going about it all wrong;
		you're making the move out of
		weakness... Barzini's a wolf, and
		if he tears you apart, the other
		families won't come running to help
		the Corleones...

				DON CORLEONE
		Tom, I never thought you were a bad
		Consigliere, I thought Santino a
		bad Don, rest in peace.  He had a
		good heart but he wasn't the right
		man to head the family when I had
		my misfortune.  Michael has all my
		confidence, as you do.  For reasons
		which you can't know, you must have
		no part in what will happen.

				HAGEN
		Maybe I can help.

				MICHAEL
			  (coldly)
		You're out, Tom.

	TOM pauses, thinks...and then he nods in acquiescence.  TOM
	leaves.

	MICHAEL looks at NERI.

				MICHAEL
		I'm going to talk to my father.

	NERI nods, and then leaves.  The DON opens the doors,
	breathes in the air, and steps outside.

	EXT DAY: THE GARDEN (1955)

				DON CORLEONE
		I see you have your Luca Brasi.

				MICHAEL
		I'll need him.

				DON CORLEONE
		There are men in this world who
		demand to be killed.  They argue in
		gambling games; they jump out of
		their cars in a rage if someone so
		much as scratches their fender.
		These people wander through the
		streets calling out "Kill me, kill
		me."  Luca Brasi was like that.
		And since he wasn't scared of
		death, and in fact, looked for
		it...I made him my weapon.  Because
		I was the only person in the world
		that he truly hoped would not kill
		him.  I think you have done the
		same with this man.

	They walk through the DON's vegetable garden.  Tomatoes,
	peppers, carefully tended, and covered with a silky netting.
	MICHAEL follows; the DON turns and looks at him.  Then
	stoops over to right a tomato plant that had been pushed over.

				DON CORLEONE
		Barzini will move against you first.

				MICHAEL
		How?

				DON CORLEONE
		He will get in touch with you
		through someone you absolutely
		trust.  That person will arrange a
		meeting, guarantee your safety...

	He rises, and looks at Michael...

				DON CORLEONE
		...and at that meeting you will be
		assassinated.

	The DON walks on further.

				DON CORLEONE
		Your wife and children...you're
		happy with them?

				MICHAEL
		Yes.

				DON CORLEONE
		Good.

	MICHAEL wants to express something...hesitates, then:

				MICHAEL
		I've always respected you...

	A long silence.  The DON smiles at MICHAEL.

				DON CORLEONE
		And I...you.

	EXT DAY: CHURCH (1955)

	KAY and MAMA walking from the black car that has just left
	them off.

				KAY
		How is your husband feeling?

				MAMA
		He's not the same since they shot
		him.  He lets Michael do all the
		work.  He just plays the fool with
		his garden, his peppers, his
		tomatoes, as if he was some peasant
		still.  But men are like that...

	She stops toward the Church.

				MAMA
		You come in, too.

	KAY shakes her head.

				MAMA
		The Priest ain't gonna bite you
		cause you're not Catholic.
			  (whispered)
		He's in the back drinkin' his wine.

	KAY laughs and follows MAMA up the steps of the Church.
	They enter.

	INT DAY: CHURCH (1955)

	Inside the Church, KAY watches as MAMA blesses herself from
	the holy water.

				MAMA
		You can.

	Tentatively, KAY dips her fingers into the water, and
	blesses herself.  Then SHE follows MAMA down the aisle, in
	awe at the high ceiling, the art, the windows, and finally
	the Altar.

	MAMA stops by the impressive tiers of candles.  There is a
	large coin box for those who wish to pay for lighting
	candles.  MAMA fumbles in her purse for change; KAY gives
	her some.

	MAMA drops the coins in the box, one by one; then takes the
	taper, and in a pattern known only to her, and with great
	dignity, she closes her eyes, says a prayer, and then lights
	twenty candles.

	She finishes, and bows her head.

	EXT DAY: BONASERA'S FUNERAL HOME

	Very few people in the streets.  TOTAL SILENCE.  But black
	flower cars as far as the eye can see, for blocks and blocks.
	An expression of respect, of honor and fear that is enormous.
	Certainly no more could be done for a President or a King.

	Each car carries an elaborate floral decoration.  We show
	these in detail; and the flowered messages: "A Benefactor to
	Mankind", "He Knew and Pitied"..."Our Don Our Leader"..."The
	Sacred Heart"...

	EXT DAY: MALL (1955)

	HIGH ANGLE ON THE CORLEONE MALL

	Silence.

	The flower cars, funeral limousines, and private cars fill
	all the areas attendant to the Corleone residence.

	Hundreds of people fill the Mall, reminiscent in size of the
	wedding of Connie and Carlo; of course, now the mood is
	somber and respectful.

	MICHAEL, MAMA, FREDO and HAGEN stand by the flowered platform
	which holds the ornate coffin.  We cannot see the remains of
	Don Corleone.

	BONASERA is nearby, ready to do service to the bereaved
	family.  One by one the mourners come by, weeping, or merely
	with grave expressions; pay their respects and continue on.

	The VIEW ALTERS,

	and we see that the line is endless.  JOHNNY FONTANE, tears
	openly falling, takes his turn.

	Children are taken by the hand, and lifted for their last
	look at the great man.

	CLEMENZA whispers into the ear of LAMPONE.  LAMPONE
	immediately arranges for the members of the Five New York
	Families to pay their respects.

	First CUNEO, then STRACHI and then ZALUCHI.  Then PHILIP
	TATTAGLIA, who merely passes by the Coffin.

	Then BARZINI in a black homburg, standing a long time.

	MICHAEL watches the scene.

	BARZINI crosses himself and passes on, immediately rejoined
	by his men.

	As BARZINI leaves, it seems as though everyone is fawning on
	him; perhaps asking for favors: But at any rate, it is clear
	from the doors opened for him, the cigars lit for him, that
	he is the new Capo di Capi--the place formerly held by Don
	Corleone.

	MICHAEL watches silently.

	BARZINI is searching for somebody with his eyes.  First
	CLEMENZA.  Then TESSIO.

	CONNIE rushes into MICHAEL's arms, tears in her eyes.  He
	embraces and comforts her.

	Everywhere MICHAEL goes, NERI is a few feet away--watching
	all who come close to him.

	EXT DAY: MALL (LATER)

	Later on the Mall; some people have left, although there are
	still hundreds of mourners.

	A young GIRL approaches TESSIO.  She's about 18.

				GIRL
		Do you remember me?

				TESSIO
		No...

				GIRL
		We danced together at Connie's
		wedding.

	TESSIO makes a gesture, which is to say 'How you've grown',
	and they move though the crowd, looking for Michael.  He
	finds him.

				TESSIO
		Mike, could I have a minute?

	MIKE; nods; and they move to a private place.  NERI is close
	by.

				TESSIO
		Barzini wants to arrange a meeting.
		Says we can straighten any of our
		problems out.

				MICHAEL
		He talked to you?

				TESSIO
			  (nods)
		I can arrange security.

	MICHAEL looks at him.

	EXT DAY: CEMETERY (1955)

	The Cemetery.  Late day.

	The hundreds of cars, limousines and flower cars line the
	stone wall that surrounds this Italian-Catholic cemetary in
	Queens Village.

	Hundreds of people stand in a cluster; others watch; take
	pictures, etc.

	MICHAEL stands with his family, his MOTHER...and TOM HAGEN.

				MICHAEL
			  (softly)
		Christ, Tom; I needed more time
		with him.  I really needed him.

				HAGEN
		Did he give you his politicians?

				MICHAEL
		Not all...I needed another four
		months and I would have had them
		all.
			  (he looks at TOM)
		I guess you've figured it all out?

				HAGEN
		How will they come at you?

				MICHAEL
		I know now.
			  (a passion wells up
			  inside of MICHAEL)
		I'll make them call me Don.

				HAGEN
		Have you agreed on a meeting?

				MICHAEL
			  (nods)
		A week from tonight.  In Brooklyn
		on Tessio's ground, where I'll be
		safe.

	HAGEN looks at him; understands.

				MICHAEL
		But after the Baptism.  I've
		decided to stand as godfather to
		Connie's baby.

	They look up.

	The coffin is lowered into an excavation, behind which
	stands an enormous stone monument; it is of a weeping angel,
	with the bold inscription: CORLEONE.

	---------------------------------------FADE OUT---------

	FADE IN:

	INT DAY: NERI'S APT. (1955)

	ALBERT NERI moves around in his small Corona Apartment; he
	pulls a small trunk from under his bed.  He opens it, and we
	see in it, nearly folded, a New York City Policeman's
	uniform.  He takes it out piece by piece, almost reverently.
	Then the badge, and the identification card; with his
	picture on it.  Slowly, in the solitude of his room, he
	begins to dress.

	INT DAY: MICHAEL'S BEDROOM (1955)

	MICHAEL and KAY are getting dressed for the christening in
	their room.  MICHAEL looks very well; very calm; KAY is
	beginning to take on a matronly look.

	INT DAY: MOTEL ROOM (1955)

	In a Long Island motel.

	ROCCO LAMPONE carefully disassembles a revolver; oils it,
	checks it, and puts it back together.

	EXT DAY: CLEMENZA'S HOUSE (1955)

	PETER CLEMENZA about to get in his Lincoln.  He hesitates,
	takes a rag and cleans some dirt off of the fender, and then
	gets in, drives off.

	EXT DAY: CHURCH (1955)

	The Church.

	Various relatives and friends are beginning to gather at the
	Church.  They laugh and talk.  A MONSIGNOR is officiating.
	Not all of the participants have arrived yet.

	CONNIE is there, with a beaming CARLO.  She holds the
	infant; showing him off to interested people.

	EXT DAY: U.N. PLAZA (1955)

	NERI walks down the sidewalk in the neighborhood of the UN
	Building.  He is dressed as, and has the bearing of, a
	policeman.  He carries a huge flashlight.

	EXT DAY: MOTEL BALCONY (1955)

	LAMPONE steps out onto the little balcony of a Sea-Resort
	Motel; We can see the bright, neon lit sign advertising
	"ROOMS FACING THE SEA--VACANY".

	INT DAY: CHURCH

	The Church.

	CONNIE holds the baby; the MONSIGNOR is speaking; KAY and
	MICHAEL stand side by side around the urn.

				PRIEST
			  (to MICHAEL)
		Do you pledge to guide and protect
		this child if he is left fatherless?
		Do you promise to shield him
		against the wickedness of the world?

				MICHAEL
		Yes, I promise.

	EXT DAY: FIFTH AVE.

	NERI continues up the 55th St. and Fifth Avenue area.  He
	continues until he is in front of Rockefeller Center.  On
	his side of the street, he spots a limousine waiting directly
	across from the main entrance of the building.  Slowly he
	approaches the limo, and taps on its fender with his
	nightstick.

	The DRIVER looks up in surprise.

	NERI points to the "No Parking" sign.

	The DRIVER turns his head away.

				NERI
		OK, wise guy, you wanna summons, or
		you wanna move?

				DRIVER
			  (obviously a hood)
		You better check with your precinct.

				NERI
		Move it!

	The DRIVER takes a ten dollar bill, folds it deliberately,
	and hands it out the window, trying to put it under NERI's
	jacket.

	NERI backs up, letting the bill fall onto the street.  Then
	he crooks a finger at the DRIVER.

				NERI
		Let me see you license and
		registration.

	EXT DAY: MOTEL BALCONY

	LAMPONE on the motel balcony spots a Cadillac pulling up.
	It parks.  A young, pretty GIRL gets out.  Quickly, he
	returns into the room.

	INT DAY: HOTEL STAIRS (1955)

	CLEMENZA is climbing the back stairs of a large hotel.  He
	rounds the corner, puffs a little, and then continues upward.

	INT DAY: CHURCH

	The Church.  Close on the PRIEST's fingers as he gently
	applies oil to the infant's ears and nostrils.

				PRIEST
		Ephetha...be opened...So you may
		perceive the fragrance of God's
		sweetness.

	EXT DAY: ROCKEFELLER CENTER (1955)

	The DRIVER of the limousine in front of Rockefeller Center
	is arguing with NERI.

	Now the DRIVER looks up.

	WHAT HE SEES:

	TWO MEN in topcoats exit the building, through the revolving
	glass doors.

	NERI opens up fire, trapping BARZINI in the shattering glass
	doors.  The doors still rotate, moving the dead body of
	BARZINI within them.

	INT DAY: CHURCH

	In the Church--the VIEW on MICHAEL.  The PRIEST hands him
	the infant.

				PRIEST
		Do you renounce Satan.

				MICHAEL
		I do renounce him.

				PRIEST
		And all his works?

				MICHAEL
		I do renounce them.

	INT DAY: MOTEL MURDER (1955)

	LAMPONE, backed up by two other MEN in his regime, runs down
	the iron-rail steps, and kicks in the door on Room 7F.
	PHILIP TATTAGLIA, old and wizened and naked, leaps up; a
	semi-nude young GIRL leans up.

	They are riddled with gunfire.

	INT DAY: HOTEL STAIRS (1955)

	CLEMENZA, huffing and puffing, climbs the back stairs, with
	his package.

	INT DAY: CHURCH

	The PRIEST pours water over the forehead of the infant
	MICHAEL holds.

				PRIEST
		Do you wish to be baptized?

				MICHAEL
		I do wish to be baptized.

	INT DAY: HOTEL ELEVATOR MURDER (1955)

	CLEMENZA, out of breath, climbs the final few steps.

	He walks through some glass doors, and moves to an ornate
	elevator waiting shaft.

	The lights indicate the elevator has arrived.

	The doors open, and we see a surprised CUNEO standing with
	the dapper MOE GREENE.

	CLEMENZA fires into the small elevator with a shotgun.

	The PRIEST hands a lighted candle to MICHAEL.

				PRIEST
		I christen you Michael Francis Rizzi.

	Flash bulbs go off.  Everyone is smiles, and crowds around
	MICHAEL, KAY, CONNIE...and CARLO.

	--------------------------------------FADE OUT----------

	EXT DAY: CHURCH (1955)

	The christening party outside the Church.

	Four or five limousines have been waiting; now pull up to
	receive MAMA, CONNIE and the baby; and the others.

	Everyone is very happy; only MICHAEL seems aloof and grave.

	As the fuss is going on, a car pulls up.  LAMPONE gets out
	and works his way to MICHAEL.  He whispers in his ear.  This
	is the news MICHAEL has been waiting for.

	CONNIE holds the baby up to MICHAEL.

				CONNIE
		Kiss your Godfather.

	The infant turns its head, and MICHAEL uses that as an
	excuse to back away.

				MICHAEL
		Carlo...we've had a change in the
		plans.  Mama, Connie, Kay and the
		kids will have to take the trip out
		to Vegas without us.

				CONNIE
		Oh Mike, it's our first vacation
		together.

				CARLO
			  (anxious to please)
		Jesus, Connie...Sure, Mike...

				MICHAEL
		Go back to your house and wait for
		me...

	He kisses KAY.

				MICHAEL
			  (to KAY)
		I'll just be a couple of days...

	People are guided to the correct limousines; they start to
	drive off.

	INT DAY: DON'S KITCHEN

	TESSIO sits in the Kitchen of the Main House on the Mall.

	HAGEN enters.

				HAGEN
		You'd better make your call to
		Barzini; Michael's ready.

	TESSIO nods; moves to the telephone and dials a number.

				TESSIO
		We're on our way to Brooklyn.

	He hangs up and smiles.

				TESSIO
		I hope Mike can get us a good deal
		tonight.

				HAGEN
			  (gravely)
		I'm sure he will.

	EXT DAY: MALL (1955)

	The TWO MEN walk out onto the Mall, toward a car.  On their
	way they are stopped by TWO BODYGUARDS.

				BUTTON MAN
		The boss says he'll come in a
		separate car.  He says for you two
		to go on ahead.

				TESSIO
			  (frowning)
		Hell, he can't do that.  It screws
		up all my arrangements.

	THREE MORE BODYGUARDS appear around him.

				HAGEN
			  (gently)
		I can't go with you either, Tessio.

	He flashes at the men surrounding him; for a moment he
	panics, and then he accepts it.

				TESSIO
			  (after the pause)
		Tell Mike it was business...I
		always liked him.

				HAGEN
		He understands that.

	TESSIO looks at the men, and then pauses.

				TESSIO
			  (softly)
		Tom, can you get me off the hook?
		For old times' sake?

				HAGEN
		I can't.

	HAGEN turns, and walks away from the group.  Then about
	twenty paces away, he stops, and looks back.

	TESSIO is led into a waiting car.

	HAGEN looks away, and walks off.

	INT DAY: CARLO'S LIVING ROOM (1955)

	CARLO RIZZI is alone in his house, smoking, waiting rather
	nervously.  He moves to the window and looks out.

	WHAT HE SEES:

	EXT DAY: MALL (1955)

	MICHAEL, still dressed in a dark suit; followed by NERI,
	LAMPONE and CLEMENZA, then HAGEN.

	They move toward us.

	Excitedly, CARLO moves to the front door; opens it.

	He wears a broad smile.

				CARLO
		Godfather!

				MICHAEL
		You have to answer for Santino.

	The smile on CARLO's face slowly fades, then, in a foolish
	attempt for safety, he slams the door in their faces and
	backs into the living room.

	INT DAY: CARLO'S LIVING ROOM (1955)

	The door opens, and the grim party enters.

				MICHAEL
		You fingered Sonny for the Barzini
		people.  That little farce you
		played out with my sister.  Did
		Barzini kid you that would fool a
		Corleone?

				CARLO
			  (dignity)
		I swear I'm innocent.  I swear on
		the head of my children, I'm
		innocent.  Mike, don't do this to
		me, please Mike, don't do this to me!

				MICHAEL
			  (quietly)
		Barzini is dead.  So is Philip
		Tattaglia, so are Strachi, Cuneo
		and Moe Greene...I want to square
		all the family accounts tonight.
		So don't tell me you're innocent;
		admit what you did.

	CARLO is silent; he wants to talk but is terrified.

				MICHAEL
			  (almost kindly)
		Don't be frightened.  Do you think
		I'd make my sister a widow?  Do you
		think I'd make your children
		fatherless?  After all, I'm
		Godfather to your son.  No, your
		punishment is that you're out of
		the family business.  I'm putting
		you on a plane to Vegas--and I want
		you to stay there.  I'll send
		Connie an allowance, that's all.
		But don't keep saying you're
		innocent; it insults my intelligence
		and makes me angry.  Who approached
		you, Tattaglia or Barzini?

				CARLO
			  (sees his way out)
		Barzini.

				MICHAEL
			  (softly)
		Good, good.  Leave now; there's a
		car waiting to take you to the
		airport.

	CARLO moves to the door; opens it.  There is a car waiting;
	with a group of MEN around it.

	He looks back at MICHAEL, who reassures him.

				MICHAEL
		I'll call your wife and tell her
		what flight you're on.

	EXT DAY: MALL

	CARLO moves out to the Mall; the BUTTONMEN are putting his
	things in the trunk.

	ONE opens the front door for him.

	SOMEONE is sitting in the rear seat, though we cannot see who.

	CARLO gets into the car; out of nervousness, he looks back
	to see the other man.

	It is CLEMENZA, who nods cordially.

	The motor starts, and as the car pulls away, CLEMENZA
	suddenly throws the garrote around CARLO's neck.  He chokes
	and leaps up like a fish on a line, kicking his feet.

	The garrote is pulled tighter; CARLO's face turns color.

	His thrashing feet kick right through the front windshield.

	Then the body goes slack.

	CLEMENZA makes a foul face, and opens the window as the car
	drives off.

	EXT DAY: CARLO'S STEPS (1955)

	MICHAEL and his party.  They watch.

	Then he turns and walks off, and they follow.

	---------------------------------------FADE OUT---------

	FADE IN:

	INT NITE: MICHAEL'S LIMO EN ROUTE (1955)

	MICHAEL sits alone in the back of his car; NERI is driving.

	They do not speak for a long time; it is night--car lights
	flash by.

	NERI turns back.

				NERI
		You know I would never question
		anything you say.

				MICHAEL
			  (smiles)
		Speak your mind.

				NERI
		I'll do this for you; you know I
		should.

				MICHAEL
		No.  This I have to do.

	EXT NITE: PIZZA STREET (1955)

	MICHAEL's car pulls up in a quiet neighborhood, near an
	Italian Pizzeria.  NERI opens the door.

				MICHAEL
		Sit in the car.

	INT NITE: PIZZA PLACE (1955)

	He walks alone into the restaurant.  A MAN is tossing pizza
	dough in the air.

				MICHAEL
		Where's the boss?

				MAN
		In the back.  Hey Frank, someone
		wants you.

	A MAN comes out of the shadows, with a strong Italian accent.

				MAN
		What is it?

	He stops, frozen in fear.  It is FABRIZZIO.

	VIEW ON MICHAEL.  Gunfire from under his coat.  FABRIZZIO is
	cut down.  MICHAEL throws the gun down; turns and exits.

	EXT DAY: MALL (1955)

	HIGH ANGLE ON THE CORLEONE MALL

	Several moving vans are parked in the Mall; one feels that
	these are the final days; the families are moving out; signs
	indicating that the property is for sale are evident.

	A black limousine pulls up, and before it has even stopped,
	the rear door flies open, and CONNIE attempts to run out,
	restrained by MAMA.  She manages to break free and runs
	across the Mall into Michael's house.

	INT DAY: DON'S LIVING ROOM (1955)

	Inside the Corleone house.  Big boxes have been packed;
	furniture prepared for shipping.

				CONNIE
		Michael!

	She hurries into the living room, where she comes upon
	MICHAEL and KAY.

				KAY
			  (comforting)
		Connie...

	But CONNIE avoids her, and moves directly to MICHAEL.  NERI
	is watchful.

				CONNIE
		You lousy bastard; you killed my
		husband...

				KAY
		Connie...

				CONNIE
		You waited until our father died
		and nobody could stop you and you
		killed him, you killed him!  You
		blamed him about Sonny, you always
		did, everybody did.  But you never
		thought about me, never gave a damn
		about me.
			  (crying)
		What am I going to do now, what am
		I going to do.

	TWO of Michael's BODYGUARDS move closer, ready for orders
	from him.  But he stands there, waiting for his sister to
	finish.

				KAY
		Connie, how could you say such
		things?

				CONNIE
		Why do you think he kept Carlo on
		the Mall?  All the time he knew he
		was going to kill my husband.  But
		he didn't dare while my father was
		alive.  And then he stood Godfather
		to our child.  That coldhearted
		bastard.
			  (to KAY)
		And do you know how many men he had
		killed with Carlo?  Just read the
		papers.  That's your husband.

	She tries to spit into MICHAEL's face; but in her hysteria
	she has no saliva.

				MICHAEL
		Get her home and get a doctor.

	The TWO BODYGUARDS immediately take her arms and move her,
	gently but firmly.

	KAY is shocked; never taking her look of amazement from
	MICHAEL.  He feels her look.

				MICHAEL
		She's hysterical.

	But KAY won't let him avoid her eyes.

				KAY
		Michael, it's not true.  Please
		tell me.

				MICHAEL
		Don't ask me.

				KAY
		Tell me!

				MICHAEL
		All right, this one time I'll let
		you ask about my affairs, one last
		time.

				KAY
		Is it true?

	She looks directly into his eyes, he returns the look, so
	directly that we know he will tell the truth.

				MICHAEL
			  (after a very long pause)
		No.

	KAY is relieved; she throws her arms around him, and hugs
	him.  Then she kisses him.

				KAY
			  (through her tears)
		We both need a drink.

	INT DAY: DON'S KITCHEN (1955)

	She moves back into the kitchen and begins to prepare the
	drinks.  From her vantage point, as she smilingly makes the
	drinks, she sees CLEMENZA, NERI and ROCCO LAMPONE enter the
	house with their BODYGUARDS.

	She watches with curiosity, as MICHAEL stands to receive
	them.  He stands arrogantly at ease, weight resting on one
	foot slightly behind the other.  One hand on his hip, like a
	Roman Emperor.  The CAPOREGIMES stand before him.

	CLEMENZA takes MICHAEL's hand, kissing it.

				CLEMENZA
		Don Corleone...

	The smile fades from KAY's face, as she looks at what her
	husband has become.

	INT DAY: CHURCH (1955)

	KAY wears a shawl over her hand.  She drops many coins in
	the coin box, and lifts a burning taper, and one by one, in
	a pattern known only to herself, lights thirty candles.

					THE END






`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
