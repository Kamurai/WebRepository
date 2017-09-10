require 'test_helper'

class Section25ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_5_index_url
    assert_response :success
  end

end
