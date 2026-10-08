import { useState } from "react";

function Teams() {
  const [teamName, setTeamName] = useState("");
  const [captain, setCaptain] = useState("");
  const [memberName, setMemberName] = useState("");
  const [members, setMembers] = useState([]);
  const [teamCreated, setTeamCreated] = useState(false);

  const addMember = () => {
    if (!memberName.trim()) {
      alert("Enter a member name");
      return;
    }

    setMembers([...members, memberName.trim()]);
    setMemberName("");
  };

  const removeMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const createTeam = () => {
    if (!teamName.trim() || !captain.trim()) {
      alert("Enter team name and captain name");
      return;
    }

    setTeamCreated(true);
  };

  return (
    <div className="page">

      <div className="page-header">
        <p className="tagline">👥 BUILD YOUR SQUAD</p>

        <h1>Team Management</h1>

        <p className="page-description">
          Create your team, add players and prepare for tournaments.
        </p>
      </div>

      <div className="team-layout">

        {/* Team Creation Form */}
        <div className="card team-form">

          <h2>Create Your Team</h2>

          <label>Team Name</label>

          <input
            type="text"
            placeholder="Enter team name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <label>Captain</label>

          <input
            type="text"
            placeholder="Enter captain name"
            value={captain}
            onChange={(e) => setCaptain(e.target.value)}
          />

          <label>Add Team Member</label>

          <div className="member-input">
            <input
              type="text"
              placeholder="Player name"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />

            <button
              className="secondary-btn"
              onClick={addMember}
            >
              Add
            </button>
          </div>

          <button
            className="primary-btn full"
            onClick={createTeam}
          >
            Create Team
          </button>

        </div>


        {/* Team Preview */}
        <div className="card team-preview">

          <h2>Team Preview</h2>

          {!teamCreated ? (
            <div className="empty-team">
              <div>🎮</div>

              <p>
                Your team information will appear here.
              </p>
            </div>
          ) : (
            <>
              <div className="team-title">
                <div className="team-logo">🔥</div>

                <div>
                  <h2>{teamName}</h2>
                  <p>Captain: {captain}</p>
                </div>
              </div>

              <h3>Team Members</h3>

              {members.length === 0 ? (
                <p className="no-members">
                  No additional members added.
                </p>
              ) : (
                <ul className="member-list">
                  {members.map((member, index) => (
                    <li key={index}>
                      <span>👤 {member}</span>

                      <button
                        onClick={() => removeMember(index)}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Teams;