// Add mystical CSS for new elements
const mysticalStyles = `
.mystical-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(20px);
    border: 2px solid #4ecdc4;
    border-radius: 20px;
    padding: 2rem;
    z-index: 10000;
    animation: mysticalAppear 0.5s ease;
}

.alert-content {
    text-align: center;
    color: #fff;
}

.alert-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.prophecy-item {
    animation: prophecyReveal 0.8s ease forwards;
    opacity: 0;
    transform: translateX(-20px);
}

@keyframes mysticalAppear {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

@keyframes prophecyReveal {
    to { opacity: 1; transform: translateX(0); }
}

.prophecy-icon {
    margin-right: 0.5rem;
}

.oracle-btn.loading {
    animation: mysticalPulse 1.5s infinite;
}

@keyframes mysticalPulse {
    0% { box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4); }
    50% { box-shadow: 0 10px 50px rgba(78, 205, 196, 0.6); }
    100% { box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4); }
}
`;

// Inject mystical styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mysticalStyles;
document.head.appendChild(styleSheet);

// Mystical market data and AI oracle engine
const marketData = {
    trends: {
        hot: [
            '🧬 AI-powered healthcare oracles',
            '🌱 Sustainable energy alchemy',
            '⚡ Remote work enchantment tools',
            '🎓 Personalized wisdom platforms',
            '🔐 Blockchain identity crystals'
        ],
        emerging: [
            '🥽 Virtual reality fitness realms',
            '🌾 IoT agriculture divination',
            '🧠 Mental health spirit guides',
            '🚁 Autonomous delivery familiars',
            '🏠 Smart home protection wards'
        ],
        declining: [
            '🏪 Ancient retail kingdoms',
            '💿 Physical media relics',
            '📝 Manual data scribing rituals',
            '🔨 Basic website forging tools',
            '📱 Generic social gathering spaces'
        ]
    },
    niches: [
        {
            name: '🤖 AI-Powered Wealth Oracle',
            description: 'Mystical budgeting and investment prophecies through digital divination',
            marketSize: 85,
            competition: 45,
            profitability: 90,
            tags: ['fintech', 'ai', 'low-competition', 'high-growth'],
            growth: '127%'
        },
        {
            name: '👴 Elder Wisdom Technology',
            description: 'Sacred monitoring and assistance spirits for the wise elders',
            marketSize: 92,
            competition: 30,
            profitability: 88,
            tags: ['healthtech', 'iot', 'low-competition', 'ai-ready'],
            growth: '156%'
        },
        {
            name: '📚 Micro-Wisdom Sanctuaries',
            description: 'Concentrated knowledge potions for professional enlightenment',
            marketSize: 78,
            competition: 65,
            profitability: 75,
            tags: ['edtech', 'saas', 'high-growth'],
            growth: '89%'
        },
        {
            name: '🌿 Earth-Blessed Packaging Alchemy',
            description: 'Nature-harmonious alternatives to ancient wrapping methods',
            marketSize: 88,
            competition: 40,
            profitability: 82,
            tags: ['sustainability', 'manufacturing', 'low-competition'],
            growth: '134%'
        },
        {
            name: '🗣️ Voice Commerce Portals',
            description: 'Mystical shopping through vocal incantations and smart oracles',
            marketSize: 70,
            competition: 55,
            profitability: 85,
            tags: ['ecommerce', 'ai', 'ai-ready'],
            growth: '98%'
        },
        {
            name: '🎮 Mind Healing Gaming Realms',
            description: 'Therapeutic adventures for conquering inner shadows and darkness',
            marketSize: 75,
            competition: 35,
            profitability: 80,
            tags: ['healthtech', 'gaming', 'low-competition', 'ai-ready'],
            growth: '112%'
        }
    ]
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadTrends();
    loadNiches();
    initNavbarHide();
});

function initNavbarHide() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.glass-nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
}

function scrollToOracle() {
    document.getElementById('oracle').scrollIntoView({ behavior: 'smooth' });
}

function scrollToPulse() {
    document.getElementById('pulse').scrollIntoView({ behavior: 'smooth' });
}

function toggleNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

async function validateIdea() {
    const idea = document.getElementById('ideaInput').value;
    const industry = document.getElementById('industry').value;
    
    if (!idea.trim()) {
        showMysticalAlert('🔮 Please describe your startup idea for analysis...');
        return;
    }
    
    // Show AI analysis loading state
    const btn = document.getElementById('validateBtn');
    const btnText = btn.querySelector('.btn-text');
    btnText.textContent = '🤖 AI Analyzing...';
    btn.disabled = true;
    btn.classList.add('loading');
    
    // Perform AI-powered analysis
    setTimeout(async () => {
        const analysis = analyzeIdea(idea, industry);
        await displayProphecy(analysis);
        btnText.textContent = '🔮 Consult Oracle';
        btn.disabled = false;
        btn.classList.remove('loading');
    }, 3000);
}

function showMysticalAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'mystical-alert';
    alertDiv.innerHTML = `
        <div class="alert-content">
            <div class="alert-icon">✨</div>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

function analyzeIdea(idea, industry) {
    // Enhanced AI-powered analysis
    const keywords = idea.toLowerCase();
    let score = 50;
    let marketSize = 60;
    let competition = 70;
    let profitability = 55;
    
    // Advanced keyword analysis
    const highValueKeywords = ['ai', 'machine learning', 'blockchain', 'automation', 'saas', 'subscription', 'platform'];
    const trendingKeywords = ['sustainability', 'remote', 'mental health', 'personalization', 'security'];
    const industryKeywords = ['healthcare', 'fintech', 'edtech', 'ecommerce', 'logistics'];
    
    highValueKeywords.forEach(keyword => {
        if (keywords.includes(keyword)) score += 12;
    });
    
    trendingKeywords.forEach(keyword => {
        if (keywords.includes(keyword)) score += 8;
    });
    
    industryKeywords.forEach(keyword => {
        if (keywords.includes(keyword)) marketSize += 10;
    });
    
    // Industry-specific analysis
    const industryData = {
        'ai': { score: 1.3, market: 1.4, competition: 1.2, profit: 1.3 },
        'healthtech': { score: 1.2, market: 1.5, competition: 0.8, profit: 1.4 },
        'fintech': { score: 1.15, market: 1.3, competition: 1.3, profit: 1.2 },
        'edtech': { score: 1.1, market: 1.2, competition: 0.9, profit: 1.1 },
        'ecommerce': { score: 1.0, market: 1.1, competition: 1.4, profit: 1.0 },
        'saas': { score: 1.2, market: 1.1, competition: 1.1, profit: 1.3 }
    };
    
    if (industry && industryData[industry]) {
        const data = industryData[industry];
        score *= data.score;
        marketSize *= data.market;
        competition *= data.competition;
        profitability *= data.profit;
    }
    

    
    // Normalize scores
    score = Math.min(95, Math.max(15, Math.round(score)));
    marketSize = Math.min(95, Math.max(15, Math.round(marketSize)));
    competition = Math.min(95, Math.max(15, Math.round(competition)));
    profitability = Math.min(95, Math.max(15, Math.round(profitability)));
    
    return {
        score,
        marketSize,
        competition,
        profitability,
        idea,
        industry,
        recommendations: generateActionableRecommendations(score, keywords, industry)
    };
}

function generateActionableRecommendations(score, keywords, industry) {
    const recommendations = [];
    
    // Score-based recommendations
    if (score > 80) {
        recommendations.push('Develop MVP within 4-6 weeks');
        recommendations.push('Prepare investor pitch deck');
        recommendations.push('Build core team quickly');
    } else if (score > 60) {
        recommendations.push('Conduct customer validation interviews');
        recommendations.push('Refine value proposition');
        recommendations.push('Create landing page for demand testing');
    } else {
        recommendations.push('Consider market pivot or niche focus');
        recommendations.push('Analyze competitor positioning');
        recommendations.push('Validate core business assumptions');
    }
    
    // Technology recommendations
    if (keywords.includes('ai')) {
        recommendations.push('Leverage existing AI APIs and frameworks');
    }
    
    if (keywords.includes('mobile')) {
        recommendations.push('Start with single platform development');
    }
    
    // Industry recommendations
    if (industry === 'healthtech') {
        recommendations.push('Research regulatory requirements early');
    }
    
    if (industry === 'fintech') {
        recommendations.push('Prioritize security and compliance');
    }
    
    if (industry === 'saas') {
        recommendations.push('Focus on recurring revenue metrics');
    }
    
    recommendations.push('Build audience before product launch');
    
    return recommendations;
}

async function displayProphecy(analysis) {
    const prophecyDiv = document.getElementById('validationResult');
    
    // Update confidence badge
    const confidenceBadge = document.getElementById('confidenceBadge');
    const confidence = Math.min(95, Math.max(70, analysis.score + 10));
    confidenceBadge.textContent = `${confidence}% Confidence`;
    
    // Generate structured analysis
    const analysisData = await generateStructuredAnalysis(analysis);
    
    // Display executive summary
    const executiveSummary = document.getElementById('executiveSummary');
    executiveSummary.innerHTML = `
        <h4>📊 Executive Summary</h4>
        <p>${analysisData.summary}</p>
    `;
    
    // Display detailed analysis sections
    const detailedAnalysis = document.getElementById('detailedAnalysis');
    detailedAnalysis.innerHTML = analysisData.sections.map(section => `
        <div class="analysis-section">
            <h5><span class="section-icon">${section.icon}</span>${section.title}</h5>
            <p>${section.content}</p>
            ${section.keyPoints ? `
                <div class="key-points">
                    <ul>
                        ${section.keyPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `).join('');
    
    // Update metric cards with animation
    setTimeout(() => {
        animateMetric('marketScore', analysis.marketSize);
        animateMetric('competitionScore', 100 - analysis.competition);
        animateMetric('profitScore', analysis.profitability);
    }, 500);
    
    // Update guidance with professional recommendations
    const guidanceList = document.getElementById('guidanceList');
    guidanceList.innerHTML = '';
    analysis.recommendations.forEach((rec, index) => {
        const guidanceItem = document.createElement('div');
        guidanceItem.className = 'guidance-item';
        guidanceItem.innerHTML = `<strong>${index + 1}.</strong> ${rec}`;
        guidanceItem.style.animationDelay = `${index * 0.2}s`;
        guidanceList.appendChild(guidanceItem);
    });
    
    prophecyDiv.style.display = 'block';
    prophecyDiv.scrollIntoView({ behavior: 'smooth' });
}

async function generateStructuredAnalysis(analysis) {
    const { idea, industry, score, marketSize, competition, profitability } = analysis;
    
    // Try AI API first
    try {
        const response = await fetch('http://localhost:5000/api/prophecy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idea, industry })
        });
        
        if (response.ok) {
            const data = await response.json();
            return parseAIResponse(data.prophecy, analysis);
        }
    } catch (error) {
        console.log('Using enhanced local analysis');
    }
    
    // Generate structured local analysis
    return generateLocalStructuredAnalysis(analysis);
}

function parseAIResponse(aiText, analysis) {
    // Parse AI response into structured format
    const lines = aiText.split('\n').filter(line => line.trim());
    
    return {
        summary: lines.slice(0, 3).join(' '),
        sections: [
            {
                icon: '📈',
                title: 'Market Analysis',
                content: extractSection(aiText, 'market') || `Market size score: ${analysis.marketSize}/100. ${getMarketInsight(analysis.marketSize)}`,
                keyPoints: [`Addressable market: ${analysis.marketSize > 70 ? 'Large' : analysis.marketSize > 50 ? 'Medium' : 'Niche'}`, `Growth potential: ${analysis.marketSize > 70 ? 'High' : 'Moderate'}`]
            },
            {
                icon: '⚔️',
                title: 'Competitive Landscape',
                content: extractSection(aiText, 'compet') || `Competition intensity: ${analysis.competition}/100. ${getCompetitionInsight(analysis.competition)}`,
                keyPoints: [`Market saturation: ${analysis.competition > 70 ? 'High' : analysis.competition > 50 ? 'Medium' : 'Low'}`, `Entry barriers: ${analysis.competition > 70 ? 'Significant' : 'Manageable'}`]
            },
            {
                icon: '💰',
                title: 'Revenue Potential',
                content: extractSection(aiText, 'revenue\|profit') || `Profitability score: ${analysis.profitability}/100. ${getProfitInsight(analysis.profitability)}`,
                keyPoints: [`Revenue model: ${analysis.profitability > 70 ? 'Strong' : 'Needs optimization'}`, `Scalability: ${analysis.profitability > 60 ? 'Good' : 'Limited'}`]
            }
        ]
    };
}

function extractSection(text, keyword) {
    const regex = new RegExp(`.*${keyword}.*?\n([^\n]+(?:\n[^\n]+){0,2})`, 'i');
    const match = text.match(regex);
    return match ? match[1].trim() : null;
}

function generateLocalStructuredAnalysis(analysis) {
    const { idea, industry, score, marketSize, competition, profitability } = analysis;
    
    return {
        summary: `Analysis of "${idea}" shows ${score >= 70 ? 'strong' : score >= 50 ? 'moderate' : 'limited'} market potential in the ${industry || 'technology'} sector. Overall viability score: ${score}/100.`,
        sections: [
            {
                icon: '📊',
                title: 'Market Opportunity',
                content: `Market size assessment reveals ${getMarketInsight(marketSize)} The ${industry || 'technology'} sector shows ${marketSize > 70 ? 'significant growth potential' : 'steady demand patterns'}.`,
                keyPoints: [
                    `Market size: ${marketSize}/100`,
                    `Demand level: ${marketSize > 70 ? 'High' : marketSize > 50 ? 'Medium' : 'Niche'}`,
                    `Growth trajectory: ${marketSize > 60 ? 'Positive' : 'Stable'}`
                ]
            },
            {
                icon: '🎯',
                title: 'Competitive Analysis',
                content: `${getCompetitionInsight(competition)} Market entry ${competition > 70 ? 'requires strong differentiation' : competition > 50 ? 'is moderately challenging' : 'presents good opportunities'}.`,
                keyPoints: [
                    `Competition level: ${competition}/100`,
                    `Market saturation: ${competition > 70 ? 'High' : competition > 50 ? 'Medium' : 'Low'}`,
                    `Differentiation need: ${competition > 60 ? 'Critical' : 'Important'}`
                ]
            },
            {
                icon: '💡',
                title: 'Business Model Viability',
                content: `${getProfitInsight(profitability)} Revenue generation ${profitability > 70 ? 'shows strong potential' : profitability > 50 ? 'is feasible with optimization' : 'requires careful planning'}.`,
                keyPoints: [
                    `Profit potential: ${profitability}/100`,
                    `Revenue streams: ${profitability > 70 ? 'Multiple options' : 'Limited but viable'}`,
                    `Scalability: ${profitability > 60 ? 'Good' : 'Moderate'}`
                ]
            },
            {
                icon: '🚀',
                title: 'Implementation Strategy',
                content: `Based on the analysis, ${score >= 70 ? 'immediate development is recommended' : score >= 50 ? 'validation phase should precede development' : 'concept refinement is needed before proceeding'}.`,
                keyPoints: [
                    `Priority level: ${score >= 70 ? 'High' : score >= 50 ? 'Medium' : 'Low'}`,
                    `Timeline: ${score >= 70 ? '3-6 months to MVP' : score >= 50 ? '6-12 months with validation' : '12+ months with pivot'}`,
                    `Resource needs: ${score >= 70 ? 'Moderate to high' : 'Moderate'}`
                ]
            }
        ]
    };
}

function getMarketInsight(size) {
    if (size >= 80) return 'a large addressable market with significant scaling opportunities.';
    if (size >= 60) return 'adequate market size supporting sustainable business growth.';
    return 'a niche market requiring focused customer targeting.';
}

function getCompetitionInsight(competition) {
    if (competition >= 80) return 'High competitive intensity requires exceptional differentiation.';
    if (competition >= 60) return 'Moderate competition allows for strategic positioning.';
    return 'Low competition presents first-mover advantage opportunities.';
}

function getProfitInsight(profit) {
    if (profit >= 80) return 'Strong monetization potential with multiple revenue opportunities.';
    if (profit >= 60) return 'Good profit margins achievable with proper execution.';
    return 'Profitability challenges require business model optimization.';
}

function generateDetailedLocalProphecy(analysis) {
    const { score, marketSize, competition, profitability, idea, industry } = analysis;
    
    let prophecy = `COMPREHENSIVE STARTUP ANALYSIS: "${idea}"\n`;
    prophecy += `Industry Focus: ${industry || 'General Technology'}\n\n`;
    
    // Executive Summary
    prophecy += "EXECUTIVE SUMMARY:\n";
    if (score >= 80) {
        prophecy += "This concept demonstrates exceptional market potential with strong fundamentals across multiple dimensions. The idea addresses a significant market need with clear monetization pathways and manageable competitive threats. Immediate development and market entry is recommended.\n\n";
    } else if (score >= 60) {
        prophecy += "The concept shows solid promise with good market fundamentals. While there are areas requiring refinement, the core idea has commercial viability. Strategic positioning and customer validation should be prioritized before full development.\n\n";
    } else {
        prophecy += "The current concept faces significant challenges that require substantial refinement. Market positioning, competitive differentiation, and value proposition need fundamental reassessment. Consider pivoting to a more focused niche or addressing specific pain points.\n\n";
    }
    
    // Market Analysis
    prophecy += "MARKET OPPORTUNITY ANALYSIS:\n";
    prophecy += `Market Size Score: ${marketSize}/100\n`;
    if (marketSize >= 80) {
        prophecy += "The addressable market is substantial, indicating billion-dollar opportunity potential. Large market size provides room for multiple players and significant scaling opportunities. Market timing appears favorable with growing demand trends.\n\n";
    } else if (marketSize >= 60) {
        prophecy += "Market size is adequate for building a profitable business. While not massive, there's sufficient demand to support sustainable growth. Focus on capturing market share through superior execution and customer experience.\n\n";
    } else {
        prophecy += "Market size is limited, suggesting a niche opportunity. Success will depend on dominating a specific segment and potentially expanding to adjacent markets. Consider if the niche is large enough to support your growth ambitions.\n\n";
    }
    
    // Competitive Analysis
    prophecy += "COMPETITIVE LANDSCAPE:\n";
    const competitionLevel = 100 - competition;
    prophecy += `Competition Intensity: ${competition}/100 (Lower is better)\n`;
    if (competitionLevel >= 80) {
        prophecy += "Low competitive intensity presents a significant first-mover advantage opportunity. Limited existing solutions suggest market validation may be needed, but barriers to entry are currently low. Move quickly to establish market position.\n\n";
    } else if (competitionLevel >= 60) {
        prophecy += "Moderate competition exists but market space remains available for differentiated players. Success requires clear value proposition and superior execution. Study competitor weaknesses and position accordingly.\n\n";
    } else {
        prophecy += "High competitive intensity requires exceptional differentiation and execution. Established players dominate the market, making entry challenging. Consider focusing on underserved segments or developing breakthrough innovation.\n\n";
    }
    
    // Business Model Analysis
    prophecy += "REVENUE & PROFITABILITY ASSESSMENT:\n";
    prophecy += `Profit Potential Score: ${profitability}/100\n`;
    if (profitability >= 80) {
        prophecy += "Strong monetization potential with multiple revenue stream opportunities. Business model supports high margins and scalable growth. Consider subscription, platform, or marketplace models for recurring revenue.\n\n";
    } else if (profitability >= 60) {
        prophecy += "Solid profit potential with sustainable unit economics. Revenue model is viable but may require optimization. Focus on customer lifetime value and efficient acquisition strategies.\n\n";
    } else {
        prophecy += "Profitability challenges require careful business model design. High customer acquisition costs or low margins may impact sustainability. Consider alternative monetization strategies or cost structure optimization.\n\n";
    }
    
    // Implementation Roadmap
    prophecy += "RECOMMENDED IMPLEMENTATION ROADMAP:\n";
    prophecy += "Phase 1 (Months 1-3): Market validation through customer interviews and prototype testing\n";
    prophecy += "Phase 2 (Months 4-6): MVP development and initial user acquisition\n";
    prophecy += "Phase 3 (Months 7-12): Product refinement, scaling, and potential funding\n\n";
    
    prophecy += "KEY SUCCESS FACTORS:\n";
    prophecy += "• Deep customer understanding and continuous feedback integration\n";
    prophecy += "• Agile development approach with rapid iteration cycles\n";
    prophecy += "• Strong founding team with complementary skills\n";
    prophecy += "• Sufficient runway for market education and customer acquisition\n";
    prophecy += "• Clear differentiation strategy and value proposition\n";
    
    return prophecy;
}

function animateMetric(id, targetValue) {
    const element = document.getElementById(id);
    let currentValue = 0;
    const increment = targetValue / 30;
    
    const animation = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(animation);
        }
        element.textContent = Math.round(currentValue);
    }, 50);
}



function updateProgressBar(id, value) {
    const bar = document.getElementById(id);
    bar.style.width = value + '%';
}



function loadTrends() {
    document.getElementById('hotTrends').innerHTML = 
        marketData.trends.hot.map(trend => `<li>${trend}</li>`).join('');
    document.getElementById('emergingTrends').innerHTML = 
        marketData.trends.emerging.map(trend => `<li>${trend}</li>`).join('');
    document.getElementById('decliningTrends').innerHTML = 
        marketData.trends.declining.map(trend => `<li>${trend}</li>`).join('');
}

function loadNiches(filter = 'all') {
    const grid = document.getElementById('nichesGrid');
    let filteredNiches = marketData.niches;
    
    if (filter !== 'all') {
        filteredNiches = marketData.niches.filter(niche => 
            niche.tags.includes(filter)
        );
    }
    
    grid.innerHTML = filteredNiches.map(niche => `
        <div class="niche-card">
            <h3>${niche.name}</h3>
            <p>${niche.description}</p>
            <div class="niche-stats">
                <div class="stat">
                    <div class="stat-value">${niche.marketSize}%</div>
                    <div class="stat-label">Market Size</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${100 - niche.competition}%</div>
                    <div class="stat-label">Opportunity</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${niche.growth}</div>
                    <div class="stat-label">Growth</div>
                </div>
            </div>
            <div class="niche-tags">
                ${niche.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function filterNiches(filter) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadNiches(filter);
}