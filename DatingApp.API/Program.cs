using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace DatingApp.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}


// var host = 
// using (var scope = host.Services.CreateScope())
// {
//     var services = scope.ServiceProvider;

//     try
//     {
//         var context = services.GetRequiredService<DataContext>();
//         context.Database.Migrate();
//         Seed seed = new Seed(context);
//         seed.SeedUsers();
//     }
//     catch (
//         Exception ex
//     )
//     {


//     }