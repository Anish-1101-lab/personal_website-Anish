// Matrix Digital Rain Effect
function createMatrixRain() {
  const matrixBg = document.querySelector('.matrix-bg');

  if (!matrixBg) return;

  // Create 50 columns with random properties
  for (let i = 0; i < 50; i++) {
    const column = document.createElement('div');
    column.className = 'matrix-column';

    // Random positioning
    column.style.left = `${Math.random() * 100}%`;

    // Random animation duration (3-8 seconds)
    const duration = 3 + Math.random() * 5;
    column.style.animationDuration = `${duration}s`;

    // Random delay so they don't all start at once
    column.style.animationDelay = `${Math.random() * 5}s`;

    // Random height (100-300px)
    const height = 100 + Math.random() * 200;
    column.style.height = `${height}px`;

    // Random opacity
    column.style.opacity = `${0.1 + Math.random() * 0.3}`;

    matrixBg.appendChild(column);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the matrix effect
  createMatrixRain();

  const terminalInput = document.getElementById('terminal-input') as HTMLInputElement;
  const app = document.getElementById('app');

  if (!terminalInput || !app) {
    console.error('Terminal elements not found');
    return;
  }

  // Set focus to the input when the page loads
  terminalInput.focus();

  // Command history
  let commandHistory: string[] = [];
  let historyIndex = -1;

  // Available commands
  const commands: Record<string, (args: string[]) => string> = {
    help: () => {
      return `
        <div class="command-output">
          <div class="section-title">Available Commands:</div>
          <div class="section-content">
            <div>help - Display this help message</div>
            <div>about - Learn more about Anish</div>
            <div>interests - See my research and technical interests</div>
            <div>projects - View my projects</div>
            <div>skills - See my technical skills</div>
            <div>contact - How to reach me</div>
            <div>social - Display social media links</div>
            <div>clear - Clear the terminal</div>
            <div>ls - List directory contents</div>
          </div>
        </div>
      `;
    },

    about: () => {
      return `
        <div class="command-output about-section">
          <div class="section-title">About Me:</div>
          <div class="section-content">
            <p>I'm exploring the intersection of LLMs, HPC I/O optimization, and systems research. My current focus is on building trustworthy diagnostics for I/O logs using retrieval-augmented LLMs, and applying multimodal learning for intent discovery in livestreams. I enjoy debugging hard problems, both in code and compute.</p>
            <br>
            <p><span style="color: var(--highlight-color);">Current Work</span><br>
            I'm currently working at <a href="https://www.dashlab.in/" target="_blank">DaSH Lab</a> under <a href="https://arnab.dashlab.in/" target="_blank">Professor Arnab Paul</a>, focusing on:</p>
            <p>• Research on Large Language Models (LLMs) and file systems</p>
            <p>• Developing LLM-powered tools for analyzing HPC I/O logs (PyDarshan)</p>
            <p>• Creating optimization recommendations using advanced ML techniques</p>
            <br>
            <p><span style="color: var(--highlight-color);">🧩 Domain-Specialized RAG Systems</span><br>
            Built a pipeline to analyze Darshan logs using RAG + code generation + context retrieval (CSV+summary) → dynamic LLM diagnostics for I/O inefficiencies.</p>
            <br>
            <p><span style="color: var(--highlight-color);">🛠️ Custom Architectures for CIFAR</span><br>
            Training DiT-style networks without convs or transformers, achieving >95% accuracy using sliding window attention + class conditioning.</p>
            <br>
            <p><span style="color: var(--highlight-color);">🔭 Research Implementation: NAACL '22</span><br>
            Implementing Multimodal Intent Discovery using joint embeddings + clustering on livestream transcripts and visual frames.</p>
            <br>
            <p><span style="color: var(--highlight-color);">⚙️ Blockchain-Backed Platforms</span><br>
            Built a crowdsourced reporting tool with Django + React + Ethereum, integrating smart contracts and decentralized trust.</p>
          </div>
        </div>
      `;
    },

    interests: () => {
      return `
        <div class="command-output interests-section">
          <div class="section-title">Interests & Focus Areas:</div>
          <div class="section-content">
            <p>• LLMs for System Optimization</p>
            <p>• In-Context Learning + Retrieval Techniques</p>
            <p>• HPC Performance Tools (Darshan, Drishti)</p>
            <p>• Low-level I/O Pattern Analysis</p>
            <p>• MLOps, Infra-aware Model Design</p>
            <p>• RAG + Code-gen Agents for Logs & Metrics</p>
          </div>
        </div>
      `;
    },

    projects: () => {
      return `
        <div class="command-output projects-section">
          <div class="section-title">Projects:</div>
          <div class="section-content">
            <p><span style="color: var(--highlight-color);">Self-Evolving Diffusion Transformer (DiT) Architecture</span></p>
            <ul style="list-style-type: none; padding-left: 15px;">
              <li>• Designed novel diffusion-transformer hybrid with evolutionary self-modification capabilities</li>
              <li>• Implemented meta-learning mechanisms allowing the model to adapt its own architecture during training</li>
              <li>• Explored connections between diffusion processes and evolutionary optimization strategies</li>
              <li>• Research Impact: Demonstrated 23% improvement in sample efficiency over standard DiT models</li>
            </ul>
            <br>
            <p><span style="color: var(--highlight-color);">Multimodal World Model for Content Understanding</span></p>
            <ul style="list-style-type: none; padding-left: 15px;">
              <li>• Built comprehensive world models that jointly reason about visual, textual, and contextual information</li>
              <li>• Developed novel cross-modal attention mechanisms bridging different data modalities</li>
              <li>• Created predictive models for content interaction outcomes with temporal reasoning capabilities</li>
              <li>• Innovation: Introduced "contextual memory banks" for persistent cross-session learning</li>
            </ul>
            <br>
            <p><span style="color: var(--highlight-color);">Reinforcement Learning-Enhanced Advertisement Matching</span></p>
            <ul style="list-style-type: none; padding-left: 15px;">
              <li>• Applied RL techniques to optimize ad-content matching beyond traditional similarity metrics</li>
              <li>• Implemented multi-armed bandit approaches for exploration-exploitation in ad placement</li>
              <li>• Achieved 87% precision with 32% CTR improvement through adaptive learning strategies</li>
              <li>• Novel Contribution: Dynamic reward shaping based on user engagement patterns</li>
            </ul>
            <br>
            <p><span style="color: var(--highlight-color);">Continual Learning Recommendation Engine</span></p>
            <ul style="list-style-type: none; padding-left: 15px;">
              <li>• Developed recommendation systems with catastrophic forgetting mitigation</li>
              <li>• Implemented elastic weight consolidation and rehearsal mechanisms for user preference adaptation</li>
              <li>• Achieved 91% satisfaction rate while maintaining knowledge of historical preferences</li>
              <li>• Research Focus: Long-term user modeling without performance degradation</li>
            </ul>
          </div>
        </div>
      `;
    },

    skills: () => {
      return `
        <div class="command-output skills-section">
          <div class="section-title">Technical Skills:</div>
          <div class="section-content">
            <p><span style="color: var(--highlight-color);">Languages:</span> JavaScript/TypeScript, Python, Java, SQL</p>
            <p><span style="color: var(--highlight-color);">Frontend:</span> React, Vue.js, Angular, HTML/CSS</p>
            <p><span style="color: var(--highlight-color);">Backend:</span> Node.js, Express, Django, Spring Boot</p>
            <p><span style="color: var(--highlight-color);">Databases:</span> MongoDB, PostgreSQL, MySQL, Redis</p>
            <p><span style="color: var(--highlight-color);">DevOps:</span> Docker, Kubernetes, AWS, GCP, CI/CD</p>
            <p><span style="color: var(--highlight-color);">Other:</span> Git, RESTful APIs, GraphQL, Machine Learning</p>
          </div>
        </div>
      `;
    },

    contact: () => {
      return `
        <div class="command-output contact-section">
          <div class="section-title">Contact Information:</div>
          <div class="section-content">
            <p>Email: <a href="mailto:anishs1101@gmail.com">anishs1101@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/anish-sathyanarayanan-53b69029b/" target="_blank">linkedin.com/in/anish-sathyanarayanan-53b69029b</a></p>
            <p>GitHub: <a href="https://github.com/Anish-1101-lab" target="_blank">github.com/Anish-1101-lab</a></p>
          </div>
        </div>
      `;
    },

    social: () => {
      return `
        <div class="command-output">
          <div class="section-title">Social Media:</div>
          <div class="section-content">
            <p><i class="fab fa-github"></i><a href="https://github.com/Anish-1101-lab" target="_blank">GitHub</a></p>
            <p><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/anish-sathyanarayanan-53b69029b/" target="_blank">LinkedIn</a></p>
          </div>
        </div>
      `;
    },

    clear: () => {
      // Remove all command outputs and history
      const outputs = document.querySelectorAll('.command-output, .command-history');
      outputs.forEach(output => output.remove());
      return '';
    },

    ls: () => {
      return `
        <div class="command-output">
          <div class="file"><i class="fas fa-folder" style="color: var(--accent-color);"></i><span class="file-name directory">about</span></div>
          <div class="file"><i class="fas fa-folder" style="color: var(--accent-color);"></i><span class="file-name directory">projects</span></div>
          <div class="file"><i class="fas fa-folder" style="color: var(--accent-color);"></i><span class="file-name directory">skills</span></div>
          <div class="file"><i class="fas fa-folder" style="color: var(--accent-color);"></i><span class="file-name directory">contact</span></div>
          <div class="file"><i class="fas fa-file-alt" style="color: var(--text-color);"></i><span class="file-name text-file">resume.pdf</span></div>
          <div class="file"><i class="fas fa-file-code" style="color: var(--success-color);"></i><span class="file-name executable">welcome.sh</span></div>
        </div>
      `;
    },

    // Easter egg
    sudo: () => {
      return `
        <div class="command-output error">
          <p>Nice try! But you don't have sudo permissions in this terminal. 😄</p>
        </div>
      `;
    }
  };

  // Handle command execution
  function executeCommand(commandString: string): void {
    const args = commandString.trim().split(' ');
    const command = args[0].toLowerCase();

    // Skip if empty command
    if (!command) return;

    // Add to command history
    commandHistory.push(commandString);
    historyIndex = commandHistory.length;

    // Create command history element
    const historyElement = document.createElement('div');
    historyElement.className = 'command-history';
    historyElement.innerHTML = `<div class="command-history-item">${commandString}</div>`;

    if (terminalInput.parentElement) {
      app.insertBefore(historyElement, terminalInput.parentElement);

      // Execute command if it exists
      if (command in commands) {
        const output = commands[command](args.slice(1));
        if (output) {
          historyElement.insertAdjacentHTML('afterend', output);
        }
      } else {
        historyElement.insertAdjacentHTML('afterend', `
          <div class="command-output error">
            <p>Command not found: ${command}</p>
            <p>Type 'help' to see available commands.</p>
          </div>
        `);
      }

      // Scroll to bottom
      app.scrollTop = app.scrollHeight;
    }
  }

  // Handle keyboard events
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value;
      terminalInput.value = '';
      executeCommand(command);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion
      const input = terminalInput.value.toLowerCase();
      for (const cmd in commands) {
        if (cmd.startsWith(input)) {
          terminalInput.value = cmd;
          break;
        }
      }
    }
  });

  // Keep focus on input when clicking anywhere in the terminal
  app.addEventListener('click', () => {
    terminalInput.focus();
  });
});
