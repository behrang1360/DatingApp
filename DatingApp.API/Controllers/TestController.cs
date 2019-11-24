using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;

        public TestController(DataContext context ,IDatingRepository repo, IMapper mapper)
        {
            this._context = context;
             this._repo = repo;
             this._mapper = mapper;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var result = await _context.Users.Where(c => c.Id == id).FirstOrDefaultAsync();
            return Ok(result);
        }

        //  [HttpGet("{id}")]
        // public async Task<IActionResult> GetUser(int id)
        // {
        //     var user = await _repo.GetUser(id);

        //     var userToReturn = _mapper.Map<UserForDetailedDto>(user);

        //     return Ok(userToReturn);
        // }

    }
}