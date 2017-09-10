require 'test_helper'

class Section2622ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_6_2_2_index_url
    assert_response :success
  end

end
